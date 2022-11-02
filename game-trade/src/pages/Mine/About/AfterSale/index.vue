<template>
	<view class="after-sale">
		<view class="back-img">
			<image
				class="image"
				src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/0061c052-7330-40d1-afbd-3e4cb4b4b704.jpg"
				mode="aspectFit"
			></image>
		</view>
		<view class="content">
			<view class="tips">
				出现找回情况后请第一时间联系平台客服，超过7天未申报无法进行赔付。若已购买包赔服务，只要账号购买后没转手（私下换绑手机视为转
				手：被找回导致的手机号更变不算转手：通过氮金兽平台二次包赔转卖不会被视为转手）7天未追回账号，都无条件补偿号价100%金额加包赔费
			</view>
			<view class="wx">
				<view class="title">售后微信</view>
				<view class="qr-code">
					<view class="name">交易兽-售后</view>
					<image
						class="qr-image"
						src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/3dc0d9b1-77d9-4bfb-a9a3-be97c901c07a.jpg"
						mode="aspectFit"
					></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.after-sale {
	position: relative;
	.back-img {
		background-image: linear-gradient(to bottom, #b1c3ec, #d6dae6);
		.image {
			width: 100%;
		}
	}
	.content {
		width: 90%;
		margin-left: 5%;
		position: absolute;
		top: 370rpx;
		.tips {
			background-color: white;
			border-radius: 30rpx;
			padding: 20rpx;
		}
		.wx {
			margin-top: 30rpx;
			background-color: white;
			padding: 30rpx 20rpx;
			border-radius: 20rpx;
			.title {
				font-size: 35rpx;
				font-weight: 900;
			}
			.qr-code {
				margin-top: 30rpx;
				border: 1px solid #ccc;
				border-radius: 30rpx;
				height: 400rpx;
				width: 300rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				.name {
					font-weight: 900;
				}
				.qr-image {
					width: 280rpx;
					height: 280rpx;
				}
			}
		}
	}
}
</style>
