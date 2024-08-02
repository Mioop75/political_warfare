import Burger from '../../components/shared/Burger/Burger';
import ProfitWithTitle from '../../components/shared/ProfitWithTitle/ProfitWithTitle';
import Sheet from '../../components/ui/Sheet/Sheet';
import Text from '../../components/ui/Text/Text';
import styles from './Improves.module.css';
import Product from './Product/Product';
import { sections } from './products.const';

export default function ImprovesPage() {
	return (
		<div className={'container'}>
			<div className={styles.row}>
				<Text>Улучшения</Text>
				<Burger />
			</div>
			<Sheet className={styles.row}>
				<ProfitWithTitle title="Прибыль в час" count="+300" />
				<ProfitWithTitle title="Деньги" count="1.5К" />
			</Sheet>
			<div>
				{sections.map(section => (
					<>
						<Text className={styles.title}>{section.title}</Text>
						<div>
							{section.products.map(product => (
								<Product
									key={product.id}
									img={product.img}
									title={product.title}
									sum={product.sum}
									level={product.level}
									coins={product.coins}
									disabled={product.disabled}
								/>
							))}
						</div>
					</>
				))}
			</div>
		</div>
	);
}
