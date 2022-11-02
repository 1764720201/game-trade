<template>
	<view class="amend">
		<view class="originName">
			<input type="text" v-model="newName" class="input" />
		</view>
		<Amend title="确认修改" @click="confirmAmend"></Amend>
	</view>
</template>

<script setup lang="ts">
import Amend from '@/components/Button/index';
import useStore from '@/store';
const store = useStore();
const { userInfo } = storeToRefs(store.user);
const newName = ref<string>(userInfo.value.nickname);
const db = uniCloud.database();
const confirmAmend = async () => {
	await db
		.collection('uni-id-users')
		.where(`_id=='${userInfo.value._id}'`)
		.update({
			nickname: newName.value
		})
		.then(() => {
			store.user.getUserInfo();
		});
	uni.navigateBack({
		success() {
			uni.showToast({
				title: '昵称修改成功'
			});
		}
	});
};
</script>

<style lang="scss" scoped>
.amend {
	height: 60vh;
	margin-left: 5%;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	.input {
		border-radius: 20rpx;
		padding: 0 20rpx;
		height: 120rpx;
		background-color: white;
	}
}
</style>
