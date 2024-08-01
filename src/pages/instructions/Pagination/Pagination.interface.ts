import { Dispatch, SetStateAction } from 'react';
import { instructionType } from '../instructions.const';

export interface IPaginationComponent {
	paginationActive: number;
	items: Pick<instructionType, 'id'>[];
	setSelectedInstruction: Dispatch<SetStateAction<number>>;
}
