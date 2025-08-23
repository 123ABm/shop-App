<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI } from '@/services/home'
import { getHomeCategoryAPI } from '@/services/home'
import { getHomeHotAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import type { CategoryItem } from '@/types/home'
import type { HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'

const lunboList = ref<BannerItem[]>([])
const fenleiList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const isLoading = ref(false)

const getlunboData = async () => {
  const res = await getHomeBannerAPI()
  lunboList.value = res.result
}
const getfeileiData = async () => {
  const res = await getHomeCategoryAPI()
  fenleiList.value = res.result
}
const getHOtData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getMore()
  console.log('我触底啦！')
}
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getlunboData(), getfeileiData(), getHOtData()])
  isLoading.value = false
})

// 下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载数据
  await Promise.all([getlunboData(), getfeileiData(), getHOtData()]) // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view
    scroll-y
    @scrolltolower="onScrolltolower"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
  >
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
      <XtxSwiper :list="lunboList"></XtxSwiper>
      <CategoryPanel :list="fenleiList"></CategoryPanel>
      <HotPanel :list="hotList"></HotPanel>
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
/* 页面样式 */
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
