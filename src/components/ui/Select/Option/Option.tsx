import CheckIcon from '@/assets/icons/check.svg';
import clsx from 'clsx';
import { MouseEventHandler, useState } from 'react';
import { Option as OptionType } from '../Select.interface';
import { IOptionComponent } from './Option.interface';
import styles from './Option.module.css';

const Option = ({ option, onClick }: IOptionComponent) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleClick =
		(clickedValue: OptionType['value']): MouseEventHandler<HTMLLIElement> =>
		() => {
			onClick(clickedValue);
		};

	return (
		<li
			className={clsx(styles.option, { [styles.isSelected]: isSelected })}
			value={option.value}
			onClick={handleClick(option.value)}
		>
			<div>{option.title}</div>
			{isSelected && <img src={CheckIcon} alt="" />}
		</li>
	);
};

export default Option;
