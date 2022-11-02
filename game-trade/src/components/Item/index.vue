<template>
	<view class="item" @click="$emit('click', $event)">
		<view class="left">
			<view class="icon"><slot></slot></view>
			<view class="name">{{ props.name }}</view>
		</view>
		<view class="right">
			<view class="tips">{{ props.tips }}</view>
			<uni-icons type="forward" size="23" color="#aeaeae"></uni-icons>
		</view>
	</view>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string; tips?: string }>();
</script>

<style lang="scss" scoped>
.item {
	padding: 20rpx 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.left {
		display: flex;
		align-items: center;
		.icon {
			margin-top: 5rpx;
		}
		.name {
			margin-left: 20rpx;
		}
	}
	.right {
		display: flex;
		align-content: center;
		.tips {
			margin-top: 5rpx;
			font-size: 25rpx;
			color: #9e9e9e;
		}
	}
}
</style>
