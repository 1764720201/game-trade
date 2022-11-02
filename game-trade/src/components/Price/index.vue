<template>
	<view class="price">
		<view class="item">
			手续费
			<view class="service">￥{{ service.toFixed(2) }}</view>
		</view>
		<view class="item">
			实际收入
			<view class="truth">￥{{ truth.toFixed(2) }}</view>
		</view>
	</view>
	<view class="tips">平台收取售价的5%作为手续费,单笔最少收取￥20</view>
</template>

<script setup lang="ts">
const props = defineProps<{ price: number }>();
const service = ref<number>(0.0);
const truth = ref<number>(0.0);
watch(
	() => props.price,
	newValue => {
		service.value = newValue * 0.05;
		if (service.value < 20 && service.value > 0) {
			service.value = 20;
		}
		truth.value = newValue - service.value;
		if (truth.value < 0) {
			truth.value = 0;
		}
	}
);
</script>

<style lang="scss" scoped>
.price {
	border-radius: 30rpx;
	margin-top: 30rpx;
	background-color: white;
	.item {
		padding: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 35rpx;
		font-weight: 900;
		color: #7b889a;
		.service,
		.truth {
			color: red;
			font-weight: 400;
			font-size: 30rpx;
		}
	}
}
.tips {
	margin-top: 30rpx;
	font-size: 23rpx;
	color: #909090;
}
</style>
