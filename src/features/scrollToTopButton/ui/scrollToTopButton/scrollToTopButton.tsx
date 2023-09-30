import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import CircleIcon from "@/shared/assets/icons/Circle-redesigned.svg";
import { Icon } from "@/shared/ui/redesigned/Icon";

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Icon
            Svg={CircleIcon}
            clickable
            onClick={onClick}
            width={32}
            height={32}
            className={classNames("", {}, [className])}
        >
            {t("ScrollToTopButton")}
        </Icon>
    );
});
