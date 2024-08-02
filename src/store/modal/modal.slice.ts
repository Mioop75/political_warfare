import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './modal.interface';

const initialState: IInitialState = {
	nameModal: null,
};

const modalSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		openModal(state, actions) {
			state.nameModal = actions.payload;
		},

		closeAllModals(state) {
			state.nameModal = null;
		},
	},
});

export const { openModal, closeAllModals } = modalSlice.actions;

export default modalSlice.reducer;
