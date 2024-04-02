import { memo } from "react";
import clsx from "clsx";

// import css from "./Register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUnit } from "effector-react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { ILoginProps } from "@/shared/types/User";
import { loginFx } from "@/entities/viewer";

import css from "./LoginForm.module.scss";

interface LoginProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginProps) => {
    const [handleLogin, pending] = useUnit([loginFx, loginFx.pending]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<ILoginProps>();

    const onSubmit: SubmitHandler<ILoginProps> = async (data) => {
        try {
            await handleLogin(data);
        } catch (e) {
            setError("identifier", { type: "invalid" });
            setError("password", { type: "invalid" });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={clsx(css.form, className)}
        >
            <Input
                register={register}
                property="identifier"
                placeholder="Почта"
                options={{
                    pattern:
                        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                    required: true,
                }}
                disabled={pending}
                isError={!!errors.identifier}
                errorMessage={
                    errors.identifier?.type === "invalid"
                        ? "Пользователя с такой почтой/паролем не существует"
                        : "Неправильно введенная почта"
                }
            />
            <Input
                register={register}
                property="password"
                placeholder="****************"
                type="password"
                disabled={pending}
                options={{
                    minLength: 6,
                    required: true,
                }}
                isError={!!errors.password}
                errorMessage={
                    errors.password?.type === "invalid"
                        ? ""
                        : "Неправильно введенный пароль, длина > 6 символов"
                }
            />
            <span>Забыли пароль?</span>
            <Button maxWidth disabled={pending}>
                Войти
            </Button>
        </form>
    );
});
