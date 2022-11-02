<template>
	<view class="screenshot" v-if="option == '游戏截图'">
		<view class="item" v-for="item in detail.screenshot" :key="item.name">
			<image class="image" :src="item.url" mode="aspectFill"></image>
		</view>
	</view>
	<view class="account-info" v-if="option == '账号信息'">
		<view class="item">单双排段位:{{ detail.grading }}</view>
		<view class="item">英雄数:{{ detail.amount }}</view>
		<view class="item">皮肤数:{{ detail.skin }}</view>
		<view class="item">炫彩数:{{ detail.dazzling }}</view>
		<view class="item">峡谷之巅资格:{{ detail.qualification }}</view>
	</view>
</template>

<script setup lang="ts">
import useStore from '@/store';
const store = useStore();
const { detail, option } = storeToRefs(store.detail);
</script>

<style lang="scss" scoped>
.screenshot {
	.image {
		border-radius: 30rpx;
		margin-top: 30rpx;
	}
}
.account-info {
	display: flex;
	flex-wrap: wrap;
	.item {
		width: 50%;
		padding: 10rpx 0;
	}
}
</style>
