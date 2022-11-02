<template>
	<view class="sell">
		<view class="title">游戏</view>
		<view class="game">
			<view
				class="item"
				v-for="item in categoryList"
				:key="item.id"
				@click="goConsignment(item.name)"
			>
				<image class="icon" :src="item.icon" mode="aspectFill"></image>
				<view class="name">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
type CategoryList = {
	id: number;
	name: string;
	icon: string;
};
const categoryList = reactive<CategoryList[]>([]);

const db = uniCloud.database();
onLoad(async () => {
	// 获取所有游戏种类
	await db
		.collection('category')
		.get()
		.then(res => categoryList.push(...res.result.data));
});

// 根据选择的游戏名跳转到寄售界面
const goConsignment = (name: string) => {
	uni.navigateTo({
		url: `/pages/Consignment/index?name=${name}`
	});
};
</script>

<style lang="scss" scoped>
.sell {
	width: 90%;
	margin-left: 5%;
	padding-bottom: 50rpx;
	.title {
		padding: 20rpx;
		font-weight: 900;
		font-size: 35rpx;
	}
	.game {
		flex-wrap: wrap;
		border-radius: 30rpx;
		background-color: white;
		padding: 30rpx;
		display: flex;
		justify-content: space-around;
		.item {
			width: 25%;
			margin-top: 30rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 25rpx;
			font-weight: 900;
			.icon {
				margin-bottom: 10rpx;
				border-radius: 50%;
				width: 105rpx;
				height: 105rpx;
			}
		}
	}
}
</style>
