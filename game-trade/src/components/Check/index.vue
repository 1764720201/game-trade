<template>
	<view class="check">
		<view class="title">{{ props.title }}</view>
		<uni-data-checkbox
			selectedColor="#dcddea"
			selectedTextColor="#000"
			v-model="check"
			:localdata="props.range"
			@change="select"
			mode="tag"
		></uni-data-checkbox>
	</view>
</template>

<script lang="ts" setup>
// 默认选择项
const check = ref<number>(-1);

type Range = {
	value: number;
	text: string;
};
// 获取接收到的选项和标题
const props = defineProps<{ range: Range[]; title?: string }>();
const emit = defineEmits(['check']);
const select = () => {
	emit('check', check.value);
};
</script>

<style scoped lang="scss">
.check {
	margin-top: 40rpx;
	background-color: white;
	padding: 20rpx;
	border-radius: 20rpx;
	.title {
		font-size: 30rpx;
		font-weight: 900;
	}
}
</style>
