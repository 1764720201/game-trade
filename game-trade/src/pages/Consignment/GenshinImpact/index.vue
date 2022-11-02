<template>
	<!-- 使用选择组件 -->
	<Check :range="region" title="大区" @check="getRegionIndex"></Check>
	<Check :range="server" title="服务器" @check="getServerIndex"></Check>
	<Check :range="email" title="邮箱" @check="getEmailIndex"></Check>

	<InputBox
		title="冒险等级"
		position="left"
		tips="请填写冒险等级"
		@input="getLevel"
		type="number"
	></InputBox>
	<!-- 使用上传图片组件 -->
	<File title="账号信息" @file="getAccountInfo"></File>
	<File title="游戏截图" @file="getScreenshot"></File>
	<File title="换绑邮箱截图(仅网易邮箱)" @file="getEmailImage"></File>

	<!-- 使用选择图片 -->
	<Check
		:range="technology"
		title="是否科技号"
		@check="getTechnologyIndex"
	></Check>
	<Check
		:range="autonym"
		title="是否能提供游戏实名的身份信息"
		@check="getAutonymIndex"
	></Check>

	<!-- 使用输入框组件 -->
	<InputBox
		title="其它亮点(选填)"
		position="top"
		tips="请填写其它亮点"
		@input="getOtherBright"
		type="text"
	></InputBox>
	<InputBox
		title="售价"
		position="left"
		tips="请填写金额"
		@input="getPrice"
		type="number"
	></InputBox>

	<!-- 使用价格组件 -->
	<Price :price="Number(price)"></Price>

	<!-- 使用按钮组件 -->
	<Next ifShowNext @click="goPublish" title="下一步"></Next>
</template>

<script lang="ts" setup>
//引用选择组件
import Check from '@/components/Check/index';
//引用上传图片组件
import File from '@/components/File/index'
//引用输入框组件
import InputBox from '@/components/InputBox/index'
//引入价格组件
import Price from '@/components/Price/index'
//引入按钮组件
import Next from '@/components/Button/index'

//引入类型
import type {Range,Image,Detail} from '@/types/consignment'
import useStore from '@/store'
const store=useStore()
const {region,allServer,email,technology,autonym}=storeToRefs(store.GenshinImpact)




//默认大区 没有选定
const regionIndex=ref<number>()
//默认服务器 没有选定
const serverIndex=ref<number>()
//默认邮箱形式 没有选定
const emailIndex=ref<number>()

// 冒险等级
const  level=ref<string>()
//默认是否为科技号 没有选定
const technologyIndex=ref<number>()
//默认是否提供实名 没有选定
const autonymIndex=ref<number>()
//默认是否有其它亮点 为空
const otherBright=ref<string>('')
//默认价格 为空
const price=ref<number>()
//默认没有账户信息图片
const accountInfo=ref<Image[]>([])
//默认没有改绑图片
const screenshot=ref<Image[]>([])
//默认没有邮箱图片
const emailImage=ref<Image[]>([])

//根据大区显示不同的服务器
const server=ref<Range[]>(allServer.value[0])
const getRegionIndex=(value:number)=>{
	//获取大区名
	regionIndex.value=value
	switch(value){
		case 0:
			server.value=allServer.value[0]
			break
		case 1:
			server.value=allServer.value[1]
			break
	}
}
//获取服务器的下标值
const getServerIndex=(value:number)=>{
	serverIndex.value=value
}
//获取邮箱形式的下标值
const getEmailIndex=(value:number)=>{
	emailIndex.value=value
}
//获取是否科技号的下标值
const getTechnologyIndex=(value:number)=>{
	technologyIndex.value=value
}
//获取是否实名认证的下标值
const getAutonymIndex=(value:number)=>{
	autonymIndex.value=value
}

//获取账号信息的图片列表
const getAccountInfo=(value:Image[])=>{
	accountInfo.value=value
}
//获取换绑的图片列表
const getScreenshot=(value:Image[])=>{
	screenshot.value=value
}
//获取邮箱截图
const getEmailImage=(value:Image[])=>{
	emailImage.value=value
}
//获取其它亮点的文字
const getOtherBright=(value:string)=>{
	otherBright.value=value
}
//获取价格
const getPrice=(value:number)=>{
	price.value=value
}
const getLevel=(value:string)=>{
	level.value=value
}

//初始化寄售的基本信息
const consignment=reactive<Detail>({
	game:'原神',
	region:'',
	server:'',
	email:'',
	accountInfo:[],
	screenshot:[],
	emailImage:[],
	technology:'',
	otherBright:'',
	autonym:'',
	price:0,
	level:''
})

// 默认放行
const next=ref<boolean>(true)

//验证所有信息是否已填
const verifyFn=()=>{
	// 调用是否选择函数
	verifyCheck('region',region.value,'请选择大区',regionIndex.value)
	verifyCheck('server',server.value,'请选择服务器',serverIndex.value)
	verifyCheck('email',email.value,'请选择邮箱',emailIndex.value)

	verifyInput('level','请填写冒险等级',level.value)
	// 调用是否上传函数
	verifyFile('accountInfo','请上传账号信息',accountInfo.value)
	verifyFile('screenshot','请上传换绑情况',screenshot.value)
	verifyFile('emailImage','请上传邮箱截图',emailImage.value)
	// 调用是否选择函数
	verifyCheck('technology',technology.value,'请选择是否为科技号',technologyIndex.value)
	verifyCheck('autonym',autonym.value,'请选择是否能提供实名信息',autonymIndex.value)
	// 调用是否填写函数
	verifyInput('price','请填写价格',price.value)
}

//验证是否已选
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

//下一步，前往上传页面
const goPublish=()=>{
	next.value=true
	verifyFn()
	consignment.otherBright=otherBright.value
	if(next.value){
		uni.navigateTo({
			url:`/pages/Publish/index?consignment=${JSON.stringify(consignment)}`
		})
	}
}
</script>

<style lang="scss" scoped></style>
