import { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon as IconDeprecated } from "../Icon/Icon";
import { Icon } from "../../redesigned/Icon/Icon";
import cls from "./StarRating.module.scss";
import StarIcon from "@/shared/assets/icons/star-20-20.svg";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];
/**
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, selectedStars = 0, onSelect } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: "isAppRedesigned",
                    off: () => cls.StarRating,
                    on: () => cls.StartRatingRedesigned,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    Svg: StarIcon,
                    key: starNumber,
                    className: classNames(
                        cls.starIcon,
                        {
                            [cls.selected]: isSelected,
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.normal]: currentStarsCount < starNumber,
                        },
                        [],
                    ),
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    "data-testid": `StarRating.${starNumber}`,
                    "data-selected": currentStarsCount >= starNumber,
                };
                return (
                    <ToggleFeatures
                        key={commonProps.key}
                        feature="isAppRedesigned"
                        on={<Icon clickable={!isSelected} {...commonProps} />}
                        off={<IconDeprecated {...commonProps} />}
                    />
                );
            })}
        </div>
    );
});
