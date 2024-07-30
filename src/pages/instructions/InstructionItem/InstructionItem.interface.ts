import { ReactNode } from 'react';

export interface IInstructionItemComponent {
	image: string;
	title: string;
	description: string;
	additionItem: ReactNode;
}
