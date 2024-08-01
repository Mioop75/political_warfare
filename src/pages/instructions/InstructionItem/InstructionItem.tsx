import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';
import { useAppDispatch } from '../../../hooks/useSelector';
import { getUser } from '../../../store/user/user.slice';
import { IInstructionItemComponent } from './InstructionItem.interface';
import styles from './InstructionItem.module.css';

const InstructionItem = ({
	image,
	imgStyles,
	title,
	description,
	additionItem,
	selectedInstruction,
	setSelectedInstruction,
}: IInstructionItemComponent) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const navigateInstruction = () => {
		if (selectedInstruction === 8) {
			dispatch(getUser());
			navigate('/home');
		}

		setSelectedInstruction(prev => prev + 1);
	};

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			className={styles.item}
		>
			<img src={image} alt="" style={imgStyles} className={styles.img} />
			<div className={styles.block}>
				<div className={styles.container}>
					<h2 className={styles.title}>{title}</h2>
					<div className={styles.text}>{description}</div>
					<div className={styles.additionItem}>{additionItem}</div>
					<Button className={styles.btn} onClick={navigateInstruction}>
						Далее
					</Button>
				</div>
			</div>
		</motion.div>
	);
};

export default InstructionItem;
