<template>
	<view class="category">
		<view class="category-item">
			<!-- 展示的游戏种类s -->
			<view
				class="game"
				v-for="item in categoryList"
				:key="item.id"
				@click="change(item.name)"
			>
				<image class="image" :src="item.icon" mode="aspectFill"></image>
				<view
					class="name"
					:style="
						currentName == item.name
							? { fontWeight: 900 }
							: { color: '#a9a9a9' }
					"
				>
					{{ item.name }}
				</view>
			</view>
			<!-- 更多,绑定点击事件,可以打开底部弹出层 -->
			<view class="more" @click="getMore">
				<view class="t-icon t-icon-gengduo"></view>
				<view class="name">更多</view>
			</view>
			<!-- 弹出层 -->
			<uni-popup ref="popup" type="bottom" :safeArea="false">
				<view class="more-game">
					<view class="header">
						<uni-icons
							type="arrow-left"
							size="30"
							color="#1296db"
							@click="cancel"
						></uni-icons>
						<view class="title">更多品类</view>
					</view>
					<view class="title">游戏</view>
					<scroll-view
						style="height: 300px;"
						scroll-y="true"
						class="scroll-Y"
					>
						<view class="more-category">
							<view
								class="more-item"
								v-for="item in allCategoryList"
								:key="item.id"
								@click="changeMore(item)"
							>
								<image
									class="image"
									:src="item.icon"
									mode="aspectFill"
								></image>
								{{ item.name }}
							</view>
						</view>
					</scroll-view>
				</view>
			</uni-popup>
		</view>
	</view>

	<!-- 筛选条件 -->
	<view class="condition">
		<view class="area" @click="chooseArea">
			区服
			<uni-icons type="bottom" size="15" color="#ccc"></uni-icons>
		</view>
		<view class="order" @click="openOrder">
			默认排序
			<uni-icons type="bottom" size="15" color="#ccc"></uni-icons>
		</view>
		<view class="screen" @click="openScreen">
			筛选
			<uni-icons type="bars" size="15" color="#ccc"></uni-icons>
		</view>
	</view>

	<!-- 使用展示列表组件 -->
	<List :game="currentName" :where="where" :sort="sort"></List>
	<!-- 区服 -->
	<uni-popup ref="area" type="right">
		<view class="chooseArea">
			<view class="region">
				<view class="title">大区</view>
				<view class="list">
					<view
						class="item"
						v-for="item in region"
						:key="item.value"
						:class="currentRegion == item.text ? 'active' : ''"
						@click="chooseRegion(item)"
					>
						{{ item.text }}
					</view>
				</view>
			</view>
			<view class="server">
				<view class="title">服务器</view>
				<scroll-view scroll-y="true" style="height: 750rpx;">
					<view class="list">
						<view
							class="item"
							v-for="item in server"
							:key="item.text"
							:class="currentServer == item.text ? 'active' : ''"
							@click="chooseServer(item.text)"
						>
							{{ item.text }}
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="footer">
				<view class="reset" @click="reset('area')">重置</view>
				<view class="confirm" @click="confirm('area')">确定</view>
			</view>
		</view>
	</uni-popup>
	<!-- 排序 -->
	<uni-popup ref="order" type="bottom" :safeArea="false">
		<view class="orderList">
			<view
				class="item"
				v-for="item in orderOptions"
				:key="item.value"
				@click="chooseOrder(item.value)"
			>
				{{ item.text }}
			</view>
		</view>
	</uni-popup>
	<uni-popup ref="screen" type="right">
		<view class="chooseScreen">
			<view class="price">
				<view class="title">价格区间</view>
				<view class="list">
					<view
						class="item"
						v-for="item in priceList"
						:key="item.value"
						@click="choosePrice(item.value)"
						:class="currentPrice == item.text ? 'active' : ''"
					>
						{{ item.text }}
					</view>
				</view>
			</view>
			<view class="materials">
				<view class="title">是否支持包赔</view>
				<view class="list">
					<view
						class="item"
						v-for="item in compensateList"
						:key="item.value"
						@click="chooseCompensate(item.text)"
						:class="currentCompensate == item.text ? 'active' : ''"
					>
						{{ item.text }}
					</view>
				</view>
			</view>
			<view class="grading" v-if="currentName == '英雄联盟'">
				<view class="title">单双排段位</view>
				<view class="list">
					<view
						class="item"
						v-for="item in grading"
						:key="item.value"
						@click="chooseGrading(item.text)"
						:class="currentGrading == item.text ? 'active' : ''"
					>
						{{ item.text }}
					</view>
				</view>
			</view>
			<view class="email" v-if="currentName == '原神'">
				<view class="title">邮箱</view>
				<view class="list">
					<view
						class="item"
						v-for="item in email"
						:key="item.value"
						:class="currentEmail == item.text ? 'active' : ''"
						@click="chooseEmail(item.text)"
					>
						{{ item.text }}
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="reset" @click="reset('screen')">重置</view>
				<view class="confirm" @click="confirm('screen')">确定</view>
			</view>
		</view>
	</uni-popup>
