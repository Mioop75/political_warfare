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
			state.nameDrawer = actions.payload;
			document.body.style.overflow = 'hidden';
		},

		closeAllDrawers(state) {
			state.nameDrawer = null;
			document.body.style.overflow = 'auto';
		},
	},
});

export const { openDrawer, closeAllDrawers } = drawerSlice.actions;

export default drawerSlice.reducer;
