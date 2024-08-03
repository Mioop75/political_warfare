import imgBody1 from '@/assets/images/improves/img-body-1.png';
import imgBody2 from '@/assets/images/improves/img-body-2.png';
import imgBody3 from '@/assets/images/improves/img-body-3.png';
import imgBody4 from '@/assets/images/improves/img-body-4.png';

export const sections: sectionType[] = [
	{
		title: 'Тело',
		products: [
			{
				id: 1,
				img: imgBody1,
				title: 'Спорт',
				sum: '3.2K',
				level: 2,
				coins: '+350',
				disabled: false,
			},
			{
				id: 2,
				img: imgBody2,
				title: 'Спорт',
				sum: '3.2K',
				level: 2,
				coins: '+350',
				disabled: true,
			},
			{
				id: 3,
				img: imgBody3,
				title: 'Спорт',
				sum: '3.2K',
				level: 2,
				coins: '+350',
				disabled: true,
			},
			{
				id: 4,
				img: imgBody4,
				title: 'Спорт',
				sum: '3.2K',
				level: 2,
				coins: '+350',
				disabled: true,
			},
		],
	},
];

export type sectionType = {
	title: string;
	products: ProductType[];
};

export type ProductType = {
	id: number;
	img: string;
	title: string;
	sum: string;
	level: number;
	coins: string;
	disabled: boolean;
};