</template>

<script lang="ts" setup>
import useStore from '@/store';
//引入展示列表组件
import List from '@/components/List/index';
import { Range } from '@/types/consignment';

const priceList = ref<Range[]>([
	{ value: 0, text: '500以下' },
	{ value: 1, text: '500-1000' },
	{ value: 2, text: '1000-3000' },
	{ value: 3, text: '3000-10000' },
	{ value: 4, text: '10000-30000' },
	{ value: 5, text: '30000以上' }
]);
const compensateList = ref<Range[]>([
	{ value: 0, text: '支持' },
	{ value: 1, text: '不支持' }
]);
const area = ref(null);
// 筛选区服
const chooseArea = () => {
	//@ts-ignore
	area.value.open();
};
// 默认查询条件

const store = useStore();
// 获取邮箱类型
const { email } = storeToRefs(store.GenshinImpact);
// 获取段位类型
const { grading } = storeToRefs(store.LeagueofLegend);
const currentName = ref<string>('原神');
const where = ref<string>(`game=='${currentName.value}'&&state==0`);
const server = ref<Range[]>([]);

const region = ref<Range[]>([]);
// 当前选择的大区
const currentRegion = ref<string>('');
// 选择大区

const chooseRegion = (item: Range) => {
	currentRegion.value = item.text;
	const storeName = ref<string>('');
	switch (currentName.value) {
		case '原神':
			storeName.value = 'GenshinImpact';
			break;
		case '英雄联盟':
			storeName.value = 'LeagueofLegend';
			break;
		case '王者荣耀':
			storeName.value = 'GloryOfTheKing';
			break;
	}
	const st = storeToRefs(store[storeName.value]);
	const allServer = ref<Range[]>([]);
	st.allServer.value.forEach((value: Range[]) => {
		allServer.value.push(...value);
	});
	if (item.text != '全部') {
		server.value = st.allServer?.value[item.value];
	} else {
		server.value = allServer.value;
	}
};
// 当前选择的服务器
const currentServer = ref<string>('');
//选择服务器
const chooseServer = (name: string) => {
	currentServer.value = name;
};

// 获取所有的区服
const getArea = (storeName: string) => {
	server.value.length = 0;
	const st = storeToRefs(store[storeName]);
	st.allServer?.value.forEach((value: Range[]) => {
		server.value.push(...value);
	});
	region.value = st.region.value.slice(0);
	if (region.value.findIndex(value => value.text == '全部') != 0) {
		region.value.unshift({ value: 999, text: '全部' });
	}
};
// 获取默认选中的区服
const getDefaultArea = () => {
	currentRegion.value = region.value[0].text;
};

// 根据选择的游戏展示不一样的列表
const change = (game: string) => {
	currentName.value = game;
	where.value = `game=='${currentName.value}'&&state==0`;
	// 根据选择游戏获取不一样的区服
	switch (game) {
		case '原神':
			getArea('GenshinImpact');
			break;
		case '英雄联盟':
			getArea('LeagueofLegend');
			break;
		case '王者荣耀':
			getArea('GloryOfTheKing');
			break;
	}
	getDefaultArea();
};

