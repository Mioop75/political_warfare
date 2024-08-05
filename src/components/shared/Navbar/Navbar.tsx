import trumpImage from '@/assets/images/trump/character_model_01.svg';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import Sheet from '../../ui/Sheet/Sheet';
import { INavbarComponent } from './Navbar.interface';
import styles from './Navbar.module.css';
import { navbarLinksLeftSide, navbarLinksRightSide } from './NavbarLinks';

const Navbar = ({ color = 'dark' }: INavbarComponent) => {
	const { pathname } = useLocation();

	return (
		<Sheet color={color} className={styles.navbar}>
			{navbarLinksLeftSide.map(link => (
				<Link
					key={link.id}
					to={link.to}
					className={clsx(styles.item, {
						[styles['item-active']]: link.to === pathname,
					})}
				>
					{link.icon}
					<div className={styles.text}>{link.title}</div>
				</Link>
			))}
			<Link
				to={'/'}
				className={clsx(styles.item, styles.main_item, {
					[styles['item-active']]: '/' === pathname || '/tapping' === pathname,
				})}
			>
				<div className={styles.main_item_border}>
					<img src={trumpImage} alt="Image" className={styles.main_item_img} />
				</div>
				<div className={styles.text}>Главная</div>
			</Link>
			{navbarLinksRightSide.map(link => (
				<Link
					key={link.id}
					to={link.to}
					className={clsx(styles.item, {
						[styles['item-active']]: link.to === pathname,
					})}
				>
					{link.icon}
					<div className={styles.text}>{link.title}</div>
				</Link>
			))}
		</Sheet>
	);
};

export default Navbar;
