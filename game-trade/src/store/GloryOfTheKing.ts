import { Range } from '@/types/consignment';
export const useGloryOfTheKing = defineStore({
	id: '王者荣耀',
	state: () => ({
		region: <Range[]>[
			{
				value: 0,
				text: '安卓QQ'
			},
			{
				value: 1,
				text: '安卓微信'
			},
			{
				value: 2,
				text: '苹果QQ'
			},
			{
				value: 3,
				text: '苹果微信'
			}
		],
		forestall: <Range[]>[
			{
				value: 0,
				text: '是'
			},
			{
				value: 1,
				text: '否'
			}
		],
		level: <Range[]>[
			{
				value: 0,
				text: 'V1'
			},
			{
				value: 1,
				text: 'V2'
			},
			{
				value: 2,
				text: 'V3'
			},
			{
				value: 3,
				text: 'V4'
			},
			{
				value: 4,
				text: 'V5'
			},
			{
				value: 5,
				text: 'V6'
			},
			{
				value: 6,
				text: 'V7'
			},
			{
				value: 8,
				text: 'V8'
			},
			{
				value: 9,
				text: 'V10'
			}
		],
		legend: <Range[]>[
			{
				value: 0,
				text: '幻海之心'
			},
			{
				value: 1,
				text: '未来机甲'
			},
			{
				value: 2,
				text: '幽冥之眼'
			},
			{
				value: 3,
				text: '零号·雷霆'
			},
			{
				value: 4,
				text: '幽冥火'
			},
			{
				value: 5,
				text: '金色仲夏夜'
			},
			{
				value: 6,
				text: '时之愿境'
			},
			{
				value: 7,
				text: '时之羁绊'
			},
			{
				value: 8,
				text: '时之思念'
			},
			{
				value: 9,
				text: '星际治安官'
			}
		]
	}),
	actions: {},
	getters: {}
});
