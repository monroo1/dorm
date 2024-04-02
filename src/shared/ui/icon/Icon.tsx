import React, { memo } from "react";
import clsx from "clsx";

import cls from "./Icon.module.scss";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    color?: string;
}

interface NonClickableBaseIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableBaseIconProps | ClickableBaseIconProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        clickable,
        height = 32,
        color = "#333",
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={clsx(cls.Icon, className)}
            width={width}
            height={height}
            color={color}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={cls.button}
                onClick={props.onClick}
                style={{ width, height }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
