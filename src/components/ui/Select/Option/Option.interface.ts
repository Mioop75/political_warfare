import { Option } from '../Select.interface';

export interface IOptionComponent {
	option: Option;
	onClick: (value: Option) => void;
}
