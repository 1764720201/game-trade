<template>
	<view class="opinion">
		<view class="title">请选择反馈的类型</view>
		<view class="opinionList">
			<view
				class="item"
				v-for="item in opinionList"
				:key="item.value"
				@click="goOpinionType(item.value)"
			>
				<view class="type">{{ item.text }}</view>
				<uni-icons type="right" size="23" color="#ccc"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { Range } from '@/types/consignment';
const opinionList = ref<Range[]>([
	{
		value: 0,
		text: '产品功能建议'
	},
	{
		value: 1,
		text: '服务投诉'
	},
	{
		value: 2,
		text: '其它'
	}
]);
// 前往意见类型

const goOpinionType = (index: number) => {
	uni.navigateTo({
		url: `/pages/Mine/Other/Opinion/OpinionType/index?type=${index}`
	});
};
</script>

<style lang="scss" scoped>
.opinion {
	margin-top: 40rpx;
	width: 90%;
	margin-left: 5%;
	.title {
		font-weight: 900;
	}
	.opinionList {
		margin-top: 30rpx;
		padding: 40rpx;
		background-color: white;
		border-radius: 30rpx;
		display: flex;
		flex-direction: column;
		height: 250rpx;
		justify-content: space-between;
		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
}
</style>
