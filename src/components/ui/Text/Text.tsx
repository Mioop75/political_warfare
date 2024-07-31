import clsx from 'clsx';
import { ITextComponent } from './Text.interface';
import styles from './Text.module.css';

const Text = ({ className, color = 'white', children }: ITextComponent) => {
	return (
		<div
			className={clsx(className, styles.text, {
				[styles.gray]: color === 'gray',
				[styles.gradientBlue]: color === 'gradient-blue',
			})}
		>
			{children}
		</div>
	);
};

export default Text;
