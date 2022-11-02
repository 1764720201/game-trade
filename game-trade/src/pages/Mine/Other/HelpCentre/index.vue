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
	<view class="item"><HelpCentre :tabIndex="currentTab"></HelpCentre></view>
	<view class="footer">
		<view class="tips">客服服务时间为 08:00:00-02:00:00</view>
		<Consult title="咨询客服" @click="goConsult">
			<view class="t-icon t-icon-kefuzhongxin"></view>
		</Consult>
	</view>
</template>

<script lang="ts" setup>
import { Range } from '@/types/consignment';
import HelpCentre from '@/components/HelpCentre/index';
import Consult from '@/components/Button/index';
const tab = ref<Range[]>([
	{
		value: 0,
		text: '常见问题'
	},
	{
		value: 1,
		text: '买家相关'
	},
	{
		value: 2,
		text: '卖家相关'
	},
	{
		value: 3,
		text: '售后'
	}
]);
// 当前的tab
const currentTab = ref<number>(0);
// 切换tab
const changeTab = (index: number) => {
	currentTab.value = index;
};

// 前往客服界面
const goConsult = () => {
	uni.navigateTo({
		url: '/pages/Message/Consult/index'
	});
};
</script>

<style lang="scss" scoped>
.help-centre {
	.tab {
		margin-top: 20rpx;
		display: flex;
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
