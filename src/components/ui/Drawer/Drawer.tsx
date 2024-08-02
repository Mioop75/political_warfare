import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useAppDispatch } from '../../../hooks/useSelector';
import { closeAllDrawers } from '../../../store/drawer/drawer.slice';
import Sheet from '../Sheet/Sheet';
import { IDrawerComponent } from './Drawer.interface';
import styles from './Drawer.module.css';

const Drawer = ({
	className,
	direction = 'column',
	color = 'dark',
	children,
}: IDrawerComponent) => {
	const dispatch = useAppDispatch();
	const ref = useOutsideClick(() => dispatch(closeAllDrawers()));

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -10, opacity: 0 }}
				ref={ref}
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
