import { PropsWithChildren } from 'react'

export interface ISheetComponent extends PropsWithChildren {
	color?: 'dark' | 'lighter';
	direction?: 'column' | 'row';
	className?: string;
}
