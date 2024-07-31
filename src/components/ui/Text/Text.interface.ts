import { PropsWithChildren } from 'react';

export interface ITextComponent extends PropsWithChildren {
	color?: 'white' | 'gray' | 'gradient-blue';
	className?: string;
}
