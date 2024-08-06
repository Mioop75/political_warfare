import imgWallet from '@/assets/images/wallet.png';
import clsx from 'clsx';
import Button from '../../../ui/Button/Button';
import Drawer from '../../../ui/Drawer/Drawer';
import Field from '../../../ui/Field/Field';
import Text from '../../../ui/Text/Text';
import Title from '../../../ui/Title/Title';
import styles from './ConnectedTonWallet.module.css';

const ConnectedTonWalletDrawer = () => {
	return (
		<Drawer className={styles.drawer}>
			<img src={imgWallet} alt="" className={styles.img} />
			<Title className={styles.title}>Ваш кошелёк TON подключен</Title>
			<Text className={styles.text}>
				Вы можете отключить его или скопировать адрес кошелька
			</Text>
			<div className={styles.row}>
				<Button color="" className={clsx(styles.btn, styles.close)}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.00098 5L19 18.9991"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M5.00009 18.9991L18.9991 5"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Button>
				<Field
					className={styles.input}
					type="text"
					placeholder="FIJFDjJ....dfjfj98_jdfj"
				/>
				<Button className={styles.btn}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Button>
			</div>
		</Drawer>
	);
};

export default ConnectedTonWalletDrawer;
