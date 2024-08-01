import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import { useAppSelector } from '../hooks/useDispatch';
import { RootState } from '../store';
import styles from './Layout.module.css';

const Layout = () => {
	const { user } = useAppSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) navigate('/instructions');
	}, [user]);

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
