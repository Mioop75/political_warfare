import InstructionItem from './InstructionItem/InstructionItem';
import { instructions } from './instructions.const';
import styles from './Instructions.module.css';

export default function InstructionsPage() {
	return (
		<div className={styles.instruction}>
			{instructions.map(instruction => (
				<InstructionItem
					image={instruction.image}
					title={instruction.title}
					description={instruction.description}
					additionItem={instruction.additionitem}
				/>
			))}
		</div>
	);
}
