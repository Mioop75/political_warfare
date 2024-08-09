import { createSlice } from '@reduxjs/toolkit';
import { getMe, setInstructioned } from './user.action';
import { IInitilaState } from './user.interface';

const initialState: IInitilaState = {
	isLoading: false,
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getMe.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getMe.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
		});
		builder.addCase(setInstructioned.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(setInstructioned.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
		});
	},
});

export default userSlice.reducer;
