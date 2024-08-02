import coinsimg from '@/assets/images/coins.png';
import clsx from 'clsx';
import Button from '../../../ui/Button/Button';
import Drawer from '../../../ui/Drawer/Drawer';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './DailyRewardDrawer.module.css';

const DailyRewardDrawer = () => {
	return (
		<Drawer color="lighter">
			<Title className={styles.title}>Ваша ежедневная награда</Title>
			<Text className={styles.text}>
				Получайте монеты за ежедневный вход в игру без пропусков. Необходимо
				нажимать кнопку «Забрать» каждый день, иначе счетчик дней начнёт отсчёт
				заново
			</Text>
			<div className={styles.grid}>
				<div className={clsx(styles.item, styles.received)}>
					<div className={styles.day}>День 1</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>Получено</div>
				</div>
				<div className={clsx(styles.item, styles.received)}>
					<div className={styles.day}>День 2</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>Получено</div>
				</div>
				<div className={clsx(styles.item, styles.current)}>
					<div className={styles.day}>День 3</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>2,5К</div>
				</div>
				<div className={clsx(styles.item, styles.disabled)}>
					<div className={styles.day}>День 4</div>
					<img src={coinsimg} alt="" className={styles.img} />
					<div className={styles.status}>5К</div>
				</div>
			</div>
			<Button>Забрать</Button>
		</Drawer>
	);
};

export default DailyRewardDrawer;
