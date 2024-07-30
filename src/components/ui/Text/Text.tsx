import clsx from 'clsx';
import { ITextComponent } from './Text.interface';
import styles from './Text.module.css';

const Text = ({ className, children }: ITextComponent) => {
	return <div className={clsx(className, styles.text)}>{children}</div>;
};

export default Text;
