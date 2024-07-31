import img1 from '@/assets/images/improves/img-1.png';
import Burger from '../../components/shared/Burger/Burger';
import Coins from '../../components/shared/Coins/Coins';
import ProfitWithTitle from '../../components/shared/ProfitWithTitle/ProfitWithTitle';
import Button from '../../components/ui/Button/Button';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import styles from './Improves.module.css';

export default function ImprovesPage() {
	return (
		<div className={'container'}>
			<div className={styles.row}>
				<Text>Улучшения</Text>
				<Burger />
			</div>
			<Sheet className={styles.row}>
				<ProfitWithTitle title="Прибыль в час" count="+300" />
				<ProfitWithTitle title="Деньги" count="1.5К" />
			</Sheet>
			<div>
				<Text className={styles.title}>Тело</Text>
				<div>
					<Sheet direction="column" className={styles.item}>
						<div className={styles.item_row}>
							<div className={styles.item_name}>
								<img src={img1} alt="" />
								<Text>Спорт</Text>
							</div>
							<Button className={styles.item_btn} disabled>
								Купить 3.2K
							</Button>
						</div>
						<div className={styles.item_row}>
							<div className={styles.item_text}>
								Необходимый уровень: <span>2</span>
							</div>
							<Coins count="+350" />
						</div>
					</Sheet>
				</div>
			</div>
		</div>
	);
}
