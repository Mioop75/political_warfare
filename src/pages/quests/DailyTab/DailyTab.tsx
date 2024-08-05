import img1 from '@/assets/images/quests/img-1.png';
import ArrowIcon from '../../../components/shared/ArrowIcon/ArrowIcon';
import Coins from '../../../components/shared/Coins/Coins';
import Sheet from '../../../components/ui/Sheet/Sheet';
import Text from '../../../components/ui/Text/Text';
import Title from '../../../components/ui/Title/Title';
import styles from './DailyTab.module.css';

const DailyTab = () => {
	return (
		<div>
			<Title className={styles.title}>Не хватает монет?</Title>
			<Text color="gray" className={styles.text}>
				Можно натапать N монет в зависимости от уровня вашей энергии
			</Text>
			<div className={styles.column}>
				<Sheet className={styles.item}>
					<div className={styles.item_row}>
						<img src={img1} alt="" className={styles.item_img} />
						<div>
							<Text className={styles.item_text}>Если энергии ≤ 2000</Text>
							<Coins count="+28 000" />
						</div>
					</div>
					<ArrowIcon />
				</Sheet>
			</div>
		</div>
	);
};

export default DailyTab;
