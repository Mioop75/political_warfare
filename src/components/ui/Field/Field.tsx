import clsx from 'clsx';
import { IFieldComponent } from './Field.interface';
import styles from './Field.module.css';

const Field = ({
	className,
	type = 'text',
	placeholder,
	...rest
}: IFieldComponent) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
			className={clsx(className, styles.field)}
			{...rest}
		/>
	);
};

export default Field;