//重置区服的选择
const reset = (type: string) => {
	if (type == 'area') {
		currentRegion.value = '全部';
		currentServer.value = '';
	}
	if (type == 'screen') {
		currentCompensate.value = '';
		currentEmail.value = '';
		currentGrading.value = '';
	}
};
// 确认查询条件
const confirm = (type: string) => {
	const condition = ref<string[]>([]);
	condition.value.push(`game=='${currentName.value}'`);
	condition.value.push('state==0')
	if (type == 'area') {
		if (currentRegion.value != '全部') {
			condition.value.push(`region=='${currentRegion.value}'`);
		}
		if (currentServer.value) {
			condition.value.push(`server=='${currentServer.value}'`);
		}
		//@ts-ignore
		area.value.close();
	}
	if (type == 'screen') {
		if (currentCompensate.value == '支持') {
			condition.value.push("materials=='提供'");
		}
		if (currentCompensate.value == '不支持') {
			condition.value.push("materials=='不提供'");
		}
		if (currentEmail.value) {
			condition.value.push(`email=='${currentEmail.value}'`);
		}
		if (currentGrading.value) {
			condition.value.push(`grading=='${currentGrading.value}'`);
		}
		if (currentPrice.value) {
			condition.value.push(priceItem.value);
		}
		//@ts-ignore
		screen.value.close();
	}
	where.value = condition.value.join('&&');
};

type CategoryList = {
	id: number;
	name: string;
	icon: string;
};
//部分游戏种类
const categoryList = reactive<CategoryList[]>([]);
//所有游戏种类
const allCategoryList = reactive<CategoryList[]>([]);

const db = uniCloud.database();

onLoad(async () => {
	// 从数据库获取游戏种类
	await db
		.collection('category')
		.orderBy('order', 'asc')
		.get()
		.then(res => {
			//获取游戏种类的前四个
			categoryList.push(...res.result.data.slice(0, 4));
			//获取全部游戏种类
			allCategoryList.push(...res.result.data);
		});
	getArea('GenshinImpact');

	getDefaultArea();
});

// 绑定popup
const popup = ref(null);
// 打开底部弹出层
const getMore = () => {
	//@ts-ignore
	popup.value.open('bottom');
};
// 取消弹出层
const cancel = () => {
	//@ts-ignore
	popup.value.close();
};

const changeMore = (item: CategoryList) => {
	// 如果选择的游戏本身就是第一项则保持不动
	if (categoryList[0].name == item.name) return;
	currentName.value = item.name;
	categoryList.forEach((value, index) => {
		// 如果选择的游戏存在展示游戏中，那么将游戏提前到第一位
		if (value.name == item.name) {
			categoryList.splice(index, 1);
			categoryList.unshift(item);
		}
	});
	const exist = categoryList.map(value => {
		return value.name == item.name;
	});
	// 如果选择的游戏不存在游戏中，那么将成为第一位，别的游戏向后移以为，并保持展示4个游戏不变
	if (exist.indexOf(true) == -1) {
		categoryList.pop();
		categoryList.unshift(item);
	}
	change(item.name)
	// 关闭弹出层
	//@ts-ignore
	popup.value.close();
};
// 排序的类型
const orderOptions = ref<Range[]>([
	{ value: 0, text: '默认排序' },
	{ value: 1, text: '最新发布' },
	{ value: 2, text: '价格最低' },
	{ value: 3, text: '价格最高' }
]);
const order = ref(null);
//打开排序底部弹出层
const openOrder = () => {
	//@ts-ignore
	order.value.open();
};
const sort = ref<string>('create_time desc');
const chooseOrder = (index: number) => {
	switch (index) {
		case 0:
			sort.value = 'create_time desc';
			break;
		case 1:
			sort.value = 'create_time desc';
			break;
		case 2:
			sort.value = 'price asc';
			break;
		case 3:
			sort.value = 'price desc';
			break;
	}
	//@ts-ignore
	order.value.close();
};

const screen = ref(null);
//打开筛选右边弹出层
const openScreen = () => {
	//@ts-ignore
	screen.value.open();
};
//当前选择的是否包赔
const currentCompensate = ref<string>('');
//选择是否包赔
const chooseCompensate = (value: string) => {
	currentCompensate.value = value;
};
// 当前选择的邮箱类型
const currentEmail = ref<string>('');
const chooseEmail = (value: string) => {
	currentEmail.value = value;
};

