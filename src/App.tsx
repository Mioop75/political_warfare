import { useEffect, useState } from 'react';
import Router from './Router';
import Loading from './components/shared/Loading/Loading';
import { useAppDispatch } from './hooks/useSelector';
import { getMe } from './store/user/user.action';

function App() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const telegram = (window as any).Telegram.WebApp;
	const { user } = telegram.initDataUnsafe;
	console.log(telegram);

	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		dispatch(
			getMe({ name: 'test', username: user.username, telegram_id: user.id })
		);
	});

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 5000);
	}, []);

	if (isLoading) return <Loading />;

	return (
		<>
			<Router />
		</>
	);
}

export default App;
