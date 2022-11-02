<template>
	<view class="mine">
		<!-- 用户信息 -->
		<Data></Data>
		<!-- 用户相关 -->
		<About></About>
		<!-- 其余 -->
		<Other></Other>
	</view>
</template>

<script lang="ts" setup>
// 分别引入
import Data from '@/pages/Mine/Data/index';
import About from '@/pages/Mine/About/index';
import Other from '@/pages/Mine/Other/index';
</script>

<style lang="scss" scoped>
.mine {
	width: 86%;
	margin-left: 7%;
}
</style>
