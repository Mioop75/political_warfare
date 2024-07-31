import rocketImg from '@/assets/images/rocket.png';
import Button from '../../../ui/Button/Button';
import Drawer from '../../../ui/Drawer/Drawer';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './IncreaseDrawer.module.css';

const IncreaseDrawer = () => {
	return (
		<Drawer className={styles.block}>
			<img src={rocketImg} alt="" className={styles.img} />
			<Title className={styles.title}>Увеличьте вашу прибыль</Title>
			<Text className={styles.text}>
				Перейдите в меню улучшений, чтобы увеличить прибыль в час
			</Text>
			<Button className={styles.btn}>Начать</Button>
		</Drawer>
	);
};

export default IncreaseDrawer;
