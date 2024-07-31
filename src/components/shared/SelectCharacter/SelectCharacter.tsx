import Button from '../../ui/Button/Button';
import Sheet from '../../ui/Sheet/Sheet';
import Navbar from '../Navbar/Navbar';
import styles from './SelectCharacter.module.css';
import Slider from './Slider/Slider';
import Tabs from './Tabs/Tabs';

const SelectCharacter = () => {
	return (
		<Sheet direction="column" className={styles.character}>
			<div className={styles.container}>
				<Slider />
				<Tabs />
				<Button className={styles.btn}>Выбрать</Button>
				<Navbar color="lighter" />
			</div>
		</Sheet>
	);
};

export default SelectCharacter;
