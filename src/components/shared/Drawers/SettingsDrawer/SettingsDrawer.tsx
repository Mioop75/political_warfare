import Drawer from '../../../ui/Drawer/Drawer';
import Sheet from '../../../ui/Sheet/Sheet';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import ArrowIcon from '../../ArrowIcon/ArrowIcon';
import SelectLanguage from '../../SelectLanguage/SelectLanguage';
import styles from './SettingsDrawer.module.css';

const SettingsDrawer = () => {
	return (
		<Drawer className={styles.block}>
			<Title align="center" className={styles.title}>
				Настройки
			</Title>
			<div className={styles.column}>
				<SelectLanguage />
				<Sheet className={styles.item} color="lighter">
					<Text>Таблица лидеров</Text>
					<ArrowIcon />
				</Sheet>
				<Sheet className={styles.item} color="lighter">
					<Text>Повторное обучение</Text>
					<ArrowIcon />
				</Sheet>
				<Sheet className={styles.item} color="lighter">
					<Text>Airdrop</Text>
					<ArrowIcon />
				</Sheet>
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
