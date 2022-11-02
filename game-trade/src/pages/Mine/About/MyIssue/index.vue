<template>
	<About :option="issueOption" @option="getOptionIndex"></About>
	<AboutOption :where="where" collection="consignment"></AboutOption>
</template>

<script setup lang="ts">
import { Range } from '@/types/consignment';
import AboutOption from '@/components/AboutOption/index';
import About from '@/components/About/index';
import useStore from '@/store';
const store = useStore();
const { userId } = storeToRefs(store.user);
const where = ref<string>(`user_id=='${userId.value}'`);
const issueOption: Range[] = [
	{
		value: 0,
		text: '全部'
	},
	{
		value: 1,
		text: '已下架'
	},
	{
		value: 2,
		text: '已售出'
	}
];

const getOptionIndex = (index: number) => {
	switch (index) {
		case 0:
			where.value = `user_id=='${userId.value}'`;
			break;
		case 1:
			where.value = `user_id=='${userId.value}'&&state==${1}`;
			break;
		case 2:
			where.value = `user_id=='${userId.value}'&&state==${2}`;
			break;
	}
};
</script>

<style lang="scss" scoped></style>
