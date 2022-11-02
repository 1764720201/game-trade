<template>
	<view class="message">
		<view class="main-title">消息</view>
		<view class="inform" @click="goInform">
			<view class="t-icon t-icon-tongzhi"></view>
			<view class="right">
				<view class="title">
					系统通知
					<view class="time">
						<uni-dateformat
							:date="userInfo.register_date"
							format="yyyy-MM-dd hh:mm"
						></uni-dateformat>
					</view>
				</view>
				<view class="tips">
					交易兽新上线原神初始号、自抽号业务，帐....
				</view>
			</view>
		</view>
		<view class="consult" @click="goConsult">
			<view class="t-icon t-icon-xiong"></view>
			<view class="right">
				<view class="title">
					客服消息
					<view class="time">
						<uni-dateformat
							:date="userInfo.register_date"
							format="yyyy-MM-dd hh:mm"
						></uni-dateformat>
					</view>
				</view>
				<view class="tips">你说啥呢,我听不懂啊！！！</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import useStore from '@/store';
const store = useStore();
const { userInfo } = storeToRefs(store.user);
// 系统消息
const goInform = () => {
	uni.navigateTo({
		url: '/pages/Message/Inform/index'
	});
};
// 客服消息
const goConsult = () => {
	uni.navigateTo({
		url: '/pages/Message/Consult/index'
	});
};
</script>

<style lang="scss" scoped>
.message {
	width: 84%;
	margin-left: 8%;
	.main-title {
		margin-top: 30rpx;
		font-size: 50rpx;
		font-weight: 900;
	}
	.inform,
	.consult {
		position: relative;
		margin-top: 40rpx;
		padding: 30rpx;
		background-color: white;
		border-radius: 35rpx;
		display: flex;
		align-items: center;
		.t-icon {
			width: 70rpx;
			height: 70rpx;
		}
		.right {
			justify-content: space-between;
			display: flex;
			flex-direction: column;
			height: 80rpx;
			margin-left: 10rpx;
			.tips {
				font-size: 25rpx;
				color: #ccc;
			}
			.title {
				display: flex;
				align-items: center;
				.time {
					margin-left: 130rpx;
					font-size: 25rpx;
					color: #ccc;
				}
			}
		}
	}
}
</style>
