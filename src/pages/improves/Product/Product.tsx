import { useState } from 'react';
import Coins from '../../../components/shared/Coins/Coins';
import Button from '../../../components/ui/Button/Button';
import Sheet from '../../../components/ui/Sheet/Sheet';
import Text from '../../../components/ui/Text/Text';
import AnimationCoins from './AnimationCoins/AnimationCoins';
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
	const [purchasedProduct, setPurchasedProduct] = useState(false);

	const buyProduct = () => {
		setPurchasedProduct(true);

		setTimeout(() => setPurchasedProduct(false), 2000);
	};

	return (
		<Sheet direction="column" className={styles.item}>
			<div className={styles.item_row}>
				<div className={styles.item_name}>
					<img src={img} alt="" />
					<Text>{title}</Text>
				</div>
				<div>
					{purchasedProduct && <AnimationCoins />}

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
