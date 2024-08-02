import { useAppDispatch } from '../../../hooks/useSelector';
import { openDrawer } from '../../../store/drawer/drawer.slice';
import Button from '../../ui/Button/Button';
import styles from './Burger.module.css';

const Burger = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.lastItem}>
			<Button
				className={styles.burger}
				onClick={() => dispatch(openDrawer('settings'))}
			>
				<div></div>
			</Button>
		</div>
	);
};

export default Burger;
