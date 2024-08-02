import coinIcon from '@/assets/icons/coin-icon.svg';
import energyIcon from '@/assets/icons/energy.svg';
import bgImg from '@/assets/images/bg-home.png';
import goldCoin from '@/assets/images/gold-coin.png';
import trumpCharacter from '@/assets/images/trump/character_model_01.svg';
import Profile from '../../components/shared/Profile/Profile';
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
			<div className={styles.click}>
				<img src={trumpCharacter} alt="" className={styles.click_character} />
				<img
					src={goldCoin}
					alt=""
					className={styles.click_bg}
					draggable="false"
				/>
				<div className={styles.click_text}>Нажми на меня</div>
			</div>
			<div className={styles.energy}>
				<img src={energyIcon} alt="" className={styles.energy_img} />
				<div className={styles.energy_text}>999/1000</div>
			</div>
		</div>
	);
}
