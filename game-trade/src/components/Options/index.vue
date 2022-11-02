<template>
	<view class="options">
		<view class="title">{{ option }}</view>
		<GenshinImpact v-if="props.game == '原神'"></GenshinImpact>
		<LeagueofLegend v-if="props.game == '英雄联盟'"></LeagueofLegend>
		<GloryOfTheKing v-if="props.game == '王者荣耀'"></GloryOfTheKing>
		<view class="communication-group" v-if="option == '游戏交流群'">
			<image
				class="image"
				src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/6dace122-335e-452a-a921-309072110a40.jpg"
				mode="aspectFit"
			></image>
		</view>
	</view>
</template>

<script lang="ts" setup>
import GenshinImpact from '@/components/Options/GenshinImpact/index';
import LeagueofLegend from '@/components/Options/LeagueofLegend/index';
import GloryOfTheKing from '@/components/Options/GloryOfTheKing/index';
import useStore from '@/store';
const store = useStore();
const { option } = storeToRefs(store.detail);
const props = defineProps<{ game: string }>();
</script>

<style lang="scss" scoped>
.options {
	padding-bottom: 300rpx;
	.title {
		margin-bottom: 30rpx;
		border-left: 8rpx solid #5869ee;
		padding-left: 20rpx;
		font-weight: 900;
		font-size: 35rpx;
		height: 40rpx;
		line-height: 40rpx;
	}
	.image {
		height: 900rpx;
		width: 100%;
	}
}
</style>
