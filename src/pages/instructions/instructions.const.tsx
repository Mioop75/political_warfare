import instruction1 from '@/assets/images/instructions/instruction-1.png';
import instruction2 from '@/assets/images/instructions/instruction-2.png';
import instruction3 from '@/assets/images/instructions/instruction-3.png';
import instruction4 from '@/assets/images/instructions/instruction-4.png';
import instruction5 from '@/assets/images/instructions/instruction-5.png';
import instruction6 from '@/assets/images/instructions/instruction-6.png';
import instruction7 from '@/assets/images/instructions/instruction-7.png';
import instruction8 from '@/assets/images/instructions/instruction-8.png';

import { CSSProperties, ReactNode } from 'react';
import SelectLanguage from '../../components/shared/SelectLanguage/SelectLanguage';

export const instructions: instructionType[] = [
	{
		id: 1,
		title: 'Нажимайте и зарабатывайте',
		description: 'Выберите предпочитаемый язык из списка',
		additionitem: <SelectLanguage />,
		imgStyles: {
			width: '255px',
			height: '552px',
		},
		image: instruction1,
	},
	{
		id: 2,
		title: 'Нажимайте и зарабатывайте',
		description:
			'У кандидатов есть бюджет на выборы, выбирая кандидата, Вы зарабатываете ему бюджет для победы. У какого кандидата больше бюджет, тот и победит на выборах!',
		imgStyles: {
			width: '335px',
			height: '361px',
			boxShadow: 'none',
			top: '3%',
			bottom: 0,
		},
		image: instruction2,
	},
	{
		id: 3,
		title: 'Нажимайте и зарабатывайте',
		description:
			'Вы можете нажимать на экран и зарабатывать монеты, применяя при этом продуманные стратегии',
		image: instruction3,
		imgStyles: {
			width: '255px',
			height: '552px',
		},
	},
	{
		id: 4,
		title: 'Нажимайте и зарабатывайте',
		description: 'Прокачайте Вашего персонажа и пройдите весь путь',
		image: instruction4,
		imgStyles: {
			width: '335px',
			height: '389px',
			boxShadow: 'none',
			bottom: '40%',
		},
	},
	{
		id: 5,
		title: 'Нажимайте и зарабатывайте',
		description:
			'Ваш опыт увеличивается с каждым улучшением. По мере повышения уровня растёт ваша прибыль за каждый тап и открываются новые возможности для улучшений',
		image: instruction5,
		imgStyles: {
			width: '375px',
			height: '788px',
			bottom: '-2%',
			boxShadow: 'none',
		},
	},
	{
		id: 6,
		title: 'Нажимайте и зарабатывайте',
		description:
			'Увеличивайте свой доход, покупая улучшения для Вашего персонажа',
		image: instruction6,
		imgStyles: {
			width: '255px',
			height: '552px',
		},
	},
	{
		id: 7,
		title: 'Нажимайте и зарабатывайте',
		description:
			'Приглашайте друзей и получайте бонусы вместе. Вы и ваш друг получите монеты',
		image: instruction7,
		imgStyles: {
			width: '255px',
			height: '552px',
		},
	},
	{
		id: 8,
		title: 'Нажимайте и зарабатывайте',
		description:
			'Используйте монеты для получения AirDrop при листинге токенов',
		image: instruction8,
		imgStyles: {
			width: '255px',
			height: '552px',
		},
	},
];

export type instructionType = {
	id: number;
	title: string;
	description: string;
	image: string;
	imgStyles?: CSSProperties;
	additionitem?: ReactNode;
};
