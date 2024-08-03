import coinIcon from '@/assets/icons/coin-icon.svg';
import energyIcon from '@/assets/icons/energy.svg';
import bgImg from '@/assets/images/bg-home.png';
import Profile from '../../components/shared/Profile/Profile';
import Character from './Character/Character';
import styles from './Home.module.css';

export default function HomePage() {
	return (
		<div className={styles.home}>
			<img src={bgImg} alt="" className={styles.bgImage} />
			<Profile />
			<div className={styles.coins}>
				<img src={coinIcon} alt="" className={styles.coins_img} />
				<div className={styles.coins_text}>120.50</div>
			</div>
			<Character />
			<div className={styles.energy}>
				<img src={energyIcon} alt="" className={styles.energy_img} />
				<div className={styles.energy_text}>999/1000</div>
			</div>
		</div>
	);
}
