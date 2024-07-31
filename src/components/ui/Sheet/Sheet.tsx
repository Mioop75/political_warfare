import clsx from 'clsx';
import { ISheetComponent } from './Sheet.interface';
import styles from './Sheet.module.css';

const Sheet = ({
	className,
	direction = 'row',
	color = 'dark',
	children,
}: ISheetComponent) => {
	return (
		<div
			className={clsx(className, styles.sheet, {
				[styles.dark]: color === 'dark',
				[styles.lighter]: color === 'lighter',
				[styles.row]: direction === 'row',
				[styles.column]: direction === 'column',
			})}
		>
			{children}
		</div>
	);
};

export default Sheet;
