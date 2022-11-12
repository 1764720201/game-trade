<template>
	<view class="detail">
		<Basic :detail="detail"></Basic>
		<view class="flow">
			<view class="header">
				<view class="title">交易流程</view>
				<uni-icons type="right" size="17" color="#ccc"></uni-icons>
			</view>
			<view class="body">
				<view class="outer"><view class="inner"></view></view>
				<view class="line"></view>
				<view class="outer"><view class="inner"></view></view>
				<view class="line"></view>
				<view class="outer"><view class="inner"></view></view>
				<view class="line"></view>
				<view class="outer"><view class="inner"></view></view>
				<view class="line"></view>
				<view class="outer"><view class="inner"></view></view>
			</view>
			<view class="text">
				<view class="item">下单</view>
				<view class="item">签订合同</view>
				<view class="item">验号</view>
				<view class="item">换绑</view>
				<view class="item">完成</view>
			</view>
			<view class="footer">
				<view class="title">
					四大防线,保障交易安全,永久包赔,找回全额退款
				</view>
				<uni-icons type="right" size="16" color="#eaa24d"></uni-icons>
			</view>
			<view class="tips">根据国家规定,禁止未成年人参与虚拟物品交易</view>
		</view>
		<scroll-view scroll-x style="white-space: nowrap;height: 150rpx;">
			<view class="options">
				<view
					class="item"
					:style="
						item.text == option
							? { fontWeight: 900 }
							: { color: '#ccc' }
					"
					v-for="item in options"
					:key="item.value"
					@click="changeOption(item.text)"
				>
					{{ item.text }}
				</view>
			</view>
		</scroll-view>
		<Options
			:option="option"
			:game="detail.game"
			:id="detail._id"
		></Options>
	</view>

	<view class="tabbar">
		<view class="collect" @click="collect">
			<uni-icons
				:type="collected ? 'star-filled' : 'star'"
				size="27"
			></uni-icons>
			收藏
		</view>
		<view class="consult" @click="goConsult">咨询客服</view>
		<view class="purchase" @click="goBuy">立即购买</view>
	</view>
</template>

<script lang="ts" setup>
// 引入详情类型

import { Detail, Range } from '@/types/consignment';
import useStore from '@/store';
//引入展示选项
import Options from '@/components/Options/index';
//引入基础信息
import Basic from '@/components/Basic/index';
const store = useStore();

const option = ref<string>('游戏截图');
const changeOption = (text: string) => {
	option.value = text;
	store.detail.getCurrentOption(option.value);
};

// 初始详情信息
const detail = reactive<Detail>({
	server: '',
	region: '',
	price: 0,
	game: '',
	user_id: '',
	create_time: 0,
	_id: '',
	materials: ''
});

const options = reactive<Range[]>([
	{
		value: 0,
		text: '游戏截图'
	},
	{
		value: 1,
		text: '账号信息'
	},
	{
		value: 2,
		text: '游戏交流群'
	}
]);

const db = uniCloud.database();
onLoad(async options => {
	detail._id = options.id!;
	// 根据id获取账号详情
	await db
		.collection('consignment')
		.where(`_id=='${options.id}'`)
		.get({ getOne: true })
		.then(async res => {
			Object.assign(detail, res.result.data);
		});
	verifyCollect();
	// 获取用户信息

	// 根据游戏名获取游戏图标

	store.detail.getDetail(detail);
});
const verifyCollect = async () => {
	await db
		.collection('collect')
		.where(`consignment_id=='${detail._id}'&&user_id=='${userId.value}'`)
		.get({ getOne: true })
		.then(res => {
			if (res.result.data) {
				collected.value = true;
			} else {
				collected.value = false;
			}
		})
		.catch(e => {
			console.log(e);
		});
};
// 判断是否已收藏
const collected = ref<boolean>(false);
//收藏
const { userId } = storeToRefs(store.user);
const collect = async () => {
	// 如果没有收藏，则点击收藏
	if (!collected.value) {
		await db
			.collection('collect')
			.add({
				consignment_id: detail._id
			})
			.then(async () => {
				await verifyCollect();
				uni.showToast({
					title: '收藏成功'
				});
			});
	} else {
		// 如果已经收藏则取消收藏
		await db
			.collection('collect')
			.where(
				`consignment_id=='${detail._id}'&&user_id=='${userId.value}'`
			)
			.remove()
			.then(async () => {
				await verifyCollect();
				uni.showToast({
					title: '取消收藏',
					icon: 'none'
				});
			});
	}
};
// 进入购买页面
const goBuy = () => {
	uni.navigateTo({
		url: `/pages/Detail/Buy/index?id=${detail._id}`
	});
};
// 进入客服界面
const goConsult = () => {
	uni.navigateTo({
		url: '/pages/Message/Consult/index'
	});
};
</script>

<style lang="scss" scoped>
.detail {
	width: 86%;
	margin-left: 7%;

	.flow {
		margin-top: 30rpx;
		height: 260rpx;
		justify-content: space-around;
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 20rpx;
		border-radius: 30rpx;
		.header {
			justify-content: space-between;
			display: flex;
			font-weight: 900;
			font-size: 35rpx;
		}
		.body {
			width: 90%;
			margin-left: 5%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.outer {
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				background-color: rgba(87, 105, 238, 0.3);
				display: flex;
				align-items: center;
				justify-content: center;
				.inner {
					width: 20rpx;
					height: 20rpx;
					border-radius: 50%;
					background-color: rgb(87, 105, 238);
				}
			}
			.line {
				width: 90rpx;
				height: 1rpx;
				background-color: rgb(87, 105, 238);
			}
		}
		.text {
			width: 97%;
			margin-left: 1.5%;
			display: flex;
			justify-content: space-between;
			.item:nth-child(2) {
				margin-left: -28rpx;
			}
			.item:nth-child(3) {
				margin-left: -40rpx;
			}
		}
		.footer {
			display: flex;
			justify-content: space-between;
			font-size: 25rpx;
			color: #eaa24d;
		}
		.tips {
			font-size: 25rpx;
			color: #ccc;
		}
	}
	.options {
		height: 100rpx;
		margin-top: 30rpx;
		width: 120%;
		margin-left: -30rpx;
		display: flex;
		align-items: center;
		.item {
			width: 260rpx;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background-color: white;
			border-radius: 25rpx;
			margin-left: 30rpx;
		}
	}
}

.tabbar {
	background-color: #e0e2e5;
	height: 180rpx;
	width: 100%;
	display: flex;
	position: fixed;
	align-items: center;
	bottom: 0;
	left: 0;
	justify-content: space-around;
	box-shadow: 0 0 5rpx #ccc;
	.collect {
		display: flex;
		flex-direction: column;
		font-size: 25rpx;
	}
	.purchase,
	.consult {
		margin-left: -40rpx;
		height: 80rpx;
		width: 250rpx;
		border-radius: 30rpx;
		text-align: center;
		line-height: 80rpx;
		font-size: 28rpx;
	}
	.purchase {
		color: white;
		background-color: rgb(88, 105, 238);
	}
	.consult {
		background-color: rgba(88, 105, 238, 0.2);
	}
}
</style>
