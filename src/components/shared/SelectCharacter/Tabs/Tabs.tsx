import lockIcon from '@/assets/icons/lock.svg';
import clsx from 'clsx';
import { useState } from 'react';
import Sheet from '../../../ui/Sheet/Sheet';
import { charactersImage, ITab } from '../characters';
import Slider from './Slider/Slider';
import styles from './Tabs.module.css';

const Tabs = () => {
	const [tabId, setTabId] = useState(1);

	const characters = charactersImage.find(({ id }) => id === tabId) as ITab;

	return (
		<div className={styles.tabs}>
			<Slider images={characters.characters.map(({ img }) => img)} />
			<div className={styles.tabs_buttons}>
				<button
					className={clsx(styles['tabs_buttons-btn'], {
						[styles['tabs_buttons-btn-active']]: tabId === 1,
					})}
					onClick={() => setTabId(1)}
				>
					Республиканцы
				</button>
				<button
					className={clsx(styles['tabs_buttons-btn'], {
						[styles['tabs_buttons-btn-active']]: tabId === 2,
					})}
					onClick={() => setTabId(2)}
				>
					Демократы
				</button>
			</div>
			<div className={styles.tabs_items}>
				{characters.characters.map(img => (
					<Sheet key={img.id} color="lighter" className={styles.tabs_item}>
						<img src={img.img} alt="" className={styles['tabs_item-img']} />
						{img.lock && (
							<img src={lockIcon} alt="" className={styles['tabs_item-lock']} />
						)}
					</Sheet>
				))}
			</div>
		</div>
	);
};

export default Tabs;
