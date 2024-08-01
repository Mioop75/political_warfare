import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import styles from './Layout.module.css';

const Layout = () => {
	return (
		<motion.div
			initial={{ y: -10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			className={styles.layout}
		>
			<main>
				<Outlet />
			</main>
			<div id="footer">
				<Navbar />
			</div>
		</motion.div>
	);
};

export default Layout;
