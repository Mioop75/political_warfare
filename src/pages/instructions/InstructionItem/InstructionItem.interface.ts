import { CSSProperties, Dispatch, ReactNode, SetStateAction } from 'react';

export interface IInstructionItemComponent {
	image: string;
	imgStyles?: CSSProperties;
	bgImg?: string;
	title: string;
	description: string;
	additionItem: ReactNode;
	selectedInstruction: number;
	setSelectedInstruction: Dispatch<SetStateAction<number>>;
}
