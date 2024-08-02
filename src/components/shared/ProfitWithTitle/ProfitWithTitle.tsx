import coinIcon from '@/assets/icons/coin-icon.svg';
import clsx from 'clsx';
import { useAppDispatch } from '../../../hooks/useSelector';
import { openDrawer } from '../../../store/drawer/drawer.slice';
import { IProfitWithTitle } from './ProfitWithTitle.interface';
import styles from './ProfitWithTitle.module.css';

const ProfitWithTitle = ({ title, count, className }: IProfitWithTitle) => {
	const dispatch = useAppDispatch();

	return (
		<div className={clsx(className, styles.profit)}>
			<div className={styles.profit_title}>{title}</div>
			<div className={styles.profit_row}>
				<img src={coinIcon} alt="" className={styles.profit_icon} />
				<div className={styles.profit_count}>{count}</div>
				<button
					className={styles.profit_question}
					onClick={() => dispatch(openDrawer('increase'))}
				>
					?
				</button>
			</div>
		</div>
	);
};

export default ProfitWithTitle;
