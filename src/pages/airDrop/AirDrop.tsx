import ArrowIcon from '../../components/shared/ArrowIcon/ArrowIcon';
import Profile from '../../components/shared/Profile/Profile';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import { useAppDispatch } from '../../hooks/useSelector';
import { openDrawer } from '../../store/drawer/drawer.slice';
import styles from './AirDrop.module.css';

const AirDrop = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.airdrop}>
			<Profile />
			<Title className={styles.title}>AirDrop tasks</Title>
			<Text className={styles.text}>
				Листинг уже отправлен. Задания будут отображены ниже. Выполните их,
				чтобы принять участие в AirDrop
			</Text>
			<div className={styles.list}>
				<Text className={styles.list_text}>Список заданий</Text>
				<div className={styles.column}>
					<button
						className={styles.item}
						onClick={() => dispatch(openDrawer('connectedTonWallet'))}
					>
						<Sheet className={styles.wrapper}>
							<Text className={styles.item_text}>
								Подключай свой кошелёк TON
							</Text>
							<ArrowIcon />
						</Sheet>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AirDrop;
