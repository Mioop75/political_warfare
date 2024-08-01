export interface ISelectComponent {
	options: Option[];
	placeholder?: string;
	mode?: 'rows' | 'cells';
	selected?: Option;
	className?: string;
	onChange?: (selected: Option) => void;
	onClose?: () => void;
}

export type Option = { title: string; value: string };
