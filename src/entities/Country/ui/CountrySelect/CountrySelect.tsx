import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
	className?: string;
	value?: Country;
	readonly?: boolean;
	onChange?: (value: Country) => void;
}

const options = [
	{ value: Country.Armenia, content: Country.Armenia },
	{ value: Country.Belarus, content: Country.Belarus },
	{ value: Country.Kazakhstan, content: Country.Kazakhstan },
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
	const {
		className, value, readonly, onChange,
	} = props;
	const { t } = useTranslation();

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Country);
	}, [onChange]);

	return (
		<ListBox
			value={value}
			defaultValue={t("укажите страну")}
			label={t("укажите страну")}
			items={options}
			readonly={readonly}
			direction="top"
			onChange={onChangeHandler}
			className={classNames("", {}, [className])}
		/>
	);
});
