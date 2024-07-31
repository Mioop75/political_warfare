import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import styles from './Layout.module.css';

const Layout = () => {
	return (
		<div className={styles.layout}>
			<main>
				<Outlet />
			</main>
			<div id="footer">
				<Navbar />
			</div>
		</div>
	);
};

export default Layout;