// 当前的段位
const currentGrading = ref<string>('');
// 选择段位
const chooseGrading = (value: string) => {
	currentGrading.value = value;
};

// 当前的价格区间
const currentPrice = ref<string>('');
// 根据选择的价格区间，筛选

const priceItem = ref<string>('');
// 选择价格区间

const choosePrice = (index: number) => {
	currentPrice.value = priceList.value[index].text;
	// 根据选择价格区间筛选
	switch (index) {
		case 0:
			priceItem.value = 'price<500';
			break;
		case 1:
			priceItem.value = 'price>=500&&price<1000';
			break;
		case 2:
			priceItem.value = 'price>=1000&&price<3000';
			break;
		case 3:
			priceItem.value = 'price>=3000&&price<10000';
			break;
		case 4:
			priceItem.value = 'price>=10000&&price<30000';
			break;
		case 5:
			priceItem.value = 'price>30000';
			break;
	}
};
</script>

<style lang="scss" scoped>
.category {
	margin-top: 30rpx;
	width: 100%;
	&-item {
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.name {
			margin-top: 10rpx;
			font-size: 25rpx;
		}
		.game {
			display: flex;
			flex-direction: column;
			align-items: center;
			.image {
				border-radius: 50%;
				width: 100rpx;
				height: 100rpx;
			}
		}
		.more {
			display: flex;
			flex-direction: column;
			align-items: center;
			.t-icon {
				width: 75rpx;
				height: 75rpx;
			}
			.name {
				position: relative;
				top: 13rpx;
				color: #a9a9a9;
			}
		}
	}
}
.more-game {
	background-color: white;
	border-top-left-radius: 40rpx;
	border-top-right-radius: 40rpx;
	padding: 30rpx;
	.header {
		display: flex;
		align-items: center;
		margin-bottom: 40rpx;
		.title {
			margin-left: 33%;
		}
	}
	.title {
		font-size: 37rpx;
		font-weight: 900;
		margin-left: 10rpx;
	}
	.more-category {
		display: flex;
		flex-wrap: wrap;
		.more-item {
			margin-top: 40rpx;
			width: 25%;
			align-items: center;
			display: flex;
			flex-direction: column;
			font-size: 25rpx;
			.image {
				border-radius: 50%;
				width: 105rpx;
				height: 105rpx;
				margin-bottom: 15rpx;
			}
		}
	}
}
.condition {
	padding: 30rpx;
	background-color: white;
	display: flex;
	border-top-left-radius: 30rpx;
	border-top-right-radius: 30rpx;
	justify-content: space-between;
	.area,
	.order,
	.screen {
		height: 40rpx;
		width: 30%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
.chooseArea,
.chooseScreen {
	width: 630rpx;
	border-top-left-radius: 40rpx;
	background-color: white;
	height: 100%;
	.region,
	.server,
	.price,
	.materials,
	.grading,
	.email {
		padding: 20rpx;
		.title {
			font-weight: 900;
			margin-left: 15rpx;
		}
		.list {
			display: flex;
			flex-wrap: wrap;
			.item {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 23rpx;
				margin-top: 25rpx;
				margin-left: 15rpx;
				width: 180rpx;
				height: 75rpx;
				border-radius: 10rpx;
				background-color: #eef0f1;
			}
			.active {
				background-color: #dcddea;
				color: #4c5acc;
			}
		}
	}
	.footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 150rpx;
		display: flex;
		justify-content: space-around;
		.confirm,
		.reset {
			width: 280rpx;
			height: 100rpx;
			border-radius: 20rpx;
			text-align: center;
			line-height: 100rpx;
		}
		.confirm {
			background-color: rgb(88, 105, 238);
			color: white;
		}
		.reset {
			background-color: rgba(88, 105, 238, 0.2);
			color: rgb(88, 105, 238);
		}
	}
}
.orderList {
	border-top-right-radius: 30rpx;
	border-top-left-radius: 30rpx;
	height: 400rpx;
	justify-content: space-around;
	display: flex;
	flex-direction: column;
	background-color: white;
	align-items: center;
}
</style>
