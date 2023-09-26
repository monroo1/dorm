import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView } from "react-device-detect";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { StarRating } from "@/shared/ui/deprecated/StarRating";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";
import { Input } from "@/shared/ui/redesigned/Input";
import { Button } from "@/shared/ui/redesigned/Button";
import { Card } from "@/shared/ui/redesigned/Card";

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        rate = 0,
        onCancel,
        onAccept,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalModal] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState("");

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalModal(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalModal(false);
        onAccept?.(starsCount, feedback);
    }, [starsCount, feedback, onAccept]);

    const cancelHandle = useCallback(() => {
        setIsModalModal(false);
        onCancel?.(starsCount);
    }, [starsCount, onCancel]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        value={feedback}
                        data-testid="RatingCard.Input"
                        onChange={setFeedback}
                        placeholder={t("ваш отзыв")}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        value={feedback}
                        data-testid="RatingCard.Input"
                        onChange={setFeedback}
                        placeholder={t("ваш отзыв")}
                    />
                </>
            }
        />
    );

    const content = (
        <>
            <VStack align="center" gap="8" max>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            title={starsCount ? t("спасибо за оценку") : title}
                        />
                    }
                    off={
                        <TextDeprecated
                            title={starsCount ? t("спасибо за оценку") : title}
                        />
                    }
                />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack max gap="8" justify="between">
                                    <Button
                                        onClick={cancelHandle}
                                        data-testid="RatingCard.Close"
                                        color="error"
                                    >
                                        {t("закрыть")}
                                    </Button>
                                    <Button
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandle}
                                    >
                                        {t("отправить")}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack max gap="8" justify="between">
                                    <ButtonDeprecated
                                        onClick={cancelHandle}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        data-testid="RatingCard.Close"
                                    >
                                        {t("закрыть")}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandle}
                                    >
                                        {t("отправить")}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button
                                    onClick={acceptHandle}
                                    size="l"
                                    fullWidth
                                >
                                    {t("отправить")}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    onClick={acceptHandle}
                                    size={ButtonSize.L}
                                    fullWidth
                                >
                                    {t("отправить")}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card max data-testid="RatingCard" padding="24" border="round">
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    className={className}
                    max
                    data-testid="RatingCard"
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});
