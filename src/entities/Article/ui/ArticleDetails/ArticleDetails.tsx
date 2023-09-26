import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from "@/shared/ui/deprecated/Text";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import CalendarIcon from "@/shared/assets/icons/calendar-20-20.svg";
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";
import { renderBlock } from "./renderBlock";
import { Text } from "@/shared/ui/redesigned/Text";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton as SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <AvatarDeprecated
                    size={200}
                    src={`${article?.img}`}
                    className={cls.avatar}
                />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    data-testid="ArticleDetails.Title"
                />
                <HStack gap="8" className={cls.articleInfo}>
                    <IconDeprecated Svg={EyeIcon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <IconDeprecated Svg={CalendarIcon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderBlock)}
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={
                    <SkeletonRedesigned width="100%" height={420} border="16" />
                }
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderBlock)}
        </>
    );
};

const ArticleDetailsSkeleton = () => {
    const Skeleton = toggleFeatures({
        name: "isAppRedesigned",
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    return (
        <VStack gap="16" max>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                border="50%"
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
        </VStack>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Text
                        align="center"
                        title={t("ошибка при загрузке статьи")}
                    />
                }
                off={
                    <TextDeprecated
                        align={TextAlign.CENTER}
                        title={t("ошибка при загрузке статьи")}
                    />
                }
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
