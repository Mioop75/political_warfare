import { ReactNode } from 'react';
import FriendsPage from '../pages/friends/Friends';
import HomePage from '../pages/home/Home';
import ImprovesPage from '../pages/improves/Improves';
import ProfilePage from '../pages/profile/Profile';
import QuestsPage from '../pages/quests/Quests';
import TableLeadersPage from '../pages/table-leaders/TableLeaders';

type Router = {
	path: string;
	element: ReactNode;
};

export const routersWithAuthorization: Router[] = [
	{
		element: <HomePage />,
		path: '/',
	},
	{
		element: <ProfilePage />,
		path: '/profile',
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
];
