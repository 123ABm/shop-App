<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()
const getnewData = async () => {
  const res = await http<String[]>({
    method: 'GET',
    url: '/goods',
  })
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '小易先锋',
          token: '10086',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getnewData()" size="mini" plain type="warn">网络请求测试</button>
  </view>
</template>

<style lang="scss">
//
</style>
