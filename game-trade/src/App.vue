<script setup lang="ts">
import uniIdPageInit from '@/uni_modules/uni-id-pages/init';
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';
import useStore from '@/store';
const store = useStore();
onLaunch(async () => {
	console.log('App Launch');
	await uniIdPageInit();
	await store.user.getUserInfo();
	await store.user.getBalance();
});
onShow(() => {
	console.log('App Show');
});
onHide(() => {
	console.log('App Hide');
});
</script>
<style>
@import './static/icon.css';
/* 背景颜色 */
page {
	background-color: #e0e2e5;
}
</style>
