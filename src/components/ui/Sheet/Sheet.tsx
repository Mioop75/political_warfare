import clsx from 'clsx';
import { ISheetComponent } from './Sheet.interface';
import styles from './Sheet.module.css';

const Sheet = ({ className, children }: ISheetComponent) => {
	return <div className={clsx(className, styles.sheet)}>{children}</div>;
};

export default Sheet;
