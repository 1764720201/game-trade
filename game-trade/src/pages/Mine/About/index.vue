<template>
	<view class="about">
		<view class="detail">
			<!-- 顶部 -->
			<view class="header">
				<view class="item" @click="goMyCollect">
					<view class="t-icon t-icon-star"></view>
					我的收藏
				</view>
				|
				<view class="item" @click="goVerify">
					<view class="t-icon t-icon-icon-auth"></view>
					验证客服
				</view>
				|
				<view class="item" @click="goAfterSale">
					<view class="t-icon t-icon-shouhoufuwu"></view>
					售后服务
				</view>
			</view>
			<!-- 中间 -->
			<view class="content">
				<view class="title">我的交易</view>
				<view class="text">交易安全保护中</view>
			</view>
			<!-- 底部 -->
			<view class="footer">
				<view class="item" @click="goMyPurcharse">
					<view class="t-icon t-icon-daizi"></view>
					我购买的
				</view>
				<view class="item" @click="goMyIssue">
					<view class="t-icon t-icon-shangdian"></view>
					我发布的
				</view>
				<view class="item" @click="goMySale">
					<view class="t-icon t-icon-jizhang"></view>
					我卖出的
				</view>
				<view class="item" @click="goMyWallet">
					<view class="t-icon t-icon-qianbao1"></view>
					我的钱包
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
// 前往 我的收藏 页面
const goMyCollect = () => {
	uni.navigateTo({
		url: '/pages/Mine/About/MyCollect/index'
	});
};
// 前往 我购买的 页面
const goMyPurcharse = () => {
	uni.navigateTo({
		url: '/pages/Mine/About/MyPurcharse/index'
	});
};
// 前往 我发布的 页面
const goMyIssue = () => {
	uni.navigateTo({
		url: '/pages/Mine/About/MyIssue/index'
	});
};
// 前往 我卖出的 页面
const goMySale = () => {
	uni.navigateTo({
		url: '/pages/Mine/About/MySale/index'
	});
};

// 前往 验证客服 页面
const goVerify = () => {
	uni.navigateTo({
		url: '/pages/Mine/About/Verify/index'
	});
};
// 前往 售后服务 页面
const goAfterSale = () => {
	uni.navigateTo({
		url: '/pages/Mine/About/AfterSale/index'
	});
};
// 前往 我的钱包 页面
const goMyWallet = () => {
	uni.navigateTo({
		url: '/pages/Mine/About/MyWallet/index'
	});
};
</script>

<style lang="scss" scoped>
.about {
	margin-top: 40rpx;
	border-radius: 30rpx;
	background-color: white;
	width: 100%;
	.detail {
		padding: 20rpx;
		.header {
			color: #404040;
			margin-top: 20rpx;
			width: 100%;
			justify-content: space-around;
			display: flex;
			align-items: center;
			.item {
				display: flex;
				align-items: center;
				font-size: 28rpx;
				.t-icon {
					margin-right: 10rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
		.content {
			margin-top: 70rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title {
				font-weight: 900;
			}
			.text {
				font-size: 24rpx;
				color: #a2a2a2;
			}
		}
		.footer {
			margin-top: 40rpx;
			display: flex;
			align-items: baseline;
			justify-content: space-around;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				font-weight: 700;
				.t-icon {
					margin-bottom: 15rpx;
				}
				.t-icon-jizhang {
					width: 53rpx;
					height: 53rpx;
				}
			}
		}
	}
}
</style>
