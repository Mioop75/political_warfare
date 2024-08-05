import avatarImg from '@/assets/images/trump/character_model_01.svg';
import { Link } from 'react-router-dom';
import Sheet from '../../ui/Sheet/Sheet';
import Burger from '../Burger/Burger';
import ProfitWithTitle from '../ProfitWithTitle/ProfitWithTitle';
import styles from './Profile.module.css';

const Profile = () => {
	return (
		<Sheet className={styles.profile}>
			<div className={styles.firstItem}>
				<Link to="/profile" className={styles.avatar}>
					<img src={avatarImg} alt="" className={styles.avatar_img} />
					<div className={styles.avatar_level}>Ур.1</div>
					<div className={styles.bar}>
						<div className={styles.line} style={{ width: '50%' }}>
							50%
						</div>
					</div>
				</Link>
			</div>
			<ProfitWithTitle
				className={styles.middleItem}
				title="Прибыль в час"
				count={'0'}
			/>
			<ProfitWithTitle
				className={styles.money}
				title="Деньги"
				count={'163.5К'}
			/>
			<Burger />
		</Sheet>
	);
};

export default Profile;
