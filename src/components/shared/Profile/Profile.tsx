import { Link } from 'react-router-dom';
import Sheet from '../../ui/Sheet/Sheet';
import Avatar from '../Avatar/Avatar';
import Burger from '../Burger/Burger';
import LevelBar from '../LevelBar/LevelBar';
import ProfitWithTitle from '../ProfitWithTitle/ProfitWithTitle';
import styles from './Profile.module.css';

const Profile = () => {
	return (
		<Sheet className={styles.profile}>
			<div className={styles.firstItem}>
				<Link to="/profile" className={styles.avatar}>
					<Avatar />
				</Link>
				<LevelBar />
			</div>
			<ProfitWithTitle
				className={styles.middleItem}
				title="Прибыль в час"
				count={'0'}
			/>
			<Burger />
		</Sheet>
	);
};

export default Profile;
