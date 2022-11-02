<template>
	<view class="tab-item">
		<view
			class="help-item"
			v-for="item in helpList[props.tabIndex]"
			:key="item.value"
		>
			<Item :name="item.text"></Item>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { Range } from '@/types/consignment';
import Item from '@/components/Item/index';
const props = defineProps<{ tabIndex: number }>();
const helpList = ref<Range[][]>([
	[
		{
			value: 0,
			text: '防骗指南'
		},
		{
			value: 1,
			text: '没有找到我想要的游戏怎么办?'
		},
		{
			value: 2,
			text: '什么是找回包赔服务?'
		},

		{
			value: 3,
			text: '如何更换APP换绑手机?'
		},
		{
			value: 4,
			text: '没有找到我想要的游戏怎么办'
		},
		{
			value: 5,
			text: '账号被恶意找回了怎么办?'
		},
		{
			value: 6,
			text: '为什么我无法直接联系卖家?'
		}
	],
	[
		{
			value: 0,
			text: '订单取消后，退款退到哪里?'
		},
		{
			value: 1,
			text: '交易时，卖家迟迟不回复怎么办?'
		}
	],
	[
		{
			value: 0,
			text: '什么时高级鉴定? 什么是普通鉴定?'
		},
		{
			value: 1,
			text: '什么是省心寄售?'
		},
		{
			value: 2,
			text: '为什么我发布的商品没人购买?'
		},
		{
			value: 3,
			text: '提现后多久才能到账'
		}
	],
	[
		{
			value: 0,
			text: '如何联系售后客服'
		},
		{
			value: 1,
			text: '如何申请售后'
		}
	]
]);
</script>

<style lang="scss" scoped>
.tab-item {
	padding: 20rpx;
	background-color: white;
	border-radius: 30rpx;
}
</style>
