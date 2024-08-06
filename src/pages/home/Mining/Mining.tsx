import coinIcon from '@/assets/icons/coin-icon.svg';
import energyIcon from '@/assets/icons/energy.svg';
import bgImg from '@/assets/images/bg-home.png';
import Character from './Character/Character';
import styles from './Mining.module.css';

const Mining = () => {
	return (
		<div className={styles.bg}>
			<img src={bgImg} alt="" className={styles.bgImage} />
			<div className={styles.content}>
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
		</div>
	);
};

export default Mining;
