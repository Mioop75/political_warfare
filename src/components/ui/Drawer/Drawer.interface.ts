import { PropsWithChildren } from 'react';

export interface IDrawerComponent extends PropsWithChildren {
	direction?: 'row' | 'column';
	className?: string;
}
