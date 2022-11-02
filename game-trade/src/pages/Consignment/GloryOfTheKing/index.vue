<template>
	<Check title="大区" :range="region" @check="getRegionIndex"></Check>
	<InputBox
		title="王者营地ID"
		position="top"
		tips="请填写王者营地ID"
		type="text"
		@input="getCampsite"
	></InputBox>
	<InputBox
		title="皮肤数"
		position="top"
		tips="请填写皮肤数"
		type="number"
		@input="getSkin"
	></InputBox>
	<Check
		title="是否抢先服"
		:range="forestall"
		@check="getForestallIndex"
	></Check>
	<Check title="贵族等级" :range="level" @check="getLevelIndex"></Check>
	<File title="游戏截图" @file="getScreenshot"></File>
	<File title="游戏个人主页截图" @file="getHomepage"></File>
	<InputBox
		title="国标(选填)"
		position="top"
		tips="请填写国标"
		type="text"
		@input="getNational"
	></InputBox>
	<Check title="星传说(选填)" :range="legend" @check="getLegendIndex"></Check>
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
import InputBox from '@/components/InputBox/index';
import File from '@/components/File/index';
import Price from '@/components/Price/index';
import Next from '@/components/Button/index';
import { Detail, Image } from '@/types/consignment';
import useStore from '@/store';
const store = useStore();
const { region, legend, level, forestall } = storeToRefs(store.GloryOfTheKing);

const consignment = reactive<Detail>({
	game: '王者荣耀',
	price: 0,
	region: '',
	national: '',
	homepage: [],
	campsite: '',
	screenshot: [],
	level: ''
});

const regionIndex = ref<number>();
// 获取大区
const getRegionIndex = (value: number) => {
	regionIndex.value = value;
};
const campsite = ref<string>();
// 获取营地ID
const getCampsite = (value: string) => {
	campsite.value = value;
};
const forestallIndex = ref<number>();
// 获取是否抢先服
const getForestallIndex = (value: number) => {
	forestallIndex.value = value;
};
const levelIndex = ref<number>(0);
// 获取贵族等级
const getLevelIndex = (value: number) => {
	levelIndex.value = value;
};
const screenshot = ref<Image[]>([]);
// 获取游戏截图
const getScreenshot = (value: Image[]) => {
	screenshot.value = value;
};
const homepage = ref<Image[]>([]);
// 获取主页截图
const getHomepage = (value: Image[]) => {
	homepage.value = value;
};
const national = ref<string>('');
// 获取国标
const getNational = (value: string) => {
	national.value = value;
};
const legendIndex = ref<number>(0);
// 获取星传说
const getLegendIndex = (value: number) => {
	legendIndex.value = value;
};
const price = ref<number>(0);
// 获取价格
const getPrice = (value: number) => {
	price.value = value;
};
const skin = ref<number>();
// 获取皮肤数
const getSkin = (value: number) => {
	skin.value = value;
};
const next=ref<boolean>(true)
const verifyCheck=(value:string,range:Range[],title:string,index?:number)=>{
	if(next.value){
		// 如果已选则放行
		if(index!>=0){
			consignment[value]=range[index!]?.text
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
const goPublish=()=>{
	next.value=true
	verifyCheck('region',region.value,'请选择大区',regionIndex.value)
	verifyInput('campsite','请输入王者营地ID',campsite.value)
	verifyInput('skin','请输入皮肤数',skin.value)
	verifyCheck('forestall',forestall.value,'请选择是否为抢先服',forestallIndex.value)
	verifyCheck('level',level.value,'请选择贵族等级',levelIndex.value)
	verifyFile('screenshot','请上传游戏截图',screenshot.value)
	verifyFile('homepage','请上传个人主页截图',homepage.value)
	verifyInput('price','请输入价格',price.value)
	consignment.national=national.value
	consignment.legend=legend.value[legendIndex.value]?.text
	if(next.value){
		uni.navigateTo({
			url:`/pages/Publish/index?consignment=${JSON.stringify(consignment)}`
		})
	}
}
</script>

<style lang="scss" scoped></style>
