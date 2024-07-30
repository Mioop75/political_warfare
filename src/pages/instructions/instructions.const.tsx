import instruction1 from '@/assets/images/instructions/instruction-1.png';
import instruction2 from '@/assets/images/instructions/instruction-2.png';
import instruction3 from '@/assets/images/instructions/instruction-3.png';
import instruction4 from '@/assets/images/instructions/instruction-4.png';
import instruction5 from '@/assets/images/instructions/instruction-5.png';
import instruction6 from '@/assets/images/instructions/instruction-6.png';
import instruction7 from '@/assets/images/instructions/instruction-7.png';
import instruction8 from '@/assets/images/instructions/instruction-8.png';

import { ReactNode } from 'react';
import Select from '../../components/ui/Select/Select';

const languages = [
	{ title: 'Русский', value: 'rus' },
	{ title: 'English', value: 'eng' },
];

export const instructions: instructionType[] = [
	{
		title: 'Нажимайте и зарабатывайте',
		description: 'Выберите предпочитаемый язык из списка',
		additionitem: <Select options={languages} mode="rows" selected="rus" />,
		image: instruction1,
	},
	{
		title: 'Нажимайте и зарабатывайте',
		description:
			'У кандидатов есть бюджет на выборы, выбирая кандидата, Вы зарабатываете ему бюджет для победы. У какого кандидата больше бюджет, тот и победит на выборах!',
		image: instruction2,
	},
	{
		title: 'Нажимайте и зарабатывайте',
		description:
			'Вы можете нажимать на экран и зарабатывать монеты, применяя при этом продуманные стратегии',
		image: instruction3,
	},
	{
		title: 'Нажимайте и зарабатывайте',
		description: 'Прокачайте Вашего персонажа и пройдите весь путь',
		image: instruction4,
	},
	{
		title: 'Нажимайте и зарабатывайте',
		description:
			'Ваш опыт увеличивается с каждым улучшением. По мере повышения уровня растёт ваша прибыль за каждый тап и открываются новые возможности для улучшений',
		image: instruction5,
	},
	{
		title: 'Нажимайте и зарабатывайте',
		description:
			'Увеличивайте свой доход, покупая улучшения для Вашего персонажа',
		image: instruction6,
	},
	{
		title: 'Нажимайте и зарабатывайте',
		description:
			'Приглашайте друзей и получайте бонусы вместе. Вы и ваш друг получите монеты',
		image: instruction7,
	},
	{
		title: 'Нажимайте и зарабатывайте',
		description:
			'Используйте монеты для получения AirDrop при листинге токенов',
		image: instruction8,
	},
];

type instructionType = {
	title: string;
	description: string;
	image: string;
	additionitem?: ReactNode;
};
