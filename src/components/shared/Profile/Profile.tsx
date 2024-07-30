import Avatar from '../Avatar/Avatar';
import Burger from '../Burger/Burger';
import LevelBar from '../LevelBar/LevelBar';
import ProfitWithTitle from '../ProfitWithTitle/ProfitWithTitle';
import styles from './Profile.module.css';

const Profile = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.firstItem}>
				<Avatar className={styles.avatar} />
				<LevelBar />
			</div>
			<ProfitWithTitle
				className={styles.middleItem}
				title="Прибыль в час"
				count={'0'}
			/>
			<Burger />
		</div>
	);
};

export default Profile;
