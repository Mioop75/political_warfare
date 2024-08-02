import giftBig from '@/assets/images/gifts/img-1-big.png';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import Text from '../../../ui/Text/Text';
import Coins from '../../Coins/Coins';
import styles from './InvitedFriendModal.module.css';

const InvitedFriendModal = () => {
	return (
		<Modal className={styles.modal}>
			<img src={giftBig} alt="" className={styles.img} />
			<Text className={styles.text}>Ваш друг присоединился к игре!</Text>
			<div className={styles.row}>
				<Coins count="+5 000" />
				<div className={styles.info}>для вас и вашего друга</div>
			</div>
			<Button className={styles.btn}>Забрать бонус</Button>
		</Modal>
	);
};

export default InvitedFriendModal;
