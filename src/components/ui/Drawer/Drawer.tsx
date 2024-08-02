import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Sheet from '../Sheet/Sheet';
import { IDrawerComponent } from './Drawer.interface';
import styles from './Drawer.module.css';

const Drawer = ({
	className,
	direction = 'column',
	color = 'dark',
	children,
}: IDrawerComponent) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -10, opacity: 0 }}
			>
				<Sheet
					color={color}
					direction={direction}
					className={clsx(className, styles.drawer)}
				>
					{children}
				</Sheet>
			</motion.div>
		</AnimatePresence>
	);
};

export default Drawer;
