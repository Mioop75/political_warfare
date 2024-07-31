import clsx from 'clsx';
import { ILevelBarComponent } from './LevelBar.interface';
import styles from './LevelBar.module.css';

const LevelBar = ({ className, min, max }: ILevelBarComponent) => {
	return (
		<div className={clsx(className, styles.progress)}>
			<div className={styles.progress_row}>
				<div className={styles.level}>Lv.1</div>
				<div className={styles.percent}>
					<span className={styles.percent_small}>35</span>/100%
				</div>
			</div>
			<div className={styles.bar}>
				<div className={styles.line} style={{ width: '35%' }}></div>
			</div>
			{min && max && (
				<div className={styles.sum}>
					<div>{min}</div>
					<div>{max}</div>
				</div>
			)}
		</div>
	);
};

export default LevelBar;
