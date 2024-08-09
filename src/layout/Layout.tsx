import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Drawers from '../components/shared/Drawers/Drawers';
import Modals from '../components/shared/Modals/Modals';
import Navbar from '../components/shared/Navbar/Navbar';
import { useAppSelector } from '../hooks/useDispatch';
import { RootState } from '../store';
import styles from './Layout.module.css';

const Layout = () => {
	const { user } = useAppSelector((state: RootState) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		if (!user?.isInstructioned) navigate('/instructions');
	}, [user]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.layout}
		>
			<Outlet />
			<Navbar />
			<Modals />
			<Drawers />
		</motion.div>
	);
};

export default Layout;
