import clsx from 'clsx';
import { motion } from 'framer-motion';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import Option from './Option/Option';
import { ISelectComponent, Option as OptionType } from './Select.interface';
import styles from './Select.module.css';

const menuVariants = {
	open: (height = 'auto') => ({
		display: 'block',
		height,
		opacity: 1,
		transition: {
			type: 'spring',
		},
	}),
	closed: {
		display: 'none',
		height: 0,
		opacity: 0,
		transition: {
			type: 'spring',
		},
	},
};

const Select = ({
	options,
	selected,
	placeholder,
	mode,
	className,
	onChange,
	onClose,
}: ISelectComponent) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (selected) setSelectedOption(selected);
	}, [selected]);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				isOpen && onClose?.();
				setIsOpen(false);
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [isOpen, onClose]);

	const handleOptionClick = (value: OptionType) => {
		setIsOpen(false);
		setSelectedOption(value);
		onChange?.(value);
	};

	const handlePlaceHolderClick: MouseEventHandler<HTMLButtonElement> = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<div
			className={clsx(className, styles.wrapper)}
			data-is-active={isOpen}
			data-mode={mode}
			ref={rootRef}
		>
			<div className={styles.selectBtn_wrapper}>
				<div className={styles.btn_wrapper}>
					<button className={styles.btn} onClick={handlePlaceHolderClick}>
						<div className={styles.arrow}>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.16665 7.5L9.64643 12.9798C9.84169 13.175 10.1583 13.175 10.3535 12.9798L15.8333 7.5"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</div>
						<div className={styles.placeholder}>
							{selectedOption?.title || placeholder}
						</div>
					</button>
				</div>
			</div>
			<motion.nav initial={isOpen} animate={isOpen ? 'open' : 'closed'}>
				<motion.ul className={styles.select} variants={menuVariants}>
					{options.map(option =>
						option.value === selectedOption?.value ? (
							<Option
								key={option.value}
								option={option}
								selected={true}
								onClick={handleOptionClick}
							/>
						) : (
							<Option
								key={option.value}
								option={option}
								onClick={handleOptionClick}
							/>
						)
					)}
				</motion.ul>
			</motion.nav>
		</div>
	);
};

export default Select;
