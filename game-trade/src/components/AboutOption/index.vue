<template>
	<unicloud-db
		ref="udb"
		v-slot:default="{ data, loading, error }"
		:collection="collection"
		orderby="create_time desc"
		field="screenshot,_id,create_time,game,price,state,consignment_id"
		:getone="false"
		:where="props.where"
		:page-size="4"
	>
		<view v-if="error" class="error">{{ error.message }}</view>
		<view v-else class="list">
			<view class="item" v-for="item in data" :key="item._id">
				<image
					@click="goDetail(item._id)"
					class="image"
					:src="item.screenshot[0].url"
					mode="aspectFill"
				></image>
				<view class="right">
					<view class="header">
						<view class="game-name">{{ item.game }}</view>
						<view class="price">￥{{ item.price.toFixed(2) }}</view>
					</view>
					<view class="time">
						<uni-dateformat
							:date="item.create_time"
							format="yyyy-MM-dd hh:mm"
						></uni-dateformat>
					</view>
					<view class="delete">
						<uni-icons
							type="trash"
							size="20"
							v-if="item.state == 0"
							@click="deleteIssue(item._id, 'type')"
						></uni-icons>
						<view class="alreadySoldOut" v-if="item.state == 1">
							<view v-if="collection == 'consignment'">
								已下架
							</view>
							<view
								v-if="collection == 'purchase'"
								@click="confirmTakeGoods(item, 'takegood')"
								class="take-goods"
							>
								确认收货
							</view>
						</view>
						<view class="alreadysell" v-if="item.state == 2">
							<view v-if="collection == 'consignment'">
								已售出
							</view>
							<view
								v-if="collection == 'purchase'"
								@click="getAccount(item.consignment_id)"
							>
								提取账号
							</view>
						</view>
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
	<uni-popup ref="soldOut" type="dialog">
		<uni-popup-dialog
			type="warning"
			cancelText="取消"
			confirmText="确认"
			:content="content"
			@confirm="dialogConfirm"
		></uni-popup-dialog>
	</uni-popup>
	<uni-popup ref="popup" type="center">
		<view class="account-info">
			<view class="account">账号:{{ account }}</view>
			<view class="password">密码:{{ password }}</view>
		</view>
	</uni-popup>
</template>

<script lang="ts" setup>
const props = defineProps<{ where: string; collection: string }>();
// 跳转到详情界面
const goDetail = (id: string) => {
	uni.navigateTo({
		url: `/pages/Detail/index?id=${id}`
	});
};
const content = ref<string>('');
const udb = ref();
const soldOut = ref();
const currentType = ref<string>('');
// 下架商品
const currentId = ref<string>();
const deleteIssue = (id: string, type: string) => {
	currentType.value = type;
	currentId.value = id;
	content.value = '你确定要下架商品吗';
	soldOut.value.open('center');
};
const db = uniCloud.database();
const currentConsignmentId = ref<string>();
const dialogConfirm = async () => {
	if (currentType.value == 'takegood') {
		await db
			.collection('purchase')
			.where(`_id=='${currentId.value}'`)
			.update({
				state: 2
			})
			.then(() => {
				db.collection('purchase')
					.where(`_id=='${currentConsignmentId.value}'`)
					.update({
						state: 2
					});
			});
	} else {
		await db
			.collection('consignment')
			.where(`_id=='${currentId.value}'`)
			.update({
				state: 1
			});
	}

	udb.value.refresh();
};
onReachBottom(() => {
	udb.value.loadMore();
});
// 确认收货
const confirmTakeGoods = (item: any, type: string) => {
	currentConsignmentId.value = item.consignment_id;
	currentType.value = type;
	currentId.value = item._id;
	content.value = '你确定要确认收货吗';
	soldOut.value.open('center');
};
const popup = ref();
const account = ref<string>('');
const password = ref<string>('');
// 获取账密
const getAccount = async (id: string) => {
	await db
		.collection('consignment')
		.where(`_id=='${id}'`)
		.get()
		.then(res => {
			account.value = res.result.data[0].account;
			password.value = res.result.data[0].password;
		});
	popup.value.open();
};
</script>

<style lang="scss" scoped>
.list {
	width: 90%;
	margin-left: 5%;
	.item {
		margin-top: 30rpx;
		padding: 30rpx;
		background-color: white;
		border-radius: 30rpx;
		display: flex;
		.image {
			width: 300rpx;
			height: 200rpx;
		}
		.right {
			margin-left: 25rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.header {
				display: flex;
				justify-content: space-between;
				.price {
					margin-left: 20rpx;
					font-weight: 900;
					color: red;
				}
			}
			.time {
				color: #666;
			}
			.delete {
				margin-left: 220rpx;
				text-align: center;
				.alreadySoldOut {
					width: 135rpx;
					color: red;
					font-size: 20rpx;
					.take-goods {
						box-shadow: 0 0 10rpx #ccc;
						padding: 10rpx 20rpx;
						border-radius: 25rpx;
						color: skyblue;
					}
				}
				.alreadysell {
					width: 135rpx;
					color: green;
					font-size: 20rpx;
				}
			}
		}
	}
}
.loading {
	text-align: center;
	color: #666;
}
.noDate {
	margin-top: 100rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #666;
}
.account-info {
	width: 400rpx;
	height: 300rpx;
	background-color: #fff;
	border-radius: 30rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
</style>
