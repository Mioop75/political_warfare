import Button from '../../ui/Button/Button';
import styles from './Burger.module.css';

const Burger = () => {
	return (
		<div className={styles.lastItem}>
			<Button className={styles.burger}>
				<div></div>
			</Button>
		</div>
	);
};

export default Burger;
