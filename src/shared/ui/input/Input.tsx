import { InputHTMLAttributes } from "react";
import clsx from "clsx";

import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";
import css from "./Input.module.scss";

interface InputProps<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "pattern"> {
    className?: string;
    variant?: "primary" | "secondary";
    maxSize?: boolean;
    isError?: boolean;
    errorMessage?: string;
    options?: RegisterOptions<T, Path<T>> | undefined;
    property: Path<T>;
    register: UseFormRegister<T>;
}

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
    const {
        className,
        type,
        variant = "primary",
        maxSize,
        options,
        isError = false,
        errorMessage = "",
        property,
        register,
        ...otherProps
    } = props;

    return (
        <div
            className={clsx(
                css.container,
                maxSize && css.maxSize,
                isError && css.isError,
            )}
        >
            <span className={css.errorMessage}>{errorMessage}</span>
            <input
                className={clsx(
                    css.Input,
                    className,
                    css[variant],
                    isError && css.error,
                )}
                {...register(property, options)}
                type={type}
                {...otherProps}
            />
        </div>
    );
};
