<template>
	<view class="home">
		<!-- 搜索框 -->
		<Search></Search>
		<!-- 轮播图 -->
		<Slide></Slide>
		<!-- 游戏种类 -->
		<Category></Category>
	</view>
</template>

<script lang="ts" setup>
// 分别引入各个组件
import Search from '@/pages/Home/Search/index';
import Slide from '@/pages/Home/Slide/index';
import Category from '@/pages/Home/Category/index';

onShow(async () => {});
</script>

<style lang="scss" scoped>
.home {
	width: 86%;
	margin-left: 7%;
}
</style>
