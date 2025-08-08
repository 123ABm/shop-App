<script setup lang="ts"></script>

<template>
  <view class="container">
    <uni-section title="卡片+列表" type="line">
      <uni-card padding="0" spacing="0">
        <template v-slot:cover>
          <view class="custom-cover">
            <image
              class="cover-image"
              mode="aspectFill"
              src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
            >
            </image>
            <view class="cover-content">
              <text class="uni-subtitle uni-white">今日新闻热点</text>
            </view>
          </view>
        </template>
        <uni-list>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
        </uni-list>
        <view slot="actions" class="card-actions no-border">
          <view class="card-actions-item" @click="actionsClick('分享')">
            <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>
  </view>
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
