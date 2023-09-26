import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Button } from "@/shared/ui/deprecated/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "@/shared/ui/redesigned/Stack";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import cls from "./AddCommentForm.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Input } from "@/shared/ui/redesigned/Input";
import { Icon } from "@/shared/ui/redesigned/Icon";
import SendIcon from "@/shared/assets/icons/Send-redesigned.svg";
import { Card } from "@/shared/ui/redesigned/Card";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        data-testid="AddCommentForm"
                        padding="24"
                        border="partial"
                        max
                    >
                        <HStack
                            justify="between"
                            gap="16"
                            max
                            className={classNames(
                                cls.AddCommentFormRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <Input
                                className={cls.input}
                                placeholder={t("введите текст комментария")}
                                value={text}
                                onChange={onCommentTextChange}
                                data-testid="AddCommentForm.Input"
                            />
                            <Icon
                                clickable
                                onClick={onSendHandler}
                                data-testid="AddCommentForm.Button"
                                Svg={SendIcon}
                                width={24}
                            />
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        data-testid="AddCommentForm"
                        justify="between"
                        max
                        className={classNames(cls.AddCommentForm, {}, [
                            className,
                        ])}
                    >
                        <InputDeprecated
                            className={cls.input}
                            placeholder={t("введите текст комментария")}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid="AddCommentForm.Input"
                        />
                        <Button
                            onClick={onSendHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t("отправить")}
                        </Button>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
