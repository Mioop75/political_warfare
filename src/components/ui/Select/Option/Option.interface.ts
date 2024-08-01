import { Option } from '../Select.interface';

export interface IOptionComponent {
	option: Option;
	selected?: boolean;
	onClick: (value: Option) => void;
}
