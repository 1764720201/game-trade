<template>
	<view class="verify">
		<image
			class="image"
			src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/f2f87947-5fe5-4a68-8aba-08980716ce5b.png"
			mode="aspectFit"
		></image>
		<view class="content">
			<view class="mode">
				<view
					@click="chooseMode(item.value)"
					class="mode-item"
					v-for="item in modeList"
					:key="item.value"
					:class="currentMode == item.text ? 'active' : ''"
				>
					{{ item.text }}
					<view class="frame"></view>
				</view>
			</view>
			<input
				type="text"
				class="input"
				:placeholder="placeholder"
				v-model="account"
			/>
			<view class="wait">{{ verifyState }}</view>
			<Verify title="立即验证" @click="verify"></Verify>
		</view>
	</view>
</template>

<script setup lang="ts">
import { Range } from '@/types/consignment';
import Verify from '@/components/Button/index';
const placeholder = ref<string>('请输入客服QQ号');
const currentMode = ref<string>('QQ验证');
const account = ref<string>();
const originState = () => {
	wait.value = '#5869ee';
	verifyState.value = '等待验证...';
	account.value = '';
};
const modeList = ref<Range[]>([
	{ value: 0, text: 'QQ验证' },
	{ value: 1, text: '微信验证' }
]);
const wait = ref<string>('#5869ee');
const chooseMode = (index: number) => {
	currentMode.value = modeList.value[index].text;
	switch (index) {
		case 0:
			placeholder.value = '请输入客服QQ号';
			break;
		case 1:
			placeholder.value = '请输入客服微信号';
			break;
	}
	originState();
};
watch(
	() => account.value,
	newValue => {
		if (!newValue) {
			originState();
		}
	}
);
const verifyState = ref<string>('等待验证...');
const verify = () => {
	if (currentMode.value == 'QQ验证') {
		if (account.value == '2050203080') {
			verifyState.value = '验证成功';
			wait.value = 'green';
		} else {
			verifyState.value = '验证失败';
			wait.value = 'red';
		}
	} else if (currentMode.value == '微信验证') {
		if (account.value == 'ztw2050203080') {
			verifyState.value = '验证成功';
			wait.value = 'green';
		} else {
			verifyState.value = '验证失败';
			wait.value = 'red';
		}
	}
};
</script>

<style lang="scss" scoped>
.verify {
	height: 100vh;
	background-color: #d8e0eb;
	width: 100%;
	.image {
		width: 100%;
	}
	.content {
		height: 500rpx;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		border-radius: 30rpx;
		width: 80%;
		margin-left: 6%;
		background-color: white;
		justify-content: space-around;
		.mode {
			display: flex;
			justify-content: space-around;
			.active {
				color: #5869ee;
				font-weight: 900;
				.frame {
					margin: 10rpx auto;
					width: 20rpx;
					border-bottom: 3px solid #5869ee;
				}
			}
		}
	}
	.input {
		height: 100rpx;
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	.wait {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		text-align: center;
		width: 400rpx;
		height: 100rpx;
		line-height: 100rpx;
		border-left: 1px solid $game-theme;
		border-right: 1px solid $game-theme;
		color: v-bind(wait);
	}
}
</style>
