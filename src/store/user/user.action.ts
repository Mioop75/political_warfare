import { createAsyncThunk } from '@reduxjs/toolkit';
import { IInputUser } from '../../services/users/users.interface';
import usersService from '../../services/users/users.service';

export const getMe = createAsyncThunk(
	'users/getMe',
	async (data: IInputUser) => {
		const user = await usersService.getMe(data);

		return user;
	}
);

export const setInstructioned = createAsyncThunk(
	'users/setInstructioned',
	async (data: { uuid: string }) => {
		const user = await usersService.setInstructioned(data);

		return user;
	}
);
