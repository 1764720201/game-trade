<template>
	<view class="consult">
		<scroll-view
			scroll-y="true"
			:scroll-into-view="scrollToView"
			:style="{ height: scrollViewHeight }"
		>
			<view class="service">
				<view class="t-icon t-icon-xiong"></view>
				<view class="right">
					<view class="service-name">我是客服</view>
					<view class="server-content">
						您好,我是客服,接下来将由我来为您服务
					</view>
				</view>
			</view>
			<view
				class="item"
				v-for="item in consultList"
				:key="item._id"
				:id="'msg' + item._id"
			>
				<view class="time">
					<uni-dateformat
						:date="item.create_time"
						format="yyyy-MM-dd hh:mm"
					></uni-dateformat>
				</view>
				<view class="user">
					<view class="content">{{ item.content }}</view>
					<image
						:src="userInfo.avatar_file.url"
						mode="aspectFill"
						class="avatar"
					></image>
				</view>
				<view class="service">
					<view class="t-icon t-icon-xiong"></view>
					<view class="right">
						<view class="service-name">我是客服</view>
						<view class="server-content">
							你说啥呢,我听不懂啊！！！
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
	<view class="tabbar">
		<view class="left">
			<input
				type="text"
				placeholder="请输入聊天内容..."
				v-model="content"
				@click="changeHeight"
			/>
		</view>
		<view class="t-icon t-icon-fasong" @click="sendContent"></view>
	</view>
</template>

<script lang="ts" setup>
import useStore from '@/store';
import { Image } from '@/types/consignment';
const store = useStore();
const { userId, userInfo } = storeToRefs(store.user);
const content = ref<string>();
const scrollToView = ref<string>();
const scrollViewHeight = ref<string>('1250rpx');
type Consult = {
	_id: string;
	image?: Image[];
	content?: string;
	create_time: number;
};
const changeHeight = () => {
	// 准备输入时，升高，防止挡住键盘
	scrollViewHeight.value = '950rpx';
};
const consultList = ref<Consult[]>([]);
const getConsult = async () => {
	await db
		.collection('consult')
		.where(`user_id=='${userId.value}'`)
		.orderBy('create_time', 'desc')
		.get()
		.then(res => {
			consultList.value = res.result.data.reverse();
		});
};
onLoad(async () => {
	await getConsult();
	// 刚进入界面自动定位最下面一条消息
	scrollToView.value =
		'msg' + consultList.value[consultList.value.length - 1]._id;
});
const db = uniCloud.database();
//发送内容
const sendContent = async () => {
	if (!content.value) {
		uni.showToast({
			title: '聊天的内容不能为空!',
			icon: 'none'
		});
	} else {
		await db.collection('consult').add({
			content: content.value
		});
		await getConsult();
		// 发送一条消息后，定位到最新的一条消息
		scrollToView.value =
			'msg' + consultList.value[consultList.value.length - 1]._id;
		uni.showToast({
			title: '发送成功',
			icon: 'none'
		});
		content.value = '';
		scrollViewHeight.value = '1250rpx';
	}
};
</script>

<style lang="scss" scoped>
.consult {
	width: 90%;
	margin-left: 5%;
	.service {
		margin-top: 30rpx;
		display: flex;
		.right {
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;
			.service-name {
				margin-top: -20rpx;
				font-size: 26rpx;
			}
			.server-content {
				margin-top: 20rpx;
				background-color: white;
				padding: 20rpx;
				border-radius: 30rpx;
				border-top-left-radius: 10rpx;
			}
		}
	}
	.item {
		margin-top: 10rpx;
		display: flex;
		flex-direction: column;
		.time {
			text-align: center;
			font-size: 26rpx;
			color: #c1c1c1;
		}
		.user {
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			.avatar {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
			.content {
				padding: 25rpx;
				background-color: #d2d6e6;
				border-radius: 30rpx;
				border-top-right-radius: 10rpx;
				margin-right: 20rpx;
			}
		}
	}
}
.tabbar {
	height: 150rpx;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: #e8e8e8;
	border-top-right-radius: 30rpx;
	border-top-left-radius: 30rpx;
	.left {
		width: 70%;
		display: flex;
		align-items: center;
		background-color: #e0e0e0;
		border-radius: 30rpx;
		padding: 15rpx 20rpx;
		.image {
			margin-left: 120rpx;
		}
	}
	.t-icon {
		width: 80rpx;
		height: 80rpx;
	}
}
</style>
