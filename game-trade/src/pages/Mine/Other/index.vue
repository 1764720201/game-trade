<template>
	<view class="other">
		<view class="detail">
			<!-- 通过父传子传入标题 -->
			<Item name="团队招募" @click="goTeam">
				<!-- 通过插槽传入图标 -->
				<view class="t-icon t-icon-tuandui"></view>
			</Item>
			<Item name="商务合作" @click="goCooperation">
				<view class="t-icon t-icon-hezuo"></view>
			</Item>
		</view>
		<view class="detail">
			<Item name="帮助中心" @click="goHelpCentre">
				<view class="t-icon t-icon-message_center"></view>
			</Item>
			<Item
				name="意见与反馈"
				tips="提交投诉、功能建议"
				@click="goOpinion"
			>
				<view class="t-icon t-icon-yijianfankui"></view>
			</Item>
			<Item name="设置" @click="goSet">
				<view class="t-icon t-icon-shezhi"></view>
			</Item>
		</view>
	</view>
</template>

<script lang="ts" setup>
//引入 Item组件
import Item from '@/components/Item/index';

//跳往团队招募界面
const goTeam = () => {
	uni.navigateTo({
		url: '/pages/Mine/Other/Team/index'
	});
};
// 跳往商务合作界面
const goCooperation = () => {
	uni.navigateTo({
		url: '/pages/Mine/Other/Cooperation/index'
	});
};

// 跳往帮助中心界面
const goHelpCentre = () => {
	uni.navigateTo({
		url: '/pages/Mine/Other/HelpCentre/index'
	});
};

// 跳往意见与反馈界面
const goOpinion = () => {
	uni.navigateTo({
		url: '/pages/Mine/Other/Opinion/index'
	});
};

// 跳往设置界面
const goSet = () => {
	uni.navigateTo({
		url: '/pages/Mine/Other/Set/index'
	});
};
</script>

<style lang="scss" scoped>
.other {
	width: 100%;
	.detail {
		border-radius: 30rpx;
		background-color: white;
		margin-top: 40rpx;
		padding: 25rpx;
		.t-icon {
			width: 40rpx;
			height: 40rpx;
		}
	}
}
</style>
