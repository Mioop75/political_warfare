import avatarImg from '@/assets/images/trump/character_model_01.svg';
import clsx from 'clsx';
import { IAvatarComponent } from './Avatar.interface';
import styles from './Avatar.module.css';

const Avatar = ({ className }: IAvatarComponent) => {
	return (
		<div className={clsx(className, styles.avatar)}>
			<img src={avatarImg} alt="" />
		</div>
	);
};

export default Avatar;
