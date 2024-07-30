export interface ISelectComponent {
	options: Option[];
	placeholder?: string;
	mode?: 'rows' | 'cells';
	selected?: string;
	className?: string;
	onChange?: (selected: Option['value']) => void;
	onClose?: () => void;
}

export type Option = { title: string; value: string };
