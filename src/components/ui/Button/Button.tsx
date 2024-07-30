import clsx from 'clsx';
import { IButtonComponent } from './Button.interface';
import styles from './Button.module.css';

const Button = ({ children, className, ...rest }: IButtonComponent) => {
	return (
		<button className={clsx(className, styles.btn)} {...rest}>
			{children}
		</button>
	);
};

export default Button;
