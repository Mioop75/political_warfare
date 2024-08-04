import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/useSelector';
import { closeAllDrawers } from '../../../../store/drawer/drawer.slice';
import Drawer from '../../../ui/Drawer/Drawer';
import Sheet from '../../../ui/Sheet/Sheet';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import ArrowIcon from '../../ArrowIcon/ArrowIcon';
import SelectLanguage from '../../SelectLanguage/SelectLanguage';
import styles from './SettingsDrawer.module.css';

const SettingsDrawer = () => {
	const dispatch = useAppDispatch();

	return (
		<Drawer className={styles.block}>
			<Title align="center" className={styles.title}>
				Настройки
			</Title>
			<div className={styles.column}>
				<SelectLanguage />
				<Link to="/table-leaders" onClick={() => dispatch(closeAllDrawers())}>
					<Sheet className={styles.item} color="lighter">
						<Text>Таблица лидеров</Text>
						<ArrowIcon />
					</Sheet>
				</Link>
				<Sheet className={styles.item} color="lighter">
					<Text>Повторное обучение</Text>
					<ArrowIcon />
				</Sheet>
				<Link to="/airDrop" onClick={() => dispatch(closeAllDrawers())}>
					<Sheet className={styles.item} color="lighter">
						<Text>Airdrop</Text>
						<ArrowIcon />
					</Sheet>
				</Link>
				<Sheet className={styles.item} color="lighter">
					<Text>Подключить кошелёк</Text>
					<Text color="gray">Скоро</Text>
				</Sheet>
				<Sheet className={styles.item} color="lighter">
					<Text>Наш Telegram канал</Text>
					<ArrowIcon />
				</Sheet>
			</div>
		</Drawer>
	);
};

export default SettingsDrawer;
