import clsx from 'clsx';
import { useState } from 'react';
import Profile from '../../components/shared/Profile/Profile';
import DailyTab from './DailyTab/DailyTab';
import MissionsTab from './MissionsTab/MissionsTab';
import styles from './Quests.module.css';

export default function QuestsPage() {
	const [tab, setTab] = useState('daily');

	return (
		<div className={styles.quests}>
			<Profile />
			<div className={styles.btns}>
				<button
					className={clsx(styles.btn, {
						[styles.btn_active]: tab === 'daily',
					})}
					onClick={() => setTab('daily')}
				>
					Ежедневно
				</button>
				<button
					className={clsx(styles.btn, {
						[styles.btn_active]: tab === 'missions',
					})}
					onClick={() => setTab('missions')}
				>
					Миссия
				</button>
			</div>
			{tab === 'daily' ? <DailyTab /> : <MissionsTab />}
		</div>
	);
}
