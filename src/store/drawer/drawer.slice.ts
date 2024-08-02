import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './drawer.interface';

const initialState: IInitialState = {
	nameDrawer: null,
};

const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		openDrawer(state, actions) {
			state.nameDrawer = !state.nameDrawer ? actions.payload : null;
		},

		closeAllDrawers(state) {
			state.nameDrawer = null;
		},
	},
});

export const { openDrawer, closeAllDrawers } = drawerSlice.actions;

export default drawerSlice.reducer;
