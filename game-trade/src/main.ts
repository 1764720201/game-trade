/*
 * @Author: your name
 * @Date: 2022-09-30 10:27:31
 * @LastEditors: your name
 * @LastEditTime: 2022-09-30 17:29:45
 * @Description:
 */

import { createSSRApp } from 'vue';
const pinia = createPinia();
import App from './App.vue';

export function createApp() {
	const app = createSSRApp(App).use(pinia);
	return {
		app
	};
}
