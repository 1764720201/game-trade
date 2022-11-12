<template>
	<view class="data">
		<!-- 头像 -->
		<image
			class="avatar"
			:src="userInfo.avatar_file?.url"
			mode="aspectFill"
		></image>
		<!-- 用户信息-->
		<view class="information">
			<!-- 昵称 -->
			<view class="name">
				<view class="text">{{ userInfo.nickname }}</view>
				<!-- 前往修改昵称界面 -->
				<view class="t-icon t-icon-xiugai" @click="goAmend"></view>
			</view>
			<!-- ID -->
			<view class="id">ID:{{ userInfo._id.toString().slice(0, 6) }}</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import useStore from '@/store';
// 用户信息

// 获取pinia存储的用户相关的数据
const store = useStore();
// // 获取保存在pinia的用户信息
const { userInfo } = storeToRefs(store.user);
onLoad(() => {
	store.user.getUserInfo();
});
const goAmend = () => {
	uni.navigateTo({
		url: '/pages/Mine/Data/Amend/index'
	});
};
</script>

<style lang="scss" scoped>
.data {
	margin-top: 80rpx;
	width: 100%;
	display: flex;
	align-items: center;
	.avatar {
		width: 130rpx;
		height: 130rpx;
		border-radius: 50%;
	}
	.information {
		height: 120rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 40rpx;
		.name {
			display: flex;
			align-items: center;
			.t-icon-xiugai {
				margin-left: 10rpx;
				width: 30rpx;
				height: 30rpx;
			}
		}
		.id {
			color: #666;
		}
	}
}
</style>
