import clsx from 'clsx';
import Sheet from '../Sheet/Sheet';
import { IDrawerComponent } from './Drawer.interface';
import styles from './Drawer.module.css';

const Drawer = ({
	className,
	direction = 'column',
	children,
}: IDrawerComponent) => {
	return (
		<Sheet direction={direction} className={clsx(className, styles.drawer)}>
			{children}
		</Sheet>
	);
};

export default Drawer;
