import goldCoin from '@/assets/images/gold-coin.png';
import trumpCharacter from '@/assets/images/trump/character_model_01.svg';
import clsx from 'clsx';
import { MouseEvent, useEffect, useState } from 'react';
import styles from './Character.module.css';
import Tapping from './Tapping/Tapping';

const Character = () => {
	const [clientX, setClientX] = useState(0);
	const [clientY, setClientY] = useState(0);
	const [clickedSum, setClickedSum] = useState(0);
	const [clicked, setClicked] = useState(false);

	const tappingHandler = (
		event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
	) => {
		setClickedSum(prev => prev + 1);
		setClicked(prev => !prev);
		const randomLayerX = Math.floor(
			1 + Math.random() * (event.nativeEvent.layerX - 1)
		);
		const randomLayerY = Math.floor(
			1 + Math.random() * (event.nativeEvent.layerY - 1)
		);

		setClientX(randomLayerX);
		setClientY(randomLayerY);

		setTimeout(() => setClicked(false), 100);
	};

	useEffect(() => {
		if (clickedSum > 0) {
			const time = setTimeout(() => setClickedSum(prev => prev - 1), 200);

			return () => {
				clearTimeout(time);
			};
		}
	}, [clickedSum]);

	return (
		<div className={styles.click} onClick={tappingHandler}>
			{clickedSum > 0 &&
				Array(clickedSum)
					.fill(clickedSum)
					.map((_, i) => (
						<Tapping
							clientX={clientX}
							style={{
								transform: `translateX(${clientX}px) translateY(${clientY}px)`,
							}}
							key={i}
						/>
					))}
			<img src={trumpCharacter} alt="" className={styles.click_character} />
			<img
				src={goldCoin}
				alt=""
				className={clsx(styles.click_bg, {
					[styles.bg_active]: clicked === true,
				})}
				draggable="false"
			/>
			<div className={styles.click_text}>Нажми на меня</div>
		</div>
	);
};

export default Character;
