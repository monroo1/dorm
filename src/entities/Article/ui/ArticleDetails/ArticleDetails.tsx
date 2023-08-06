import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
	DynamicModuleLoader, ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { HStack, VStack } from "shared/ui/Stack";
import {
	ArticleCodeBlockComponent,
} from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";
import { ArticleBlock } from "../../model/types/article";
import { ArticleBlockType } from "../../model/consts/articleConsts";
import {
	ArticleImageBlockComponent,
} from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleDetailsProps {
	className?: string;
	id?: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const { className, id } = props;
	const { t } = useTranslation("article");
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const article = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
		case ArticleBlockType.CODE:
			return (
				<ArticleCodeBlockComponent
					key={block.id}
					block={block}
					className={cls.block}
				/>
			);
		case ArticleBlockType.IMAGE:
			return (
				<ArticleImageBlockComponent
					key={block.id}
					block={block}
					className={cls.block}
				/>
			);
		case ArticleBlockType.TEXT:
			return (
				<ArticleTextBlockComponent
					key={block.id}
					block={block}
					className={cls.block}
				/>
			);
		default:
			return null;
		}
	}, []);

	useInitialEffect(() => {
		dispatch(fetchArticleById(id));
	});

	let content;

	if (isLoading) {
		content = (
			<>
				<Skeleton className={cls.avatar} width={200} height={200} border="50%" />
				<Skeleton className={cls.title} width={300} height={32} />
				<Skeleton className={cls.skeleton} width={600} height={24} />
				<Skeleton className={cls.skeleton} width="100%" height={200} />
				<Skeleton className={cls.skeleton} width="100%" height={200} />
			</>
		);
	} else if (error) {
		content = (
			<Text
				align={TextAlign.CENTER}
				title={t("ошибка при загрузке статьи")}
			/>
		);
	} else {
		content = (
			<>
				<HStack justify="center" max className={cls.avatarWrapper}>
					<Avatar
						size={200}
						src={article?.img}
						className={cls.avatar}
					/>

				</HStack>
				<VStack gap="4" max>
					<Text
						className={cls.title}
						title={article?.title}
						text={article?.subtitle}
						size={TextSize.L}
					/>
					<HStack gap="8" className={cls.articleInfo}>
						<Icon Svg={EyeIcon} />
						<Text text={String(article?.views)} />
					</HStack>
					<HStack gap="8" className={cls.articleInfo}>
						<Icon Svg={CalendarIcon} />
						<Text text={article?.createdAt} />
					</HStack>
				</VStack>
				{article?.blocks.map(renderBlock)}
			</>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<VStack gap="16" className={classNames(cls.ArticleDetails, {}, [className])}>
				{content}
			</VStack>
		</DynamicModuleLoader>
	);
});
