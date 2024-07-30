import Coins from '../../components/shared/Coins/Coins';
import Profile from '../../components/shared/Profile/Profile';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import styles from './TableLeaders.module.css';

export default function TableLeadersPage() {
	return (
		<div className="container">
			<Profile />
			<Title className={styles.title}>Таблица лидеров</Title>
			<Text className={styles.text}>Рейтинг основан на прибыли в час</Text>
			<div className={styles.column}>
				<div className={styles.item}>
					<div className={styles.item_firstItem}>
						<div className={styles.item_num}>1</div>
						<div className={styles.name}>Имя пользователя</div>
					</div>
					<Coins count="+65.5М" />
				</div>
			</div>
		</div>
	);
}
