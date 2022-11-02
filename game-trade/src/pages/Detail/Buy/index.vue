<template>
	<view class="buy">
		<Basic :detail="detail"></Basic>
		<view class="compensate">
			<view class="choose" @click="check">
				<view class="checked" v-if="checked">√</view>
			</view>
			购买包赔服务，找回全额赔付
		</view>
		<view class="tips">
			买家须知
			<br />
			★若您未购买包赔服务，未来出现找回纠纷时，平台会提供必要资料协助买家报警或诉讼，但不会进行先行垫付赔偿，强烈建议购买包赔服务！
			<br />
			★建议优先购买【已删实名】和【有修改人脸机会】
			的号：若购买【无修改人脸机会】的号，未来有可能出现人脸识别，导致无法正常游玩游戏，届时您需自行找卖家沟通，与平台无关。
			<br />
			1.挂售账号截图里的流通金、点券、道具因日常消耗等会发生变化，均不作为账号详细参考，标题文字工作量大，可能有误差，请老板以截图为准
			<br />
			2.出现找回情况后请第一时间联系平台客服，超过7天未申报无法进行赔付。若已购买包赔服务，只要账号购买后没转手（私下换绑手机视为转手：被找回导致的手机号更变不算转手：通过氮金兽平台二次转卖不会被视为转手），7天未追回账号，都无条件补偿号价100%金额加包赔费；若买家谎称账号被找回或隐睛账号已转手，按诈骗处理：若未购买包赔服务平台会提供必要资料协助买家报警或诉讼。
			<br />
			3.买家验号前想取消交易，卖家同意的情况下支付10元手续费方可取消。交易买家验号与卖家所述不相符可自行决定是否取消交易，如果取消全额退款。交易买家上号验证无误，因个人原因取消交易需要支付号价的10%违约金补偿。换绑完成视为交易结束，无法取消，若买卖任意一方想取消交易，需双方私下协商，与平台无关
			<br />
			4.交易前有任何疑问请提前询问平台客服，买家平台付款视为认同平台的交易规则腾讯系游戏特别须知：
			<br />
			1.游戏内人脸属于腾讯保护机制，若出现人脸识别平台只能尝试帮忙联系号主，小概率无法通过，与平台无关，并不得以此为理由要求退款（建议买可以修改实名的号）
			<br />
			2.QQ靓号属于腾讯收费，如果介意请验号前在群里告知客服，验号以后与平台无关
			<br />
			3.QQ钱包是否注销对于账号安全性无任何影响，出于对卖家实名信息的保护考虑，平台会建议卖家自行
			提前注销好：买家如果有需要，卖家可以决定是否协助，但不强制注销且不能以此为由取消交易
			<br />
			4.账号如发生冻结、异常等造成不能使用的情况，平台只能协助处理，有无法解冻的可能，与平台无关并不得以此为理由要求退款
			<br />
		</view>
	</view>
	<view class="tabbar">
		<view class="price">合计:￥{{ detail?.price.toFixed(2) }}</view>
		<view class="confirmOrder" @click="openOrder">确认下单</view>
	</view>
	<uni-popup ref="order" type="bottom" :safeArea="false">
		<view class="order">
			<view class="orderList">
				<view class="header">
					<uni-icons
						type="arrow-left"
						size="30"
						color="#5869ee"
						@click="cancelOrder"
					></uni-icons>
					<view class="title">确认支付</view>
				</view>
				<view class="price">￥{{ detail?.price.toFixed(2) }}</view>
				<view
					class="pay-mode"
					v-for="item in payMode"
					:key="item.value"
				>
					<view class="left">
						<image
							class="icon"
							:src="item.icon"
							mode="aspectFill"
						></image>
						<view class="pay-name">{{ item.text }}</view>
						<view class="balance" v-if="item.text == '钱包余额'">
							(￥{{ balance.toFixed(2) }})
						</view>
					</view>
					<view
						class="selectMode"
						@click="chooseMode(item.value)"
						:style="{
							backgroundColor:
								currentMode == item.text ? '#5869ee' : ''
						}"
					>
						√
					</view>
				</view>
				<Order title="立即支付" @click="confirmOrder"></Order>
			</view>
		</view>
	</uni-popup>
</template>

