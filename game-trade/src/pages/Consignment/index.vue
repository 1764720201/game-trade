<template>
	<!-- 根据获取的游戏名渲染 -->
	<view class="consignment">
		<!-- 原神 -->
		<GenshinImpact v-if="gameName == '原神'"></GenshinImpact>
		<!-- 英雄联盟 -->
		<LeagueofLegend v-if="gameName == '英雄联盟'"></LeagueofLegend>
		<!-- 王者荣耀 -->
		<GloryOfTheKing v-if="gameName == '王者荣耀'"></GloryOfTheKing>
	</view>
</template>

<script lang="ts" setup>
//引入原神
import GenshinImpact from './GenshinImpact/index';
// 引入英雄联盟
import LeagueofLegend from './LeagueofLegend/index';
// 引入王者荣耀
import GloryOfTheKing from './GloryOfTheKing/index';

// 初始化游戏名
const gameName = ref<string>('');

onLoad(option => {
	// 获取接收到的游戏名
	if (option.name) {
		gameName.value = option.name;
	}
});
</script>

<style lang="scss" scoped>
.consignment {
	width: 90%;
	margin-left: 5%;
	padding-bottom: 120rpx;
}
</style>
