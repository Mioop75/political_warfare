export interface IUser {
	uuid: string;
	name: string;
	username: string;
	level: ILevel;
	coins: number;
	isInstructioned: boolean;
}

export interface ILevel {
	id: number;
	current: number;
	sum: number;
}
