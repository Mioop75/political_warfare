import { PropsWithChildren } from 'react';

export interface ITitleComponent extends PropsWithChildren {
	align?: 'left' | 'center' | 'right';
	className?: string;
}
