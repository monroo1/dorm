// import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReactNode, memo } from "react";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Flex.module.scss";

type FlexJustify = "start" | "center" | "end" | "between";
type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexWrap = "nowrap" | "wrap";
type FlexGap = "4" | "8" | "16" | "24" | "32";

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

// type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
    fullHeight?: boolean;
}

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        justify = "start",
        align = "center",
        direction = "row",
        wrap = "nowrap",
        fullHeight,
        gap,
        max,
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        cls[wrap],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
        [cls.fullHeight]: fullHeight,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
});
