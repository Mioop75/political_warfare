import coinIcon from '@/assets/icons/coin-icon.svg';
import energyIcon from '@/assets/icons/energy.svg';
import cabinetImg from '@/assets/images/cabinet.jpg';
import img1 from '@/assets/images/mining-logo.png';
import img2 from '@/assets/images/profit-icon.png';
import trumpCharacter from '@/assets/images/trump/character_model_01.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../components/shared/Profile/Profile';
import { useAppSelector } from '../../hooks/useDispatch';
import { RootState } from '../../store';
import styles from './Home.module.css';
import Mining from './Mining/Mining';

export default function HomePage() {
	const [tab, setTab] = useState('main');
	const { coins } = useAppSelector((state: RootState) => state.user.user);

	return (
		<div className={styles.home}>
			<Profile />
			{tab === 'mining' ? (
				<Mining />
			) : (
				<>
					<img src={cabinetImg} className={styles.bg} />
					<div className={styles.coins}>
						<img src={coinIcon} alt="" className={styles.coins_img} />
						<div className={styles.coins_text}>{coins}</div>
					</div>
					<div className={styles.row}>
						<button className={styles.item} onClick={() => setTab('mining')}>
							<img src={img1} alt="" className={styles.item_img} />
							<div className={styles.item_text}>Добыча</div>
						</button>
						<img src={trumpCharacter} alt="" className={styles.character} />

						<Link to={'/improves'} className={styles.item}>
							<img src={img2} alt="" className={styles.item_img} />
							<div className={styles.item_text}>Добыча</div>
						</Link>
					</div>
					<div className={styles.energy}>
						<img src={energyIcon} alt="" className={styles.energy_img} />
						<div className={styles.energy_text}>999/1000</div>
					</div>
				</>
			)}
		</div>
	);
}
