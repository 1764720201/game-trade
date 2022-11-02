<template>
	<view class="logout" @click="mutations.logout">退出登录</view>
</template>

<script lang="ts" setup>
import { mutations } from '@/uni_modules/uni-id-pages/common/store.js';
</script>

<style lang="scss" scoped>
.logout {
	width: 100%;
	height: 120rpx;
	background-color: white;
	text-align: center;
	border-radius: 30rpx;
	color: red;
	line-height: 120rpx;
	font-weight: 900;
}
</style>
