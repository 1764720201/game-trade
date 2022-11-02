<template>
	<view class="screenshot" v-if="option == '游戏截图'">
		<view class="item" v-for="item in detail.screenshot" :key="item.name">
			<image class="image" :src="item.url" mode="aspectFill"></image>
		</view>
	</view>
	<view class="account-info" v-if="option == '账号信息'">
		<view class="header">
			<view class="skin">皮肤数：{{ detail.skin }}</view>
			<view class="level">贵族等级：{{ detail.level }}</view>
		</view>
		<view class="other">
			<view class="item">
				星传说：{{ detail.legend ? detail.legend : '无' }}
			</view>
			<view class="item">
				国标：{{ detail.national ? detail.national : '无' }}
			</view>
		</view>
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
	flex-direction: column;
	.header {
		display: flex;
		.skin {
			width: 60%;
		}
	}
	.other {
		display: flex;
		flex-direction: column;
		.item {
			margin-top: 30rpx;
		}
	}
}
</style>
