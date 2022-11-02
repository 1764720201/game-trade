<template>
	<unicloud-db
		ref="udb"
		v-slot:default="{ data, loading, error }"
		collection="consignment"
		:orderby="sort"
		field="server,region,price,email,accountInfo,technology,otherBright,_id,materials,amount,qualification,rare,screenshot,skin,grading,dazzling,level,legend,national"
		:page-size="3"
		:getone="false"
		:where="props.where"
	>
		<view v-if="error" class="error">{{ error.message }}</view>
		<view v-else class="list">
			<view
				v-for="item in data"
				:key="item._id"
				class="list-item"
				@click="goDetail(item._id)"
			>
				<!-- 不同游戏的图片不一样 -->
				<image
					v-if="props.game"
					class="image"
					:src="item.screenshot[0].url"
					mode="aspectFill"
				></image>
				<view class="accountInfo">
					<view class="header">
						<view class="left">
							<view
								class="compensate"
								v-if="item.materials == '提供'"
							>
								支持包赔
							</view>
							<view class="region">{{ item.region }}</view>
							<view class="server">{{ item.server }}</view>
						</view>
						<view class="price">￥{{ item.price.toFixed(2) }}</view>
					</view>
					<!-- 不同游戏渲染不同的内容 -->
					<view class="content">
						<view v-if="props.game == '原神'">
							邮箱:{{ item.email }} 是否科技号:{{
								item.technology
							}}
							其它亮点:{{
								item.otherBright ? item.otherBright : '无'
							}}
						</view>
						<view v-if="props.game == '英雄联盟'">
							{{
								item.qualification == '有资格'
									? '有峡谷之巅资格'
									: '无峡谷之巅资格'
							}}

							英雄数:{{ item.amount }} 皮肤数:{{
								item.skin
							}}
							炫彩数:{{ item.dazzling }}
							{{ item.rare ? `龙瞎炫彩:${item.rare}` : '' }}
						</view>
						<view v-if="props.game == '王者荣耀'">
							贵族等级:{{ item.level }} 皮肤数:{{ item.skin }}
							{{ item.legend ? '星传说:' + item.legend : '' }}
							{{ item.national ? '国标:' + item.national : '' }}
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more status="loading" v-if="loading" />
	</unicloud-db>
</template>

<script lang="ts" setup>
const props = defineProps<{ where: string; sort: string; game: string }>();
// 前往账号详情界面
const goDetail = (id: number) => {
	uni.navigateTo({
		url: `/pages/Detail/index?id=${id}`
	});
};
const udb = ref(null);
// 上拉翻页
onReachBottom(() => {
	//@ts-ignore
	udb.value.loadMore();
});
</script>

<style lang="scss" scoped>
.list {
	padding-bottom: 30rpx;
	&-item {
		margin-top: 40rpx;
		display: flex;
		flex-direction: column;
		.image {
			width: 100%;
			height: 400rpx;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
		}
		&:first-child {
			margin-top: 0;
			.image {
				border-radius: 0;
			}
		}
		.accountInfo {
			padding: 20rpx;
			background-color: white;
			height: 200rpx;
			border-bottom-left-radius: 30rpx;
			border-bottom-right-radius: 30rpx;
			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left {
					display: flex;
					align-items: center;
					.compensate {
						padding: 5rpx;
						font-size: 25rpx;
						border: 1px solid $game-theme;
						color: $game-theme;
						border-radius: 8rpx;
					}
					.region,
					.server {
						padding-left: 20rpx;
						font-weight: 900;
					}
				}
				.price {
					font-size: 35rpx;
					color: red;
					font-weight: 900;
				}
			}
			.content {
				margin-top: 20rpx;
				font-size: 28rpx;
				color: #666;
			}
		}
	}
}
</style>
