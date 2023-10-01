import {
    ButtonHTMLAttributes,
    ForwardedRef,
    ReactNode,
    forwardRef,
} from "react";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline" | "filled";
export type ButtonColor = "normal" | "success" | "error";

export type ButtonSize = "m" | "l" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disable?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    color?: ButtonColor;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}
export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            children,
            className,
            variant = "outline",
            square,
            disable,
            fullWidth = false,
            size = "m",
            color = "normal",
            addonLeft,
            addonRight,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disable,
            [cls.fullWidth]: fullWidth,
            [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
        };

        return (
            <button
                type="button"
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[size],
                    cls[color],
                ])}
                disabled={disable}
                {...otherProps}
                ref={ref}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
