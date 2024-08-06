import airdropBg from '@/assets/images/airdrop-bg.jpg';
import Profile from '../../components/shared/Profile/Profile';
import Button from '../../components/ui/Button/Button';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import styles from './AirDrop.module.css';

const AirDrop = () => {
	return (
		<div className={styles.airdrop}>
			<Profile />
			<img src={airdropBg} alt="" className={styles.airdrop_bg} />
			<Title className={styles.title}>AirDrop tasks</Title>
			<Button disabled={true} className={styles.btn}>
				Подключить свой кошелёк (скоро)
			</Button>
			<Text className={styles.text}>
				Листинг уже отправлен. Задания будут отображены ниже. Выполните их,
				чтобы принять участие в AirDrop
			</Text>
			<Text className={styles.text}>
				Один из захватывающих этапов, который нас ожидает, — это значительный
				токен аирдроп. Мы стремимся максимизировать ваши доходы.
			</Text>
			<Text className={styles.text}>
				На данный момент мы можем сказать, что эти три игровых показателя будут
				играть важную роль в определении распределения токенов:
			</Text>
			<ul className={styles.ul}>
				<li>
					<Text className={styles.text}>Прибыль в час</Text>
				</li>
				<li>
					<Text className={styles.text}>
						Общее количество монет, которые вы заработали за период
					</Text>
				</li>
				<li>
					<Text className={styles.text}>
						Количество друзей, которых вы пригласили
					</Text>
				</li>
				<li>
					<Text className={styles.text}>
						На данный момент самое важное — получать удовольствие от игры,
						развивать своего персонажа и помогать нам развивать нашу экосистему!
					</Text>
				</li>
			</ul>
			<Button className={styles.btn}>Подписывайтесь на наш канал в TG</Button>
		</div>
	);
};

export default AirDrop;
