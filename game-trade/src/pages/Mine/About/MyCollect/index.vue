<template>
	<view class="my-collect">
		<view class="item" v-for="item in collectList" :key="item._id">
			<view class="header" @click="goDetail(item.consignment_id[0]._id)">
				<unicloud-db
					v-slot:default="{ data, loading, error, options }"
					collection="category"
					:where="`name=='${item?.consignment_id[0].game}'`"
					:getone="true"
				>
					<view v-if="error">{{ error.message }}</view>
					<view v-else>
						<image
							class="image"
							:src="data?.icon"
							mode="aspectFill"
						></image>
					</view>
				</unicloud-db>
				<view class="region">{{ item?.consignment_id[0].region }}</view>
				<view class="server">{{ item?.consignment_id[0].server }}</view>
			</view>
			<view class="body" @click="goDetail(item.consignment_id[0]._id)">
				<view v-if="item?.consignment_id[0].game == '原神'">
					邮箱:{{ item?.consignment_id[0].email }} 冒险等级:{{
						item?.consignment_id[0].level
					}}
					其它亮点{{
						item?.consignment_id[0].otherBright
							? item?.consignment_id[0].otherBright
							: '无'
					}}
				</view>
				<view v-if="item?.consignment_id[0].game == '英雄联盟'">
					英雄数:{{ item?.consignment_id[0].amount }} 皮肤数:{{
						item?.consignment_id[0].skin
					}}
					炫彩数:{{ item?.consignment_id[0].dazzling }} 单双排段位:{{
						item?.consignment_id[0].grading
					}}
				</view>
			</view>
			<view class="footer">
				<view class="serial">
					商品编号：{{ item?.consignment_id[0]._id.slice(0, 6) }}
				</view>
				<view class="price">
					￥{{ item?.consignment_id[0].price.toFixed(2) }}
				</view>
			</view>
			<view class="remove" @click="remove(item._id)">删除</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import useStore from '@/store';
import { Detail } from '@/types/consignment';
const store = useStore();

const db = uniCloud.database();

const collectList = ref<Detail[]>([]);
const getCollectList = async () => {
	const { userId } = storeToRefs(store.user);
	const collect = db
		.collection('collect')
		.where(`user_id=='${userId.value}'`)
		.getTemp();
	await db
		.collection(collect, 'consignment')
		.get()
		.then(res => {
			collectList.value = res.result.data;
		});
};
onLoad(async () => {
	getCollectList();
});
// 前往详情页面
const goDetail = (id: string) => {
	uni.navigateTo({
		url: `/pages/Detail/index?id=${id}`
	});
};
// 删除收藏
const remove = async (id: string) => {
	await db
		.collection('collect')
		.where(`_id=='${id}'`)
		.remove()
		.then(() => {
			uni.showToast({
				title: '取消收藏成功'
			});
		});
	getCollectList();
};
</script>

<style lang="scss" scoped>
.my-collect {
	margin-left: 5%;
	width: 90%;
	.item {
		height: 300rpx;
		margin-top: 30rpx;
		background-color: white;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 20rpx;
		.header {
			display: flex;
			align-items: center;
			.region,
			.server {
				margin-left: 10rpx;
			}
			.image {
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
			}
		}
		.footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.serial {
				font-size: 26rpx;
				color: #ccc;
			}
			.price {
				font-weight: 900;
				color: red;
				font-size: 35rpx;
			}
		}
		.remove {
			width: 150rpx;
			height: 50rpx;
			border-radius: 30rpx;
			border: 1px solid #ccc;
			text-align: center;
			line-height: 50rpx;
		}
	}
}
</style>
