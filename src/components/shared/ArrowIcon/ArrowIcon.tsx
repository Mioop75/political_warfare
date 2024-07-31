import clsx from 'clsx';
import { IArrowIcon } from './ArrowIcon.interface';
import styles from './ArrowIcon.module.css';

const ArrowIcon = ({ className, direction = 'right' }: IArrowIcon) => {
	return (
		<>
			{direction === 'right' ? (
				<svg
					className={clsx(className, styles.arrow)}
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.45825 3.4L12.8916 8.83333C13.5333 9.475 13.5333 10.525 12.8916 11.1667L7.45825 16.6"
						strokeWidth="2"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			) : (
				<svg
					className={clsx(className, styles.arrow)}
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.5417 3.40001L7.10832 8.83334C6.46666 9.47501 6.46666 10.525 7.10832 11.1667L12.5417 16.6"
						strokeWidth="2"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</>
	);
};

export default ArrowIcon;
