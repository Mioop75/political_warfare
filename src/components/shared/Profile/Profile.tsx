import avatarImg from '@/assets/images/trump/character_model_01.svg';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useDispatch';
import { RootState } from '../../../store';
import Sheet from '../../ui/Sheet/Sheet';
import Burger from '../Burger/Burger';
import ProfitWithTitle from '../ProfitWithTitle/ProfitWithTitle';
import styles from './Profile.module.css';

const Profile = () => {
	const { level, coins } = useAppSelector(
		(state: RootState) => state.user.user
	);

	return (
		<Sheet className={styles.profile}>
			<div className={styles.firstItem}>
				<Link to="/profile" className={styles.avatar}>
					<img src={avatarImg} alt="" className={styles.avatar_img} />
					<div className={styles.avatar_level}>Ур.{level}</div>
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
				count={String(coins)}
			/>
			<Burger />
		</Sheet>
	);
};

export default Profile;
