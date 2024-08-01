import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IInstructionItemComponent {
	image: string;
	title: string;
	description: string;
	additionItem: ReactNode;
	selectedInstruction: number;
	setSelectedInstruction: Dispatch<SetStateAction<number>>;
}
