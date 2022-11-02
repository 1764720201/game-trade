<template>
	<unicloud-db
		ref="udb"
		v-slot:default="{ data, pagination, loading, error }"
		collection="balance"
		orderby="create_time desc"
		field="money,create_time,_id"
		:where="`user_id=='${userId}'`"
	>
		<view v-if="error" class="error">{{ error.message }}</view>
		<view v-else class="list">
			<view class="item" v-for="item in data" :key="item._id">
				<view class="acquire" v-if="item.money >= 0">
					<view class="title">破解版</view>
					+{{ item.money }}
				</view>
				<view class="expenditure" v-else>
					<view class="title">支出</view>
					{{ item.money }}
				</view>

				<view class="time">
					<uni-dateformat
						:date="item.create_time"
						format="yyyy-MM-dd hh:mm"
					></uni-dateformat>
				</view>
			</view>
		</view>
		<view v-if="loading" class="loading">加载中...</view>
	</unicloud-db>
</template>

<script lang="ts" setup>
import useStore from '@/store';
const store = useStore();
const { userId } = storeToRefs(store.user);
</script>

<style lang="scss" scoped>
.list {
	margin-top: 30rpx;
	width: 90%;
	margin-left: 5%;
	background-color: white;
	border-radius: 30rpx;
	.item {
		border-top: 1rpx solid #ccc;
		padding: 30rpx;
		height: 70rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.acquire,
		.expenditure {
			display: flex;
			justify-content: space-between;
		}
		.acquire {
			color: red;
			.title {
				color: black;
			}
		}
		.time {
			font-size: 26rpx;
			color: #666;
		}
		&:first-child {
			border-top: none;
		}
	}
}
</style>
