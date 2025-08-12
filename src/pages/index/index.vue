<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI } from '@/services/home.ts'
import type { BannerItem } from '@/types/home'

const lunboList = ref<BannerItem[]>([])
const getlunboData = async () => {
  const res = await getHomeBannerAPI()
  lunboList.value = res.result
}

onLoad(() => {
  getlunboData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="lunboList"></XtxSwiper>
</template>

<style lang="scss">
.container {
  overflow: hidden;
}

.custom-cover {
  flex: 1;
  flex-direction: row;
  position: relative;
}

.cover-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: rgba($color: #000000, $alpha: 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  font-size: 14px;
  color: #fff;
}

.card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 45px;
  border-top: 1px #eee solid;
}
.card-actions-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.card-actions-item-text {
  font-size: 12px;
  color: #666;
  margin-left: 5px;
}
.cover-image {
  flex: 1;
  height: 150px;
}
.no-border {
  border-width: 0;
}
</style>
