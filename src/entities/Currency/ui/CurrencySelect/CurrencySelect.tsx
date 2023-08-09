import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ListBox } from "@/shared/ui/Popup";
import { Currency } from "../../model/consts/currencyConsts";

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	readonly?: boolean;
	onChange?: (value: Currency) => void;
}

const options = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
	const {
		className, value, readonly, onChange,
	} = props;
	const { t } = useTranslation();

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency);
	}, [onChange]);

	return (
		<ListBox
			value={value}
			defaultValue={t("укажите валюту")}
			label={t("укажите валюту")}
			items={options}
			readonly={readonly}
			direction="top right"
			onChange={onChangeHandler}
			className={classNames("", {}, [className])}
		/>
	);
});
