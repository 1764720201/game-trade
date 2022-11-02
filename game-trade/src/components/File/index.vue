<template>
	<view class="file">
		<view class="title">{{ props.title }}</view>
		<uni-file-picker
			fileMediatype="image"
			:image-styles="imageStyles"
			v-model="imageList"
			@success="select"
			@delete="select"
		>
			<view class="upload">
				<uni-icons type="plusempty" size="30" color="#ccc"></uni-icons>
			</view>
		</uni-file-picker>
	</view>
</template>

<script lang="ts" setup>
import type {Image} from '@/types/consignment'
// 获取父组件传来的数据
const props = defineProps<{ title: string }>();
const imageList = ref<Image[]>([]);
// 设置上传样式
const imageStyles = reactive({
	width: 80,
	height: 80,
	border: {
		radius: '10'
	}
});
const emit = defineEmits(['file']);
const select = () => {
	setTimeout(()=>{
		emit('file', imageList.value);
	},200)
};
</script>

<style lang="scss" scoped>
.file {
	margin-top: 30rpx;
	background-color: white;
	padding: 20rpx;
	border-radius: 20rpx;
	.title {
		margin-bottom: 40rpx;
		font-size: 33rpx;
		font-weight: 900;
	}
	.upload {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
