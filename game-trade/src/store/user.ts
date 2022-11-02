import { defineStore } from 'pinia';
import { UserInfo } from '@/types/user';

export const useUser = defineStore({
	id: 'user',
	state: () => ({
		userInfo: <UserInfo>{},
		balance: <number>0
	}),
	actions: {
		async getUserInfo() {
			const db = uniCloud.database();
			await db
				.collection('uni-id-users')
				.where(`_id==$cloudEnv_uid`)
				.field('_id,nickname,avatar_file,register_date,balance,phone')
				.get({ getOne: true })
				.then(res => {
					Object.assign(this.userInfo, res.result.data);
				})
				.catch(() => {
					uni.navigateTo({
						url:
							'/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=weixin'
					});
				});
		},
		async getBalance() {
			const db = uniCloud.database();
			await db
				.collection('balance')
				.where(`user_id=='${this.userId}'`)
				.get()
				.then(res => {
					this.balance = 0;
					res.result.data.forEach((item: { money: number }) => {
						this.balance += item.money;
					});
				});
		}
	},
	getters: {
		userId: state => {
			return state.userInfo._id;
		}
	}
});
