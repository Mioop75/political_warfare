import { useEffect, useState } from 'react';
import Router from './Router';
import Loading from './components/shared/Loading/Loading';

function App() {
	const [isLoading, setIsLoading] = useState(true);

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
