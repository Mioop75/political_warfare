import Select from '../../ui/Select/Select';

const SelectLanguage = () => {
	const languages = [
		{ title: 'Русский', value: 'rus' },
		{ title: 'English', value: 'eng' },
	];

	return <Select options={languages} mode="rows" selected={languages[0]} />;
};

export default SelectLanguage;
