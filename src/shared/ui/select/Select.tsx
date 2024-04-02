import clsx from "clsx";

import { useMemo } from "react";
import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";
import css from "./Select.module.scss";

export interface SelectOption {
    id: number;
    name: string;
}

interface SelectProps<T extends FieldValues> {
    className?: string;
    label?: string;
    values: SelectOption[];
    disabled?: boolean;
    variant?: "primary" | "secondary";
    maxSize?: boolean;

    options?: RegisterOptions<T, Path<T>> | undefined;
    property: Path<T>;
    register: UseFormRegister<T>;
}

export const Select = <T extends FieldValues>(props: SelectProps<T>) => {
    const {
        className,
        options,
        disabled,
        property,
        register,
        values,
        variant = "primary",
        maxSize,
    } = props;

    const optionsList = useMemo(
        () =>
            values.map((opt) => (
                <option value={opt.id} key={opt.id}>
                    {opt.name}
                </option>
            )),
        [values],
    );

    return (
        <div
            className={clsx(
                css.Wrapper,

                className,
            )}
        >
            <select
                className={clsx(
                    css.select,
                    maxSize && css.maxWidth,
                    css[variant],
                )}
                disabled={disabled}
                {...register(property, options)}
            >
                {optionsList}
            </select>
        </div>
    );
};
