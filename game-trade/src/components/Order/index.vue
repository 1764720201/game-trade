<template>
	<unicloud-db
		ref="udb"
		v-slot:default="{ data, pagination, loading, error }"
		:collection="props.tabIndex == 0 ? 'purchase' : 'consignment'"
		orderby="create_time desc"
		field="create_time,_id, screenshot,consignment_id,price"
		:getone="false"
		:where="`user_id=='${userId}'&&state==1`"
	>
		<view v-if="error" class="error">{{ error.message }}</view>
		<view v-else class="list">
			<view class="item" v-for="item in data" :key="item._id">
				<!-- 根据当前的tab 获取不一样的详情id -->
				<image
					:src="item.screenshot[0].url"
					class="image"
					mode="aspectFill"
					@click="
						goDetail(tabIndex == 0 ? item.consignment_id : item._id)
					"
				></image>
				<view class="footer">
					<view class="price">￥{{ item.price.toFixed(2) }}</view>
					<view class="time">
						<uni-dateformat
							:date="item.create_time"
							format="yyyy-MM-dd hh:mm"
						></uni-dateformat>
					</view>
				</view>
			</view>
		</view>
		<view v-if="loading" class="loading">加载中...</view>
		<view class="noDate" v-if="data.length == 0">
			<image
				src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/eae436bf-77f9-40d5-92d9-d7e212cc9833.png"
				mode="aspectFit"
			></image>
			暂无数据
		</view>
	</unicloud-db>
</template>

<script lang="ts" setup>
import useStore from '@/store';
const store = useStore();
const { userId } = storeToRefs(store.user);
const props = defineProps<{ tabIndex: number }>();
// 前往详情界面
const goDetail = (id: number) => {
	uni.navigateTo({
		url: `/pages/Detail/index?id=${id}`
	});
};
const udb = ref(null);
onReachBottom(() => {
	//@ts-ignore
	udb.value.loadMore();
});
</script>

<style lang="scss" scoped>
.list {
	width: 90%;
	margin-left: 5%;
	.item {
		margin-top: 30rpx;
		padding: 20rpx;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 30rpx;
		.image {
			width: 500rpx;
			height: 350rpx;
			border-radius: 30rpx;
		}
		.footer {
			margin-top: 30rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.price {
				color: red;
				font-weight: 900;
			}
			.time {
				font-size: 25rpx;
				color: #ccc;
			}
		}
	}
}
.noDate {
	margin-top: 100rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #666;
}
</style>
