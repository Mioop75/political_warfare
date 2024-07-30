import clsx from 'clsx';
import styles from './Pagination.module.css';

const Pagination = () => {
	return (
		<div className={styles.pagination}>
			<div
				className={clsx(styles.pagination_item, {
					[styles['pagination_item-active']]: true,
				})}
			>
				<div className={styles['pagination_item-circle']}></div>
			</div>
			<div className={clsx(styles.pagination_item)}>
				<div className={styles['pagination_item-circle']}></div>
			</div>
			<div className={clsx(styles.pagination_item)}>
				<div className={styles['pagination_item-circle']}></div>
			</div>
			<div className={clsx(styles.pagination_item)}>
				<div className={styles['pagination_item-circle']}></div>
			</div>
			<div className={clsx(styles.pagination_item)}>
				<div className={styles['pagination_item-circle']}></div>
			</div>
			<div className={clsx(styles.pagination_item)}>
				<div className={styles['pagination_item-circle']}></div>
			</div>
			<div className={clsx(styles.pagination_item)}>
				<div className={styles['pagination_item-circle']}></div>
			</div>
		</div>
	);
};

export default Pagination;
