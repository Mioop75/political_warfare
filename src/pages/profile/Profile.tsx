import { Link } from 'react-router-dom';
import ArrowIcon from '../../components/shared/ArrowIcon/ArrowIcon';
import Burger from '../../components/shared/Burger/Burger';
import Drawers from '../../components/shared/Drawers/Drawers';
import LevelBar from '../../components/shared/LevelBar/LevelBar';
import Modals from '../../components/shared/Modals/Modals';
import ProfitWithTitle from '../../components/shared/ProfitWithTitle/ProfitWithTitle';
import SelectCharacter from '../../components/shared/SelectCharacter/SelectCharacter';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import styles from './Profile.module.css';

export default function ProfilePage() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.row}>
					<Link to="/">
						<ArrowIcon direction="left" />
					</Link>
					<Text>Профиль</Text>
					<Burger />
				</div>
				<div className={styles.row}>
					<Text>Имя пользователя</Text>
					<Text color="gradient-blue">Дней в игре: 12</Text>
				</div>
				<Sheet className={styles.profit}>
					<ProfitWithTitle title="Прибыль в час" count="+300" />
					<ProfitWithTitle title="Деньги" count="15.3К" />
				</Sheet>
				<LevelBar className={styles.bar} min="0" max="30k" />
			</div>
			<SelectCharacter />
			<Modals />
			<Drawers />
		</>
	);
}
