<template>
	<view class="help-centre">
		<view class="tab">
			<view
				class="tab-item"
				v-for="item in tab"
				:key="item.value"
				@click="changeTab(item.value)"
			>
				<view
					class="text"
					:style="{
						color: item.value == currentTab ? '#5869ee' : '#555555'
					}"
				>
					{{ item.text }}
				</view>
				<view class="underline" v-if="item.value == currentTab"></view>
			</view>
		</view>
	</view>
	<view class="item"><Order :tabIndex="currentTab"></Order></view>
</template>

<script lang="ts" setup>
import { Range } from '@/types/consignment';
import Order from '@/components/Order/index';

const tab = ref<Range[]>([
	{
		value: 0,
		text: '我购买的'
	},
	{
		value: 1,
		text: '我售出的'
	}
]);
// 当前的tab
const currentTab = ref<number>(0);
// 切换tab
const changeTab = (index: number) => {
	currentTab.value = index;
};
</script>

<style lang="scss" scoped>
.help-centre {
	.tab {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		.tab-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-left: 30rpx;
			.underline {
				height: 15rpx;
				width: 80%;
				border-bottom: 7rpx solid #5869ee;
			}
		}
	}
}
.item {
	width: 90%;
	margin-top: 50rpx;
	margin-left: 5%;
}
.footer {
	height: 300rpx;
	text-align: center;
	width: 90%;
	margin-left: 5%;
	position: fixed;
	bottom: 20rpx;
	.tips {
		font-size: 26rpx;
	}
	.t-icon {
		width: 45rpx;
		height: 45rpx;
		margin-right: 10rpx;
	}
}
</style>
