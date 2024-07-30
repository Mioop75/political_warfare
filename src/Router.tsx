import { Navigate, Route, Routes } from 'react-router-dom';
import { routersWithAuthorization } from './consts/router.const';
import Layout from './layout/Layout';
import InstructionsPage from './pages/instructions/Instructions';

export default function Router() {
	return (
		<Routes>
			<Route element={<Layout />}>
				{routersWithAuthorization.map(router => (
					<Route
						key={router.path}
						path={router.path}
						element={router.element}
					/>
				))}
			</Route>
			<Route path="/instructions" element={<InstructionsPage />} />
			<Route path="*" element={<Navigate to={{ pathname: '/home' }} />} />
		</Routes>
	);
}
