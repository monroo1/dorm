import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import cls from "./LoginForm.module.scss";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { ToggleFeatures } from "@/shared/lib/features";
import { Input } from "@/shared/ui/redesigned/Input";
import { Text } from "@/shared/ui/redesigned/Text";
import { Button } from "@/shared/ui/redesigned/Button";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { useForceUpdate } from "@/shared/render/forceUpdate";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const forceUpdate = useForceUpdate();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
            forceUpdate();
        }
    }, [onSuccess, dispatch, username, password, forceUpdate]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="8"
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Text title={t("форма авторизации")} />
                        {error && <Text text={t(error)} variant="error" />}
                        <Input
                            autofocus
                            type="text"
                            className={cls.input}
                            placeholder={t("введите username")}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            type="text"
                            className={cls.input}
                            placeholder={t("введите пароль")}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <Button
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t("войти")}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t("форма авторизации")} />
                        {error && (
                            <TextDeprecated
                                text={t(error)}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            autofocus
                            type="text"
                            className={cls.input}
                            placeholder={t("введите username")}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t("введите пароль")}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={cls.loginBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t("войти")}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
