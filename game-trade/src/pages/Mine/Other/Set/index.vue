<template>
	<view class="set">
		<view class="header">
			<Item name="设置密码" @click="stop('不让设置密码')"></Item>
			<Item
				name="手机号"
				@click="bindMobile"
				:tips="userInfo.phone"
			></Item>
			<Item name="实名认证" tips="已认证"></Item>
		</view>
		<view class="list">
			<Item name="当前版本" tips="1.2.0"></Item>
			<Item name="用户协议" @click="stop('没有协议')"></Item>
			<Item name="隐私政策" @click="stop('没有隐私')"></Item>
			<Item name="注销账号" @click="stop('不给注销')"></Item>
		</view>
		<LogOut></LogOut>
	</view>
	<uni-popup ref="inputDialog" type="dialog">
		<uni-popup-dialog
			ref="inputClose"
			mode="input"
			title="输入手机号"
			:value="userInfo.phone"
			placeholder="请输入手机号"
			@confirm="confirmBindMobile"
		></uni-popup-dialog>
	</uni-popup>
</template>

<script lang="ts" setup>
import LogOut from '@/uni_modules/uni-id-pages/pages/userinfo/log-out/index';
import Item from '@/components/Item/index';
import useStore from '@/store';
const store = useStore();
const { userId, userInfo } = storeToRefs(store.user);
const db = uniCloud.database();

const inputDialog = ref(null);
const bindMobile = () => {
	//@ts-ignore
	inputDialog.value.open();
};
// 确认绑定手机号
const confirmBindMobile = async (e: string) => {
	await db
		.collection('uni-id-users')
		.where(`_id=='${userId.value}'`)
		.update({
			phone: e
		})
		.catch(e => console.log(e));
	await store.user.getUserInfo();
	uni.showToast({
		title: '修改手机号成功'
	});
};

const stop = (title: string) => {
	uni.showToast({
		title,
		icon: 'none'
	});
};
</script>

<style lang="scss" scoped>
.set {
	width: 90%;
	margin-left: 5%;
	.header {
		margin-top: 30rpx;
		padding: 20rpx;
		border-radius: 30rpx;
		background-color: white;
	}
	.list {
		margin-top: 30rpx;
		padding: 20rpx;
		border-radius: 30rpx;
		background-color: white;
		margin-bottom: 50rpx;
	}
}
</style>
