import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox as ListBoxDeprecated } from "@/shared/ui/deprecated/Popup";
import { Currency } from "../../model/consts/currencyConsts";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";
import { ListBox } from "@/shared/ui/redesigned/Popup";

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
    const { className, value, readonly, onChange } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const propsValues = {
        className,
        value,
        defaultValue: toggleFeatures({
            name: "isAppRedesigned",
            on: () => t("Валюта"),
            off: () => t("укажите валюту"),
        }),
        label: toggleFeatures({
            name: "isAppRedesigned",
            on: () => t("Валюта"),
            off: () => t("укажите валюту"),
        }),
        items: options,
        onChange: onChangeHandler,
        readonly,
        direction: "top right" as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...propsValues} />}
            off={<ListBoxDeprecated {...propsValues} />}
        />
    );
});
