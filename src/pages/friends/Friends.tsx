import linkIcon from '@/assets/icons/link.svg';
import gift1 from '@/assets/images/gifts/img-1.png';
import gift2 from '@/assets/images/gifts/img-2.png';
import Coins from '../../components/shared/Coins/Coins';
import Profile from '../../components/shared/Profile/Profile';
import Button from '../../components/ui/Button/Button';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import styles from './Friends.module.css';

export default function FriendsPage() {
	return (
		<>
			<div className="container">
				<Profile />
				<Title className={styles.title}>Пригласите друзей!</Title>
				<Text className={styles.text}>Вы и Ваш друг полчите бонусы</Text>
				<Sheet direction="column" className={styles.item}>
					<div className={styles.item_row}>
						<img src={gift1} alt="" className={styles.item_img} />
						<Text className={styles.item_text}>Пригласить друга</Text>
					</div>
					<div className={styles.item_row}>
						<Coins count="+5 000" />
						<div className={styles.item_info}>для вас и вашего друга</div>
					</div>
				</Sheet>
				<Sheet direction="column" className={styles.item}>
					<div className={styles.item_row}>
						<img src={gift2} alt="" className={styles.item_img} />
						<Text className={styles.item_text}>
							Пригласить друга с Telegram Premium
						</Text>
					</div>
					<div className={styles.item_row}>
						<Coins count="+25 000" />
						<div className={styles.item_info}>для вас и вашего друга</div>
					</div>
				</Sheet>
				<Text className={styles['text-list']}>Список ваших друзей</Text>
				<div className={styles.users}>
					<Sheet className={styles.notFound}>Вы ещё никого не пригласили</Sheet>
					{/* <Sheet className={styles.user}>
					<Avatar />
					<div className={styles.user_text}>@username</div>
				</Sheet> */}
				</div>
			</div>
			<div className={styles.actions}>
				<Button className={styles.actions_invite}>Пригласить друга</Button>
				<Button className={styles.actions_btnLink}>
					<img src={linkIcon} alt="" />
				</Button>
			</div>
		</>
	);
}
