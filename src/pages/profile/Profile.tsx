import lockIcon from '@/assets/icons/lock.svg';
import trump from '@/assets/images/trump/character_model_01.png';
import ArrowIcon from '../../components/shared/ArrowIcon/ArrowIcon';
import Burger from '../../components/shared/Burger/Burger';
import LevelBar from '../../components/shared/LevelBar/LevelBar';
import ProfitWithTitle from '../../components/shared/ProfitWithTitle/ProfitWithTitle';
import Button from '../../components/ui/Button/Button';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import styles from './Profile.module.css';

export default function ProfilePage() {
	return (
		<div className="container">
			<div className={styles.row}>
				<ArrowIcon direction="left" />
				<Text>Профиль</Text>
				<Burger />
			</div>
			<div className={styles.row}>
				<Text className={styles.user_name}>Имя пользователя</Text>
				<Text className={styles.days}>Дней в игре: 12</Text>
			</div>
			<Sheet>
				<ProfitWithTitle title="Прибыль в час" count="+300" />
				<ProfitWithTitle title="Деньги" count="15.3К" />
			</Sheet>
			<LevelBar min="0" max="30k" />
			<Button className={styles.btn}>Повысить уровень 20К</Button>
			<div className={styles.character}>
				<div className={styles.slider}>
					<ArrowIcon direction="left" />
					<img src={trump} alt="" className={styles.img} />
					<ArrowIcon />
				</div>
				<div className={styles.tabs}>
					<div className={styles.tabs_buttons}>
						<button className={styles['tabs_buttons-btn']}>
							Республиканцы
						</button>
						<button className={styles['tabs_buttons-btn']}>Демократы</button>
					</div>
					<div className={styles.tabs_items}>
						<div className={styles.tabs_item}>
							<img src={trump} alt="" className={styles['tabs_item-img']} />
							<img src={lockIcon} alt="" className={styles['tabs_item-lock']} />
						</div>
					</div>
					<Button className={styles.character_btn}>Выбрать</Button>
				</div>
			</div>
		</div>
	);
}
