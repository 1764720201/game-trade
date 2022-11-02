<template>
	<view class="basic">
		<view class="header">
			<view class="left">
				<image class="icon" :src="icon" mode="aspectFill"></image>
				<view class="region">{{ detail?.region }}</view>
				<view class="server">{{ detail?.server }}</view>
			</view>
			<view class="price">￥{{ detail?.price }}</view>
		</view>
		<view class="body">
			<view v-if="detail?.game == '原神'">
				邮箱:{{ detail?.email }} 是否科技号:{{
					detail?.technology
				}}
				其它亮点:{{ detail?.otherBright }}
			</view>
			<view v-if="detail?.game == '英雄联盟'">
				{{
					detail?.qualification == '有资格'
						? '有峡谷之巅资格'
						: '无峡谷之巅资格'
				}}
				英雄数:{{ detail?.amount }}
				{{ detail?.rare ? `龙瞎炫彩:${detail?.rare}` : '' }}
			</view>
			<view v-if="detail?.game == '王者荣耀'">
				贵族等级:{{ detail.level }} 皮肤数:{{ detail.skin }}
				{{ detail.legend ? '星传说:' + detail.legend : '' }}
				{{ detail.national ? '国标:' + detail.national : '' }}
			</view>
		</view>
		<view class="footer">
			<view class="identifier">
				商品编号：{{ detail?._id.toString().slice(0, 6) }}
				<view class="t-icon t-icon-fuzhi"></view>
			</view>
			<view class="nickname">卖家：{{ userName }}</view>
			<view class="time">
				上架时间：
				<uni-dateformat
					:date="detail?.create_time"
					format="yyyy-MM-dd"
				></uni-dateformat>
			</view>
			<view class="id">卖家ID：{{ detail?.user_id?.slice(0, 6) }}</view>
		</view>
	</view>
</template>

<script setup lang="ts">
const props = defineProps<{ detail: any }>();
const db = uniCloud.database();
const userName = ref<string>();
const icon=ref<string>()
watch(()=>props.detail?.user_id,async()=>{
	db.collection('uni-id-users')
		.where(`_id=='${props.detail?.user_id}'`)
		.field('nickname,_id')
		.get({ getOne: true })
		.then(res => {
			userName.value = res.result.data?.nickname;
		});
	db.collection('category').where(`name=='${props.detail.game}'`).get({getOne:true}).then(res=>{
		icon.value=res.result.data.icon
	})

})
</script>

<style lang="scss" scoped>
.basic {
	border-radius: 30rpx;
	margin-top: 30rpx;
	background-color: white;
	padding: 20rpx;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			display: flex;
			align-items: center;
			.icon {
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
			}
			.region,
			.server {
				margin-left: 20rpx;
			}
		}
		.price {
			font-weight: 900;
			font-size: 35rpx;
			color: red;
		}
	}
	.body {
		height: 100rpx;
		margin-top: 20rpx;
		font-size: 28rpx;
		line-height: 35rpx;
	}
	.footer {
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #a4a4a4;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		height: 100rpx;
		.identifier,
		.time {
			width: 60%;
			.t-icon {
				width: 35rpx;
				height: 35rpx;
			}
		}
		.time,
		.id {
			margin-top: 20rpx;
		}
	}
}
</style>
