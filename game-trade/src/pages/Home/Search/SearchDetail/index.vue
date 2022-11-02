<template>
	<d-search-log
		:search_list_hot="search_list_hot"
		:store_key="store_key"
		@onClickDelAllApi="onClickDelAll"
		@onSearchNameApi="onSearchName"
		placeholder="请输入游戏名"
	></d-search-log>
	<view class="list">
		<List :where="where" :game="game" v-if="where"></List>
	</view>
</template>

<script lang="ts" setup>
import dSearchLog from '@/uni_modules/d-search-log/components/d-search-log/d-search-log.vue';
import List from '@/components/List/index';
const store_key = 'search_list';
const search_list_hot = ref([
	'原神',
	'王者荣耀',
	'永劫无间',
	'英雄联盟',
	'和平精英',
	'火影忍者',
	'DNF'
]);
const where = ref<string>('');
const game = ref<string>('');
const onSearchName = (e: string) => {
	where.value = `game=='${e}'`;
	game.value = e;
};
const onClickDelAll = () => {
	where.value = '';
	game.value = '';
};
</script>

<style lang="scss" scoped>
.list {
	width: 90%;
	margin-left: 5%;
}
</style>
