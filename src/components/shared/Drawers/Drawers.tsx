import { useAppSelector } from '../../../hooks/useDispatch';
import { RootState } from '../../../store';
import DailyRewardDrawer from './DailyRewardDrawer/DailyRewardDrawer';
import IncreaseDrawer from './IncreaseDrawer/IncreaseDrawer';
import SettingsDrawer from './SettingsDrawer/SettingsDrawer';

const Drawers = () => {
	const { nameDrawer } = useAppSelector((state: RootState) => state.drawer);

	return (
		<>
			{nameDrawer === 'dailReward' && <DailyRewardDrawer />}
			{nameDrawer === 'increase' && <IncreaseDrawer />}
			{nameDrawer === 'settings' && <SettingsDrawer />}
		</>
	);
};

export default Drawers;
