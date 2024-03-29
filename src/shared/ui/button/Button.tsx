import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import clsx from "clsx";

import css from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    maxWidth?: boolean;
    sizeBig?: boolean;
    round?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, maxWidth, sizeBig, round, ...otherProps } =
        props;

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={clsx(
                css.Button,
                className,
                maxWidth && css.max,
                sizeBig && css.big,
                round && css.round,
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
});
