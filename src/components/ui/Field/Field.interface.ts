import { HTMLAttributes } from 'react';

export interface IFieldComponent extends HTMLAttributes<HTMLInputElement> {
	placeholder: string;
	type: string;
}
