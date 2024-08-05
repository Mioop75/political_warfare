import img1 from '@/assets/images/quests/img-1.png';
import img2 from '@/assets/images/quests/img-2.png';
import img3 from '@/assets/images/quests/img-3.png';
import clsx from 'clsx';
import { useState } from 'react';
import ArrowIcon from '../../components/shared/ArrowIcon/ArrowIcon';
import Coins from '../../components/shared/Coins/Coins';
import Profile from '../../components/shared/Profile/Profile';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import { useAppDispatch } from '../../hooks/useSelector';
import { openDrawer } from '../../store/drawer/drawer.slice';
import DailyTab from './DailyTab/DailyTab';
import MissionsTab from './MissionsTab/MissionsTab';
import styles from './Quests.module.css';

export default function QuestsPage() {
	const [tab] = useState('daily');
	const dispatch = useAppDispatch();

	return (
		<div className={styles.quests}>
			<Profile />
			{tab === 'daily' ? <DailyTab /> : <MissionsTab />}
			<Title className={styles.title}>Не хватает монет?</Title>
			<div
				className={styles.gold_wrapperBtn}
				onClick={() => dispatch(openDrawer('dailReward'))}
			>
				<div className={styles.gold_wrapper}>
					<Sheet className={clsx(styles.item, styles.gold)}>
						<div className={styles.item_row}>
							<img src={img3} alt="" className={styles.item_img} />
							<div>
								<Text className={styles.item_text}>Ежедневная награда</Text>
								<Coins count="+1M" />
							</div>
						</div>
						<ArrowIcon />
					</Sheet>
				</div>
			</div>
			<Text className={styles.text}>Выполните несколько заданий</Text>
			<div className={styles.column}>
				<Sheet className={styles.item}>
					<div className={styles.item_row}>
						<img src={img2} alt="" className={styles.item_img} />
						<div>
							<Text className={styles.item_text}>Пригласите 3 друзей</Text>
							<Coins count="+25 000" />
						</div>
					</div>
					<ArrowIcon />
				</Sheet>
				<Sheet className={styles.item}>
					<div className={styles.item_row}>
						<img src={img1} alt="" className={styles.item_img} />
						<div>
							<Text className={styles.item_text}>
								Присоединяйтесь к нашему Telegram каналу
							</Text>
							<Coins count="+28 000" />
						</div>
					</div>
					<ArrowIcon />
				</Sheet>
			</div>
		</div>
	);
}
