import imgBody1 from '@/assets/images/improves/img-body-1.png';
import { useState } from 'react';
import Button from '../../../ui/Button/Button';
import Drawer from '../../../ui/Drawer/Drawer';
import Title from '../../../ui/Title/Title';
import AnimationCoins from '../../AnimationCoins/AnimationCoins';
import ProfitWithTitle from '../../ProfitWithTitle/ProfitWithTitle';
import styles from './ProductDrawer.module.css';

const ProductDrawer = () => {
	const [purchasedProduct, setPurchasedProduct] = useState(false);

	const buyProduct = () => {
		setPurchasedProduct(true);

		setTimeout(() => setPurchasedProduct(false), 2000);
	};

	return (
		<>
			{purchasedProduct && <AnimationCoins />}
			<Drawer className={styles.body}>
				<img src={imgBody1} alt="" className={styles.img} />
				<Title className={styles.title}>Спорт</Title>
				<div className={styles.text}>
					Покупайте улучшение Спорт! Повышайте здоровье своего персонажа
				</div>
				<ProfitWithTitle
					title="Прибыль в час"
					count="+175"
					className={styles.profit}
				/>
				<Button onClick={buyProduct}>Купить 3.2K</Button>
			</Drawer>
		</>
	);
};

export default ProductDrawer;
