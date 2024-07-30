import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';
import { IInstructionItemComponent } from './InstructionItem.interface';
import styles from './InstructionItem.module.css';
import Pagination from './Pagination/Pagination';

const InstructionItem = ({
	image,
	title,
	description,
	additionItem,
}: IInstructionItemComponent) => {
	const navigate = useNavigate();

	return (
		<>
			<img src={image} alt="" className={styles.img} />
			<div className={styles.block}>
				<div className={styles.container}>
					<h2 className={styles.title}>{title}</h2>
					<div className={styles.text}>{description}</div>
					<div className={styles.additionItem}>{additionItem}</div>
					<Button className={styles.btn} onClick={() => navigate('/home')}>
						Далее
					</Button>
					<Pagination />
				</div>
			</div>
		</>
	);
};

export default InstructionItem;
