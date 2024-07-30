import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Navbar from './Navbar/Navbar';

const Layout = () => {
	return (
		<div className={styles.layout}>
			<main>
				<Outlet />
			</main>
			<Navbar />
		</div>
	);
};

export default Layout;
