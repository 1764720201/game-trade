import { Detail } from '@/types/consignment';
export const useDetail = defineStore({
	id: 'detail',
	state: () => ({
		detail: <Detail>{},
		option: <string>'游戏截图'
	}),
	actions: {
		async getDetail(detail: Detail) {
			Object.assign(this.detail, detail);
		},
		async getCurrentOption(option: string) {
			this.option = option;
		}
	},
	getters: {}
});
