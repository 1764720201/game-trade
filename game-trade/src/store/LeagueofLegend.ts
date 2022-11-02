import { Range } from '@/types/consignment';
export const useLeagueofLegend = defineStore({
			id: '英雄联盟',
			state: () => ({
				region: <Range[]>[
					{ value: 0, text: '电信' },
					{ value: 1, text: '网通' },
					{ value: 2, text: '峡谷之巅' }
				],
				allServer: <Range[][]>[
					[
						{ value: 0, text: '艾欧尼亚' },
						{ value: 1, text: '祖安' },
						{ value: 2, text: '诺克萨斯' },
						{ value: 3, text: '班德尔城' },
						{ value: 4, text: '皮尔特沃夫' },
						{ value: 5, text: '战争学院' },
						{ value: 6, text: '巨神峰' },
						{ value: 7, text: '雷瑟守备' },
						{ value: 8, text: '裁决之地' },
						{ value: 9, text: '黑色玫瑰' },
						{ value: 10, text: '暗影岛' },
						{ value: 11, text: '钢铁烈阳' },
						{ value: 12, text: '水晶之痕' },
						{ value: 13, text: '均衡教派' },
						{ value: 14, text: '影流' },
						{ value: 15, text: '守望之海' },
						{ value: 16, text: '征服之海' },
						{ value: 17, text: '卡拉曼达' },
						{ value: 18, text: '皮城警备' }
					],
					[
						{ value: 0, text: '皮尔吉沃特' },
						{ value: 1, text: '德玛西亚' },
						{ value: 2, text: '弗雷尔卓德' },
						{ value: 3, text: '无畏先锋' },
						{ value: 4, text: '扭曲丛林' },
						{ value: 5, text: '巨龙之巢' },
						{ value: 6, text: '男爵领域' }
					],
					[{ value: 0, text: '峡谷之巅' }]
				],
				qualification: <Range[]>[
					{
						value: 0,
						text: '有资格'
					},
					{
						value: 1,
						text: '无资格'
					}
				],
				rare: <Range[]>[
					{ value: 0, text: '飞龙在天' },
					{ value: 1, text: '亢龙有悔' },
					{ value: 2, text: '跃龙在渊' },
					{ value: 3, text: '龙战于野' },
					{ value: 4, text: '见龙在田' },
					{ value: 5, text: '乘龙御天' },
					{ value: 6, text: '龙德而隐' },
					{ value: 7, text: '潜龙勿用' }
				],
				grading: <Range[]>[
					{ value: 0, text: '坚韧黑铁' },
					{ value: 1, text: '英勇黄铜' },
					{ value: 2, text: '不屈白银' },
					{ value: 3, text: '荣耀黄金' },
					{ value: 4, text: '华贵铂金' },
					{ value: 5, text: '璀璨钻石' },
					{ value: 6, text: '超凡大师' },
					{ value: 7, text: '傲世宗师' },
					{ value: 8, text: '最强王者' }
				]
			}),
			getters: {}
		});
