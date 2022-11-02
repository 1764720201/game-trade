<template>
	<view class="slider">
		<view class="uni-margin-wrap">
			<!-- 轮播图 -->
			<!-- 设置了循环，自动播放 -->
			<swiper
				class="swiper"
				circular
				autoplay
				indicator-dots
				indicator-color="#a9a9a9"
				indicator-active-color="#fff"
			>
				<swiper-item v-for="item in sliderList" :key="item.id">
					<image
						class="swiper-image"
						:src="item.src"
						mode="aspectFill"
					></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script lang="ts" setup>
type SliderList = {
	id: number;
	src: string;
};
// 轮播图列表
const sliderList = reactive<SliderList[]>([
	{
		id: 0,
		src:
			'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/723bd5ce-6560-42d0-8dac-cff2409c2ac7.jpeg'
	},
	{
		id: 1,
		src:
			'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/0204cdc5-04b8-44f4-a8b1-546fc3eca367.jpeg'
	},
	{
		id: 2,
		src:
			'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/de7e497b-6eb5-4070-90dd-04897e9de812.jpeg'
	},
	{
		id: 3,
		src:
			'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/b8cefa5d-de34-4115-bf95-26307ce901a3.jpeg'
	}
]);
</script>

<style lang="scss" scoped>
.slider {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50rpx;
}
.uni-margin-wrap {
	width: 690rpx;
	width: 100%;
}
.swiper {
	height: 300rpx;
	&-image {
		margin-left: 1rpx;
		width: 100%;
		height: 300rpx;
		border-radius: 30rpx;
	}
}
.swiper-item {
	display: block;
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
}
.swiper-list {
	margin-top: 40rpx;
	margin-bottom: 0;
}
.uni-common-mt {
	margin-top: 60rpx;
	position: relative;
}
.info {
	position: absolute;
	right: 20rpx;
}
.uni-padding-wrap {
	width: 550rpx;
	padding: 0 100rpx;
}
</style>
