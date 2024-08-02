import camala1 from '@/assets/images/camala/character_model_01.svg';
import camala2 from '@/assets/images/camala/character_model_02.svg';
import camala3 from '@/assets/images/camala/character_model_03.svg';
import camala4 from '@/assets/images/camala/character_model_04.svg';
import camala5 from '@/assets/images/camala/character_model_05.svg';
import camala6 from '@/assets/images/camala/character_model_06.svg';
import trump1 from '@/assets/images/trump/character_model_01.svg';
import trump2 from '@/assets/images/trump/character_model_02.svg';
import trump3 from '@/assets/images/trump/character_model_03.svg';
import trump4 from '@/assets/images/trump/character_model_04.svg';
import trump5 from '@/assets/images/trump/character_model_05.svg';
import trump6 from '@/assets/images/trump/character_model_06.svg';

export const charactersImage: ITab[] = [
	{
		id: 1,
		characters: [
			{
				id: 1,
				img: trump1,
				lock: false,
			},
			{
				id: 2,
				img: trump2,
				lock: true,
			},
			{
				id: 3,
				img: trump3,
				lock: true,
			},
			{
				id: 4,
				img: trump4,
				lock: true,
			},
			{
				id: 5,
				img: trump5,
				lock: true,
			},
			{
				id: 6,
				img: trump6,
				lock: true,
			},
		],
	},
	{
		id: 2,
		characters: [
			{
				id: 1,
				img: camala1,
				lock: false,
			},
			{
				id: 2,
				img: camala2,
				lock: true,
			},
			{
				id: 3,
				img: camala3,
				lock: true,
			},
			{
				id: 4,
				img: camala4,
				lock: true,
			},
			{
				id: 5,
				img: camala5,
				lock: true,
			},
			{
				id: 6,
				img: camala6,
				lock: true,
			},
		],
	},
];

export interface ITab {
	id: number;
	characters: ICharacter[];
}

export interface ICharacter {
	id: number;
	img: string;
	lock: boolean;
}
