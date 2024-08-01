import CheckIcon from '@/assets/icons/check.svg';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import { Option as OptionType } from '../Select.interface';
import { IOptionComponent } from './Option.interface';
import styles from './Option.module.css';

const Option = ({ option, selected, onClick }: IOptionComponent) => {
	const handleClick =
		(clickedValue: OptionType): MouseEventHandler<HTMLLIElement> =>
		() => {
			onClick(clickedValue);
		};

	return (
		<li
			className={clsx(styles.option, { [styles.isSelected]: selected })}
			value={option.value}
			onClick={handleClick(option)}
		>
			<div>{option.title}</div>
			{selected && <img src={CheckIcon} alt="" />}
		</li>
	);
};

export default Option;
