const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
import { useMemberStore } from '@/stores'

//请求拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }

    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) =>
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else if (res.statusCode === 400) {
          // 客户端错误，显示服务器返回的错误信息
          const errorMsg = (res.data as any)?.msg || '请求参数错误'
          uni.showToast({ icon: 'none', title: errorMsg })
          reject(res)
        } else if (res.statusCode === 403) {
          uni.showToast({ icon: 'none', title: '权限不足' })
          reject(res)
        } else if (res.statusCode === 404) {
          uni.showToast({ icon: 'none', title: '请求的资源不存在' })
          reject(res)
        } else if (res.statusCode >= 500) {
          uni.showToast({ icon: 'none', title: '服务器错误，请稍后重试' })
          reject(res)
        } else {
          uni.showToast({ icon: 'none', title: '网络错误，换个网络试试' })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    }),
  )
}
