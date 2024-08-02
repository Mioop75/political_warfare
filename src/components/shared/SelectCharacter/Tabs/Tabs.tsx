import lockIcon from '@/assets/icons/lock.svg';
import clsx from 'clsx';
import Sheet from '../../../ui/Sheet/Sheet';
import { trumpImages } from '../characters';
import Slider from './Slider/Slider';
import styles from './Tabs.module.css';

const Tabs = () => {
	return (
		<div className={styles.tabs}>
			<Slider />
			<div className={styles.tabs_buttons}>
				<button
					className={clsx(
						styles['tabs_buttons-btn'],
						styles['tabs_buttons-btn-active']
					)}
				>
					Республиканцы
				</button>
				<button className={styles['tabs_buttons-btn']}>Демократы</button>
			</div>
			<div className={styles.tabs_items}>
				{trumpImages.map(img => (
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
