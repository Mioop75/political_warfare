import Coins from '../../../components/shared/Coins/Coins';
import Button from '../../../components/ui/Button/Button';
import Sheet from '../../../components/ui/Sheet/Sheet';
import Text from '../../../components/ui/Text/Text';
import { useAppDispatch } from '../../../hooks/useSelector';
import { openDrawer } from '../../../store/drawer/drawer.slice';
import { IProductComponent } from './Product.interface';
import styles from './Product.module.css';

const Product = ({
	img,
	title,
	sum,
	level,
	coins,
	disabled,
}: IProductComponent) => {
	const dispatch = useAppDispatch();

	const buyProduct = () => {
		dispatch(openDrawer('product'));
	};

	return (
		<Sheet direction="column" className={styles.item}>
			<div className={styles.item_row}>
				<div className={styles.item_name}>
					<img src={img} alt="" />
					<Text>{title}</Text>
				</div>
				<div>
					<Button onClick={buyProduct} disabled={disabled}>
						Купить {sum}
					</Button>
				</div>
			</div>
			<div className={styles.item_row}>
				<div className={styles.item_text}>
					Необходимый уровень: <span>{level}</span>
				</div>
				<Coins count={`+${coins}`} />
			</div>
		</Sheet>
	);
};

export default Product;
