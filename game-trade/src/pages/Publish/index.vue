<template>
	<view class="publish">
		<InputBox
			title="游戏账号"
			tips="请填写登录账号(微信/QQ等)"
			type="text"
			position="left"
			@input="getAccount"
		></InputBox>
		<InputBox
			title="登陆密码"
			tips="请填写游戏密码"
			type="password"
			position="left"
			@input="getPassword"
		></InputBox>
		<InputBox
			title="确认登陆密码"
			tips="请确认游戏密码"
			type="password"
			position="left"
			@input="getConfirm"
		></InputBox>
		<view class="if-same" v-if="!ifSame">请输入相同的账号密码</view>
		<view class="tips">
			为何需要账号及密码？
			<br />
			交易兽秉持100%真实账号原则，每个商品均由客服亲自登号
			进行截图，客服截图及审核不收取仟何费用（成交后收取代售费，不成交不收费）
			<br />
			原神：客服会登录您的账号进行截图，如果您收到风险提示无需惊慌，根据客服提示操作即可，上架完成后建议及时修改密码，防止出现纠纷。
		</view>
		<InputBox
			title="手机号"
			tips="请填写联系号码"
			type="number"
			position="left"
			@input="getPhone"
		></InputBox>
		<Check
			:range="materials"
			title="包赔材料"
			@check="getMaterialsIndex"
		></Check>
		<Check
			:range="express"
			title="是否同时发布急速回收"
			@check="getExpressIndex"
		></Check>
		<view class="agree">
			<checkbox-group @change="ifAgree">
				<checkbox value="agree" :checked="agree" />
			</checkbox-group>
			<view class="agree-text">同意《交易兽平台虚拟物品交易规则》</view>
		</view>
		<Publish title="发布" @click="publish"></Publish>
	</view>
</template>

<script lang="ts" setup>
import InputBox from '@/components/InputBox/index';
import Check from '@/components/Check/index';
import Publish from '@/components/Button/index';
import { Range, Detail } from '@/types/consignment';

const consignment = reactive<Detail>({
	game: '',
	region: '',
	price: 0
});
const account = ref<string>();
const password = ref<string>();
const confirm = ref<string>();
const phone = ref<string>();
onLoad(options => {
	// 获取上一页面填写的基本信息
	Object.assign(consignment, JSON.parse(options.consignment!));

	// 调用检测两个密码是否相同的函数
	verifyConfirm();
});
// 默认不同意
const agree = ref<boolean>(false);
const ifAgree = (e: { detail: { value: string[] } }) => {
	if (e.detail.value[0]) {
		agree.value = true;
	} else {
		agree.value = false;
	}
};

const materials: Range[] = [
	{
		value: 0,
		text: '提供'
	},
	{
		value: 1,
		text: '不提供'
	}
];
const express: Range[] = [
	{
		value: 0,
		text: '发布'
	},
	{
		value: 1,
		text: '不发布'
	}
];
const accountInfo = {
	account: '',
	password: '',
	phone: '',
	materials: '',
	express: ''
};
const getAccount = (value: string) => {
	account.value = value;
};
const getPassword = (value: string) => {
	password.value = value;
};
const getConfirm = (value: string) => {
	confirm.value = value;
};
const getPhone = (value: string) => {
	phone.value = value;
};
const materialsIndex = ref<number>();
const expressIndex = ref<number>();

const getMaterialsIndex = (value: number) => {
	materialsIndex.value = value;
};
const getExpressIndex = (value: number) => {
	expressIndex.value = value;
};
// 默认放行
const next = ref<boolean>(true);
// 检验是否输入
const verifyInput = (title: string, value: string, content?: string) => {
	if (next.value) {
		if (content) {
			next.value = true;
			accountInfo[value] = content;
		} else {
			uni.showToast({
				title,
				icon: 'none'
			});
			next.value = false;
		}
	}
};

// 检验是否选择
const verifyCheck = (
	value: string,
	range: Range[],
	title: string,
	index?: number
) => {
	if (next.value) {
		// 如果已选则放行
		if (index! >= 0) {
			accountInfo[value] = range[index!].text;
			next.value = true;
		} else {
			// 如果没有选择，则提醒没有选择
			uni.showToast({
				title,
				icon: 'none'
			});
			// 不放行
			next.value = false;
		}
	}
};

//默认两个密码相同
const ifSame = ref<boolean>(true);
//实时检验两个密码是否相同
const verifyConfirm = () => {
	watch(
		() => [password.value, confirm.value],
		() => {
			// 如果相同则不提示
			if (password.value != confirm.value) {
				ifSame.value = false;
			} else {
				// 如果不相同则提示
				ifSame.value = true;
			}
		}
	);
};

const db = uniCloud.database();
const publish = async () => {
	consignment.price = Number(consignment.price);
	consignment.state = 0;
	next.value = true;
	if (!ifSame.value) {
		uni.showToast({
			title: '请输入相同的密码',
			icon: 'none'
		});
		return;
	}
	verifyInput('请输入账号', 'account', account.value);
	verifyInput('请输入密码', 'password', password.value);
	verifyInput('请输入手机号', 'phone', phone.value);
	verifyCheck(
		'materials',
		materials,
		'请选择是否提供包赔材料',
		materialsIndex.value
	);
	verifyCheck(
		'express',
		express,
		'请选择是否同时发布急速回收',
		expressIndex.value
	);
	if (!agree.value && next.value) {
		uni.showToast({
			title: '请同意交易规则',
			icon: 'none'
		});
		return;
	}
	await db
		.collection('consignment')
		.add(Object.assign(accountInfo, consignment))
		.then(() => {
			uni.reLaunch({
				url: '/pages/Home/index',
				success() {
					uni.showToast({
						title: '发布成功'
					});
				}
			});
		});
};
</script>

<style lang="scss" scoped>
.publish {
	width: 90%;
	margin-left: 5%;
	.tips {
		padding: 20rpx 0;
		font-size: 27rpx;
		color: #9e9e9e;
	}
	.if-same {
		position: absolute;
		right: 45rpx;
		font-size: 28rpx;
		color: red;
	}
	.agree {
		margin-top: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
