import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import InstructionItem from './InstructionItem/InstructionItem';
import { instructions } from './instructions.const';
import styles from './Instructions.module.css';
import Pagination from './Pagination/Pagination';

export default function InstructionsPage() {
	const [selectedInstruction, setSelectedInstruction] = useState<number>(1);

	return (
		<div className={styles.instruction}>
			<div className={styles.item}>
				<AnimatePresence mode="wait">
					{instructions.map(
						instruction =>
							selectedInstruction === instruction.id && (
								<InstructionItem
									key={instruction.id}
									image={instruction.image}
									bgImg={instruction.bgImg}
									imgStyles={instruction.imgStyles}
									title={instruction.title}
									description={instruction.description}
									additionItem={instruction.additionitem}
									selectedInstruction={selectedInstruction}
									setSelectedInstruction={setSelectedInstruction}
								/>
							)
					)}
				</AnimatePresence>
				<Pagination
					items={instructions}
					paginationActive={selectedInstruction}
					setSelectedInstruction={setSelectedInstruction}
				/>
			</div>
		</div>
	);
}
