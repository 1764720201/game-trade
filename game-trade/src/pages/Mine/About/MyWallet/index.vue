<template>
	<view class="my-wallet">
		<view class="wallet">
			<view class="balance">
				<view class="title">账户余额（元）</view>
				<view class="deal-detail" @click="goDealDetail">
					<view class="text">交易明细</view>
					<uni-icons
						type="forward"
						size="18"
						color="white"
					></uni-icons>
				</view>
			</view>
			<view class="balance-num" @click="recharge">
				{{ balance.toFixed(2) }}
			</view>
		</view>
		<InputBox
			title="提现金额"
			position="left"
			type="number"
			tips="请输入提现金额"
			@input="getPrice"
		></InputBox>
		<InputBox
			title="支付宝"
			position="left"
			type="text"
			tips="请输入支付宝账号"
			@input="getAccount"
		>
			<image
				class="image"
				src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/05e0800e-9908-46c1-a146-2d1151f0bd6b.png"
				mode="aspectFill"
			></image>
		</InputBox>
		<view class="tips">支付宝真实姓名与实名认证姓名相同才可提现成功</view>
		<Deposit title="提现" @click="withdraw"></Deposit>
	</view>
	<uni-popup ref="inputDialog" type="dialog">
		<uni-popup-dialog
			ref="inputClose"
			mode="input"
			title="破解版"
			:value="m"
			placeholder="请输入充值的金额"
			@confirm="confirmRecharge"
		></uni-popup-dialog>
	</uni-popup>
</template>

<script lang="ts" setup>
import InputBox from '@/components/InputBox/index';
import Deposit from '@/components/Button/index';
import useStore from '@/store';
const store = useStore();
const { balance } = storeToRefs(store.user);
// 前往交易明细页面

const goDealDetail = () => {
	uni.navigateTo({
		url: '/pages/Mine/About/MyWallet/DealDetail/index'
	});
};
const inputDialog = ref(null);
// 打开充值界面

const recharge = () => {
	//@ts-ignore
	inputDialog.value.open();
};
const db = uniCloud.database();
// 确认充值
const confirmRecharge = async (e: string) => {
	await db.collection('balance').add({
		money: parseFloat(e)
	});
	store.user.getBalance();
	uni.showToast({
		title: '充值成功'
	});
};
// 提现的金额
const price = ref<number>();
const getPrice = (e: number) => {
	price.value = e;
};
// 支付宝账号
const account = ref<string>('');
const getAccount = (e: string) => {
	account.value = e;
};

const withdraw = async () => {
	if (!price.value) {
		uni.showToast({
			title: '请输入提现的金额',
			icon: 'none'
		});
		return;
	}
	if (!account.value) {
		uni.showToast({
			title: '请输入支付宝账号',
			icon: 'none'
		});
		return;
	}
	if (price.value > balance.value) {
		uni.showToast({
			title: '提现的金额不能大于余额',
			icon: 'none'
		});
		return;
	}
	await db.collection('balance').add({
		money: -Number(price.value)
	});
	store.user.getBalance();
	uni.showToast({
		title: '提现成功'
	});
};
</script>

<style lang="scss" scoped>
.my-wallet {
	margin-top: 30rpx;
	width: 90%;
	margin-left: 5%;
	.wallet {
		color: white;
		border-radius: 30rpx;
		background-color: #546de0;
		height: 300rpx;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.balance {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title {
				font-size: 28rpx;
				color: #ccc;
			}
			.deal-detail {
				font-size: 30rpx;
				display: flex;
				align-items: center;
			}
		}
		.balance-num {
			margin-bottom: 30rpx;
			font-size: 70rpx;
			font-weight: 900;
		}
	}
	.image {
		width: 80rpx;
		height: 60rpx;
		margin-right: 20rpx;
	}
	.tips {
		margin-top: 30rpx;
		text-align: center;
		font-size: 23rpx;
		color: #949494;
	}
}
</style>
