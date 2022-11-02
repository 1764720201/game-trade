<template>
	<view class="screenshot" v-if="option == '游戏截图'">
		<view class="item" v-for="item in detail.screenshot" :key="item.name">
			<image class="image" :src="item.url" mode="aspectFill"></image>
		</view>
	</view>
	<view class="account-info" v-if="option == '账号信息'">
		<view class="header">
			<view class="email">邮箱：{{ detail.email }}</view>
			<view class="level">冒险等级：{{ detail.level }}</view>
		</view>
		<view class="other">
			其它亮点：{{ detail.otherBright ? detail.otherBright : '无' }}
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
		.email {
			width: 60%;
		}
	}
	.other {
		margin-top: 35rpx;
	}
}
</style>
