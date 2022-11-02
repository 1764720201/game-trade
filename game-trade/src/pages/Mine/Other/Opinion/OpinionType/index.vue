<template>
	<view class="opinion-type">
		<view class="describe">
			<view class="title">问题描述</view>
			<textarea
				auto-focus
				maxlength="300"
				class="textarea"
				placeholder="请说说您的建议与反馈,方便我们为您提供更好的服务"
				placeholder-class="plac"
				v-model="describe"
				display
			></textarea>
			<view class="font-num">{{ fontNum }}/300</view>
		</view>
		<view class="upload-picture"><File title="上传图片(选填)"></File></view>
		<Submit title="提交反馈"></Submit>
	</view>
</template>

<script lang="ts" setup>
import File from '@/components/File/index';
import Submit from '@/components/Button/index';
// 默认描述为空
const describe = ref<string>('');
// 默认字数为0
const fontNum = ref<number>(0);
// 实时更新当前字数
watch(
	() => describe.value,
	() => {
		fontNum.value = describe.value.length;
	}
);
</script>

<style lang="scss" scoped>
.opinion-type {
	width: 90%;
	margin-left: 5%;
	.describe {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 500rpx;
		position: relative;
		.title {
			margin-left: 30rpx;
			font-weight: 900;
		}
		.textarea {
			background-color: white;
			padding: 33rpx;
			border-radius: 30rpx;
		}
		.font-num {
			position: absolute;
			right: 40rpx;
			bottom: 40rpx;
			font-size: 26rpx;
			color: #666;
		}
	}
	.upload-picture {
		margin-bottom: 400rpx;
	}
}
:deep(.plac) {
	font-size: 28rpx;
	color: #ccc;
}
</style>
