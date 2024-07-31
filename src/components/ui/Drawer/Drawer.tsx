import clsx from 'clsx';
import { IDrawerComponent } from './Drawer.interface';
import styles from './Drawer.module.css';

const Drawer = ({ className, children }: IDrawerComponent) => {
	return <div className={clsx(className, styles.drawer)}>{children}</div>;
};

export default Drawer;
