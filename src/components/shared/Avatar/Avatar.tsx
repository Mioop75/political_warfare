import avatar1 from '@/assets/images/avatars/trump-1.png';
import clsx from 'clsx';
import { IAvatarComponent } from './Avatar.interface';
import styles from './Avatar.module.css';

const Avatar = ({ className }: IAvatarComponent) => {
	return (
		<div className={clsx(className, styles.avatar)}>
			<img src={avatar1} alt="" />
		</div>
	);
};

export default Avatar;
