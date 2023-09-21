import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox as ListBoxDeprecated } from "@/shared/ui/deprecated/Popup";
import { Country } from "../../model/consts/countryConsts";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";
import { ListBox } from "@/shared/ui/redesigned/Popup";

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
    const { className, value, readonly, onChange } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const propsValues = {
        value,
        defaultValue: toggleFeatures({
            name: "isAppRedesigned",
            on: () => t("Cтрана"),
            off: () => t("укажите страну"),
        }),
        label: toggleFeatures({
            name: "isAppRedesigned",
            on: () => t("Cтрана"),
            off: () => t("укажите страну"),
        }),
        items: options,
        readonly,
        direction: "top right" as const,
        onChange: onChangeHandler,
        className,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...propsValues} />}
            off={<ListBoxDeprecated {...propsValues} />}
        />
    );
});
