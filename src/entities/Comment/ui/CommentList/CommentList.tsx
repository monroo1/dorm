/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import cls from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
	const {
		className,
		isLoading,
		comments,
	} = props;
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length
				? comments.map((comment) => (
					<CommentCard
						isLoading={isLoading}
						className={cls.comment}
						comment={comment}
					/>
				))
				: <Text text={t("комментарии отсутствуют")} />}
		</div>
	);
});
