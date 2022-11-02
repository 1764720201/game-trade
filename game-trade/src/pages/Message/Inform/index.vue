<template>
	<view class="inform">
		<view class="item">
			<view class="time">
				<uni-dateformat
					:date="userInfo.register_date"
					format="yyyy-MM-dd hh:mm"
				></uni-dateformat>
			</view>
			<view class="body">
				<view class="title">原神初始号业务上线~</view>
				<view class="content">
					交易兽新上线原神初始号、自抽号业务，账号可定制，每日精选推荐，客服1V1帮找号，优惠多多，详情请看首页广告栏
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import useStore from '@/store';
const store = useStore();
const { userInfo } = storeToRefs(store.user);
</script>

<style lang="scss" scoped>
.inform {
	display: flex;
	width: 90%;
	margin-left: 5%;
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		.time {
			margin-top: 30rpx;
			color: #666;
		}
		.body {
			margin-top: 40rpx;
			border-radius: 30rpx;
			padding: 30rpx;
			background-color: white;
			.content {
				margin-top: 30rpx;
				font-size: 28rpx;
				color: #666;
			}
		}
	}
}
</style>
