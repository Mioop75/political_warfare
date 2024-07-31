import { Navigate, Route, Routes } from 'react-router-dom';
import { routerWithLayout, routerWithoutLayout } from './consts/router.const';
import Layout from './layout/Layout';

export default function Router() {
	return (
		<Routes>
			<Route element={<Layout />}>
				{routerWithLayout.map(router => (
					<Route
						key={router.path}
						path={router.path}
						element={router.element}
					/>
				))}
			</Route>
			{routerWithoutLayout.map(router => (
				<Route key={router.path} path={router.path} element={router.element} />
			))}
			<Route path="*" element={<Navigate to={{ pathname: '/' }} />} />
		</Routes>
	);
}
