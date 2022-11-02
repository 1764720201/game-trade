import { Range } from '@/types/consignment';
export const useGenshinImpact = defineStore({
	id: 'GenshinImpact',
	state: () => ({
		region: <Range[]>[
			{
				value: 0,
				text: '官服'
			},
			{
				value: 1,
				text: 'B服'
			}
		],
		allServer: <Range[][]>[
			[
				{
					value: 0,
					text: '天空岛'
				}
			],
			[
				{
					value: 0,
					text: '世界树'
				}
			]
		],
		email: <Range[]>[
			{
				value: 0,
				text: '未绑定邮箱'
			},
			{
				value: 1,
				text: '送未实名邮箱'
			},
			{
				value: 2,
				text: '送已实名邮箱'
			},
			{
				value: 3,
				text: '普通Q邮(随游戏出售)'
			},

			{
				value: 4,
				text: '字母Q邮'
			},
			{
				value: 5,
				text: '邮箱无法正常使用'
			},
			{
				value: 6,
				text: '不送邮箱'
			},
			{
				value: 7,
				text: 'B服无需赠送邮箱'
			}
		],
		technology: <Range[]>[
			{ value: 0, text: '不是科技号' },
			{ value: 1, text: '是科技号' }
		],
		autonym: <Range[]>[{ value: 0, text: '是' }, { value: 1, text: '否' }]
	})
});
