import { createSlice } from '@reduxjs/toolkit';
import { IInitilaState } from './user.interface';

const initialState: IInitilaState = {
	isLoading: false,
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUser(state) {
			localStorage.setItem('user', 'user');
			state.user = true;
		},

		checkUser(state) {
			const user = localStorage.getItem('user');

			if (!user) state.user = null;
		},
	},
});

export const { getUser, checkUser } = userSlice.actions;

export default userSlice.reducer;
