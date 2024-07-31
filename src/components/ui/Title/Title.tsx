import clsx from 'clsx';
import { ITitleComponent } from './Title.interface';
import styles from './Title.module.css';

const Title = ({ className, align = 'center', children }: ITitleComponent) => {
	return (
		<h2
			className={clsx(className, styles.title, {
				[styles.left]: align === 'left',
				[styles.center]: align === 'center',
				[styles.right]: align === 'right',
			})}
		>
			{children}
		</h2>
	);
};

export default Title;
