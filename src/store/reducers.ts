import { combineReducers } from '@reduxjs/toolkit';
import UserReducer from './user/user.slice';

const rootReducers = combineReducers({
	user: UserReducer,
});

export default rootReducers;
