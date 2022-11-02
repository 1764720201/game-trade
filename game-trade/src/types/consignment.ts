export type Range = {
	value: number;
	text: string;
};
//图片
export type Image = {
	extname: string;
	fileID: string;
	fileType: string;
	image: { height: number; location: string; width: number }[];
	name: string;
	path: string;
	size: number;
	url: string;
};
//详情
export type Detail = {
	server?: string;
	region: string;
	price: number;
	game: string;
	email?: string;
	materials?: string;
	technology?: string;
	user_id?: string;
	create_time?: number;
	_id?: string;
	autonym?: string;
	qualification?: string;
	amount?: number;
	rare?: string;
	otherBright?: string;
	accountInfo?: Image[];
	screenshot?: Image[];
	emailImage?: Image[];
	level?: string;
	skin?: string;
	dazzling?: string;
	grading?: string;
	forestall?: string;
	legend?: string;
	campsite?: string;
	homepage?: Image[];
	national?: string;
	state?: number;
};
