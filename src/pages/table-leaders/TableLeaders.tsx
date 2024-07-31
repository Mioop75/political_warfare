import Coins from '../../components/shared/Coins/Coins';
import Profile from '../../components/shared/Profile/Profile';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import styles from './TableLeaders.module.css';

export default function TableLeadersPage() {
	return (
		<div className={styles.tableLeaders}>
			<Profile />
			<Title className={styles.title}>Таблица лидеров</Title>
			<Text className={styles.text}>Рейтинг основан на прибыли в час</Text>
			<div className={styles.column}>
				<Sheet className={styles.item}>
					<div className={styles.item_firstItem}>
						<div className={styles.item_num}>1</div>
						<div className={styles.name}>Имя пользователя</div>
					</div>
					<Coins count="+65.5М" />
				</Sheet>
				<Sheet className={styles.item}>
					<div className={styles.item_firstItem}>
						<div className={styles.item_num}>2</div>
						<div className={styles.name}>Имя пользователя</div>
					</div>
					<Coins count="+65.5М" />
				</Sheet>
				<Sheet className={styles.item}>
					<div className={styles.item_firstItem}>
						<div className={styles.item_num}>3</div>
						<div className={styles.name}>Имя пользователя</div>
					</div>
					<Coins count="+65.5М" />
				</Sheet>
				<Sheet className={styles.item}>
					<div className={styles.item_firstItem}>
						<div className={styles.item_num}>4</div>
						<div className={styles.name}>Имя пользователя</div>
					</div>
					<Coins count="+65.5М" />
				</Sheet>
				<Sheet className={styles.item}>
					<div className={styles.item_firstItem}>
						<div className={styles.item_num}>5</div>
						<div className={styles.name}>Имя пользователя</div>
					</div>
					<Coins count="+65.5М" />
				</Sheet>
				<Sheet className={styles.item}>
					<div className={styles.item_firstItem}>
						<div className={styles.item_num}>6</div>
						<div className={styles.name}>Имя пользователя</div>
					</div>
					<Coins count="+65.5М" />
				</Sheet>
			</div>
		</div>
	);
}
