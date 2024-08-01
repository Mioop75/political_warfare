import clsx from 'clsx';
import { IPaginationComponent } from './Pagination.interface';
import styles from './Pagination.module.css';

const Pagination = ({
	items,
	paginationActive,
	setSelectedInstruction,
}: IPaginationComponent) => {
	return (
		<div className={styles.pagination}>
			{items.map(item => (
				<div
					key={item.id}
					className={clsx(styles.pagination_item, {
						[styles['pagination_item-active']]: item.id === paginationActive,
					})}
					onClick={() => setSelectedInstruction(item.id)}
				>
					<div className={styles['pagination_item-circle']}></div>
				</div>
			))}
		</div>
	);
};

export default Pagination;