<script setup lang="ts">
import Basic from '@/components/Basic/index';
import { Detail } from '@/types/consignment';
import Order from '@/components/Button/index'
import useStore from '@/store'
const store =useStore()
const {balance} =storeToRefs(store.user)
const detail = ref<Detail>();
const db = uniCloud.database();
// 是否选中按钮
const checked = ref<boolean>(false);
const originPrice=ref<number>()
// 控制按钮背景
const ifChecked = ref<string>();
// 根据是否选中展示按钮样式
const check = () => {
	checked.value = !checked.value;
	if (checked.value) {
		ifChecked.value = '#5869ee';
		detail.value!.price*=1.2
	} else {
		ifChecked.value = '';
		detail.value!.price=originPrice.value!
	}
};

onLoad(async options => {
	if (options.id) {
		await db.collection('consignment')
			.where(`_id=='${options.id}'`)
			.get({ getOne: true })
			.then(res => {
				detail.value = res.result.data;
			});
	}
	originPrice.value=detail.value?.price
});

const order=ref(null)
// 下单 打开下方弹出层
const openOrder=()=>{
	//@ts-ignore
	order.value.open()
}
const payMode=ref([
	{value:0,text:'钱包余额',icon:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/4073f69a-c176-4a41-a20b-65804227efba.png'}
	,{value:1,text:'微信',icon:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/58c510c2-bf12-443f-b2d0-cd6127496ea1.png'}
	,{value:2,text:'支付宝',icon:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/05e0800e-9908-46c1-a146-2d1151f0bd6b.png'},
])
const currentMode=ref<string>('钱包余额')
// 选择支付方式
const chooseMode=(index:number)=>{
	currentMode.value=payMode.value[index].text
}
// 取消支付
const cancelOrder=()=>{
	//@ts-ignore
	order.value.close()
}

// 确认支付
const confirmOrder=async()=>{
	if(balance.value<detail.value!.price){
		uni.showToast({
			title:"您的余额不足",
			icon:'error'
		})
		return
	}
	db.collection('balance').add({
		money:-detail.value!.price
	})
	db.collection('consignment').where(`_id=='${detail.value?._id}'`).update({
		state:2
	})
	await db.collection('purchase').add({
		consignment_id:detail.value?._id,
		state:1,
		game:detail.value?.game,
		screenshot:detail.value?.screenshot,
		price:detail.value?.price
	})
	uni.switchTab({
		url:'/pages/Mine/index',
		success() {
			uni.showToast({
				title:'您已经成功购买!'
			})
		}
	})
}
</script>

<style lang="scss" scoped>
.buy {
	width: 86%;
	margin-left: 7%;
	padding-bottom: 200rpx;
	.compensate {
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		background-color: white;
		padding: 30rpx;
		border-radius: 30rpx;
		.choose {
			width: 30rpx;
			height: 30rpx;
			border-radius: 50%;
			font-size: 24rpx;
			line-height: 30rpx;
			text-align: center;
			border: 1px solid #5869ee;
			color: white;
			background-color: v-bind(ifChecked);
			margin-right: 30rpx;
		}
	}
	.tips {
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #666;
	}
}
.tabbar {
	padding: 20rpx;
	width: 95%;
	position: fixed;
	bottom: 0;
	left: 0;
	height: 120rpx;
	display: flex;
	align-items: center;
	background-color: #ecebec;
	justify-content: space-between;
	.price {
		font-weight: 900;
	}
	.confirmOrder {
		width: 300rpx;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 30rpx;
		background-color: #5869ee;
		color: white;
	}
}
.order {
	height: 1000rpx;
	background-color: #f3f3f3;
	border-top-right-radius: 30rpx;
	border-top-left-radius: 30rpx;
	.orderList {
		height: 900rpx;
		display: flex;
		margin-left: 5%;
		justify-content: space-around;
		flex-direction: column;
		width: 90%;
		.header {
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			.title {
				margin-left: 30%;
				font-weight: 900;
				font-size: 40rpx;
			}
		}
		.price {
			margin: 0 auto;
			font-size: 45rpx;
			color: red;
			font-weight: 900;
		}
		.pay-mode {
			padding: 20rpx;
			background-color: white;
			display: flex;
			align-items: center;
			border-radius: 30rpx;
			justify-content: space-between;
			.left {
				display: flex;
				align-items: center;
				.icon {
					width: 100rpx;
					height: 100rpx;
				}
				.pay-name {
					margin-left: 15rpx;
				}
				.balance {
					margin-left: 10rpx;
					font-size: 25rpx;
					color: #ccc;
				}
			}
			.selectMode {
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				border: 1px solid #5869ee;
				font-size: 25rpx;
				text-align: center;
				color: white;
			}
		}
	}
}
</style>
