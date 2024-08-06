import imgWallet from '@/assets/images/wallet.png';
import Button from '../../../ui/Button/Button';
import Drawer from '../../../ui/Drawer/Drawer';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './ConnectTonWallet.module.css';

const ConnectTonWalletDrawer = () => {
	return (
		<Drawer className={styles.drawer}>
			<img src={imgWallet} alt="" className={styles.img} />
			<Title className={styles.title}>Подключай свой кошелёк TON </Title>
			<Text className={styles.text}>
				Подключите свой криптокошелек. Если у вас его нет, создайте его через
				ваш аккаунт в Telegram
			</Text>
			<Button className={styles.btn} disabled={true}>
				Подключить свой кошелёк TON (скоро)
			</Button>
		</Drawer>
	);
};

export default ConnectTonWalletDrawer;
