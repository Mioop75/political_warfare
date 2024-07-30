import coinIcon from '@/assets/icons/coin-icon.svg';
import clsx from 'clsx';
import { IProfitWithTitle } from './ProfitWithTitle.interface';
import styles from './ProfitWithTitle.module.css';

const ProfitWithTitle = ({ title, count, className }: IProfitWithTitle) => {
	return (
		<div className={clsx(className, styles.profit)}>
			<div className={styles.profit_title}>{title}</div>
			<div className={styles.profit_row}>
				<img src={coinIcon} alt="" className={styles.profit_icon} />
				<div className={styles.profit_count}>{count}</div>
				<div className={styles.profit_question}>?</div>
			</div>
		</div>
	);
};

export default ProfitWithTitle;
