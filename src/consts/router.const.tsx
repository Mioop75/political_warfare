import { ReactNode } from 'react';
import AirDrop from '../pages/airDrop/AirDrop';
import FriendsPage from '../pages/friends/Friends';
import HomePage from '../pages/home/Home';
import ImprovesPage from '../pages/improves/Improves';
import InstructionsPage from '../pages/instructions/Instructions';
import ProfilePage from '../pages/profile/Profile';
import QuestsPage from '../pages/quests/Quests';
import TableLeadersPage from '../pages/table-leaders/TableLeaders';

type Router = {
	path: string;
	element: ReactNode;
};

export const routerWithLayout: Router[] = [
	{
		element: <HomePage />,
		path: '/',
	},
	{
		element: <ImprovesPage />,
		path: '/improves',
	},
	{
		element: <FriendsPage />,
		path: '/friends',
	},
	{
		element: <QuestsPage />,
		path: '/quests',
	},
	{
		element: <TableLeadersPage />,
		path: '/table-leaders',
	},
	{
		element: <AirDrop />,
		path: '/airDrop',
	},
];

export const routerWithoutLayout: Router[] = [
	{
		element: <InstructionsPage />,
		path: '/instructions',
	},
	{
		element: <ProfilePage />,
		path: '/profile',
	},
];
