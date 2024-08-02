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
			document.body.style.overflow = 'hidden';
		},

		closeAllModals(state) {
			state.nameModal = null;
			document.body.style.overflow = 'auto';
		},
	},
});

export const { openModal, closeAllModals } = modalSlice.actions;

export default modalSlice.reducer;
