import clsx from 'clsx';
import { ITitleComponent } from './Title.interface';
import styles from './Title.module.css';

const Title = ({ className, children }: ITitleComponent) => {
	return <h2 className={clsx(className, styles.title)}>{children}</h2>;
};

export default Title;
