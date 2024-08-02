import { combineReducers } from '@reduxjs/toolkit';
import DrawerReducer from './drawer/drawer.slice';
import ModalReducer from './modal/modal.slice';
import UserReducer from './user/user.slice';

const rootReducers = combineReducers({
	user: UserReducer,
	drawer: DrawerReducer,
	modal: ModalReducer,
});

export default rootReducers;
