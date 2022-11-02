<template>
	<view class="search" @click="goSearchDetail">
		<view class="search-content">
			<view class="search-content-text">请输入游戏名</view>
			<uni-icons type="search" size="30" color="#1296db"></uni-icons>
		</view>
	</view>
</template>

<script lang="ts" setup>
const goSearchDetail = () => {
	uni.navigateTo({
		url: '/pages/Home/Search/SearchDetail/index'
	});
};
</script>

<style lang="scss" scoped>
.search {
	margin-top: 30rpx;
	width: 100%;
	height: 90rpx;
	background-color: white;
	display: flex;
	justify-content: center;
	border-radius: 20rpx;
	&-content {
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-text {
			font-size: 27rpx;
			color: #9b9b9b;
		}
	}
}
</style>
