<template>
	<Check title="大区" :range="region" @check="getRegionIndex"></Check>
	<Check title="服务器" :range="server" @check="getServerIndex"></Check>
	<File title="游戏截图" @file="getScreenshot"></File>
	<InputBox
		title="皮肤数"
		position="top"
		tips="请填写皮肤数"
		type="number"
		@input="getSkin"
	></InputBox>
	<InputBox
		title="炫彩数"
		position="top"
		tips="请填写炫彩数"
		type="number"
		@input="getDazzling"
	></InputBox>
	<InputBox
		title="英雄数"
		position="top"
		tips="请填写英雄数"
		type="number"
		@input="getAmount"
	></InputBox>
	<view class="grading">
		<uni-data-select
			v-model="gradingIndex"
			:localdata="grading"
			@change="changeGrading"
			clear
			placeholder="请选择单双排段位"
		></uni-data-select>
	</view>
	<Check
		title="峡谷之巅资格(选填)"
		:range="qualification"
		@check="getQualificationIndex"
	></Check>
	<Check title="龙瞎炫彩(选填)" :range="rare" @check="getRareIndex"></Check>
	<InputBox
		title="售价"
		position="left"
		tips="请填写金额"
		type="number"
		@input="getPrice"
	></InputBox>
	<Price :price="Number(price)"></Price>
	<Next title="下一步" ifShowNext @click="goPublish"></Next>
</template>

<script lang="ts" setup>
import Check from '@/components/Check/index';
import File from '@/components/File/index';
import InputBox from '@/components/InputBox/index';
import Price from '@/components/Price/index';
import Next from '@/components/Button/index';
import { Range, Image,Detail } from '@/types/consignment';
import useStore from '@/store';
const store = useStore();

//大区
const regionIndex = ref<number>();
// 服务器
const serverIndex = ref<number>();
// 修改实名机会
const screenshot = ref<Image[]>([]);
// 英雄数
const amount = ref<string>();
//峡谷之巅资格
const qualificationIndex = ref<number>(-1);
// 龙瞎炫彩
const rareIndex = ref<number>(-1);
// 价格
const price = ref<number>(0);
// 单双排段位
const gradingIndex=ref<number>(0)
//皮肤数
const skin=ref<string>()
//炫彩数
const dazzling=ref<string>()
// 从pinia中获取所有数据
const { allServer, region, qualification, rare,grading } = storeToRefs(
	store.LeagueofLegend
);
// 默认游戏基本信息
const consignment = reactive<Detail>({
	game: '英雄联盟',
	region: '',
	server: '',
	amount:0,
	qualification: '',
	screenshot: [],
	rare: '',
	price: 0,
	dazzling:'',
	skin:'',
	grading:'',
});

// 默认展示电信大区的服务器
const server = ref<Range[]>(allServer.value[0]);
// 获取大区的下标值
const getRegionIndex = (value: number) => {
	regionIndex.value = value;
	// 根据选择大区展示不同的服务器
	switch (value) {
		case 0:
			server.value = allServer.value[0];
			break;
		case 1:
			server.value = allServer.value[1];
			break;
		case 2:
			server.value = allServer.value[2];
			break;
	}
};
// 获取服务器的下标值
const getServerIndex = (value: number) => {
	serverIndex.value = value;
};
// 获取修改实名机会的图片
const getScreenshot = (value: Image[]) => {
	screenshot.value = value;
};
// 获取英雄数
const getAmount = (value: string) => {
	amount.value = value;
};
// 是否有峡谷之巅资格
const getQualificationIndex = (value: number) => {
	qualificationIndex.value = value;
};
// 获取选中的龙瞎炫彩
const getRareIndex = (value: number) => {
	rareIndex.value = value;
};
//获取价格
const getPrice = (value: number) => {
	price.value =value
};
//获取段位
const changeGrading=(e:number)=>{
	gradingIndex.value=e
}
//获取皮肤数
const getSkin=(value:string)=>{
	skin.value=value
}
//获取炫彩数
const getDazzling=(value:string)=>{
	dazzling.value=value
}
const next=ref<boolean>(true)
const verifyCheck=(value:string,range:Range[],title:string,index?:number)=>{
	if(next.value){
		// 如果已选则放行
		if(index!>=0){
			consignment[value]=range[index!].text
			next.value=true
		}else{
			// 如果没有选择，则提醒没有选择
			uni.showToast({
				title,
				icon:'none'
			})
			// 不放行
			next.value=false
		}
	}
}

// 验证是否已填写
const verifyInput=(value:string,title:string,content?:string|number)=>{
	if(next.value){
		// 如果输入框有内容则放行
		if(content){
			consignment[value]=content
			next.value=true
		}else{
			// 输入框没内容，则提醒没内容
			uni.showToast({
				title,
				icon:'none'
			})
			// 禁止放行
			next.value=false
		}
	}
}


//验证是否已上传图片
const verifyFile=(value:string,title:string,image?:Image[])=>{
	if(next.value){
		// 如果有至少一张图片则放行
		if(image![0]?.url){
			consignment[value]=image
			next.value=true
		}else{
			// 没有图片则提示没有图片
			uni.showToast({
				title,
				icon:'none'
			})
			// 禁止图片
			next.value=false
		}
	}
}
//验证是否选择
const verifySelect=(value:string,title:string,select?:string)=>{
	if(next.value){
		if(select){
			consignment[value]=select
			next.value=true
		}else{
			uni.showToast({
				title,
				icon:'none'
			})
			next.value=false
		}
	}
}
const goPublish=()=>{
	next.value=true
	verifyCheck('region',region.value,'请选择大区',regionIndex.value)
	verifyCheck('server',server.value,'请选择服务器',serverIndex.value)

	verifyFile('screenshot','请上传游戏截图',screenshot.value)

	verifyInput('skin','请输入皮肤数',skin.value)
	verifyInput('dazzling','请输入炫彩数',dazzling.value)
	verifyInput('amount','请输入英雄数',amount.value)

	verifySelect('grading','请选择单双排段位',grading.value[gradingIndex.value]?.text)

	verifyInput('price','请输入价格',price.value)

	consignment.qualification=qualification.value[qualificationIndex.value]?.text
	consignment.rare=rare.value[rareIndex.value]?.text
	if(next.value){
		uni.navigateTo({
			url:`/pages/Publish/index?consignment=${JSON.stringify(consignment)}`
		})
	}
}
</script>

<style lang="scss" scoped>
.grading {
	background-color: white;
	border-radius: 20rpx;
	margin-top: 30rpx;
	height: 70rpx;
}
</style>
