<template>
	<view class="options">
		<view
			class="item"
			v-for="item in props.option"
			:key="item.value"
			@click="changeOption(item.value)"
			:style="
				item.value == currentOption
					? { fontWeight: 900 }
					: { color: '#ccc' }
			"
		>
			{{ item.text }}
		</view>
	</view>
</template>

<script lang="ts" setup>
import { Range } from '@/types/consignment';

const props = defineProps<{ option: Range[] }>();

const emit = defineEmits(['option']);
const currentOption = ref<number>(0);
const changeOption = (index: number) => {
	currentOption.value = index;
	emit('option', index);
};
</script>

<style lang="scss" scoped>
.options {
	display: flex;
	width: 90%;
	margin-left: 5%;
	justify-content: space-between;
	margin-top: 40rpx;
	.item {
		padding: 20rpx 45rpx;
		border-radius: 30rpx;
		background-color: white;
	}
}
</style>
