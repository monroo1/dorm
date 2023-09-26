import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import EyeIcon from "@/shared/assets/icons/Eye-redesigned.svg";
import { Text } from "@/shared/ui/redesigned/Text";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { Card } from "@/shared/ui/redesigned/Card";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Button } from "@/shared/ui/redesigned/Button";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { ArticleTextBlock } from "../../../model/types/article";
import {
    ArticleBlockType,
    ArticleView,
} from "../../../model/consts/articleConsts";
import { getRouteArticleDetails } from "@/shared/const/router";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { ArticleListItemProps } from "../ArticleListItem";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import cls from "./ArticleListItemRedesigned.module.scss";

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} />
            <Text bold text={article.user.username} />
        </>
    );
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                padding="24"
                max
                data-testid="ArticleListItem"
                className={classNames(cls.BIG, {}, [className])}
            >
                <VStack gap="16" max>
                    <HStack gap="8" max>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text bold text={article.user.username} />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="s" />
                    <AppImage
                        fallback={<Skeleton width="100%" height="250px" />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(" ")}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant="outline">
                                {t("читать далее")}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames("", {}, [className, cls[view]])}
        >
            <Card className={cls.card} border="partial">
                <AppImage
                    fallback={<Skeleton width="100%" height={200} />}
                    src={article.img}
                    alt={article.title}
                    className={cls.img}
                />
                <VStack className={cls.info}>
                    <Text title={article.title} />
                    <VStack gap="4" className={cls.footer} max>
                        <HStack justify="between" max>
                            <Text text={article.createdAt} />
                            {views}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
