import { memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUnit } from "effector-react";
import { AxiosError } from "axios";
import clsx from "clsx";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { IRegisterProps } from "@/shared/types/User";
import { registerFx } from "@/entities/viewer";
import { Select } from "@/shared/ui/select";

import css from "./RegisterForm.module.scss";
import { $dorms } from "@/entities/dorm";

interface RegisterProps {
    className?: string;
}

export const RegisterForm = memo(({ className }: RegisterProps) => {
    const [handleRegister, pending] = useUnit([registerFx, registerFx.pending]);

    const dorms = useUnit($dorms);
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<IRegisterProps>();

    const onSubmit: SubmitHandler<IRegisterProps> = async (data) => {
        try {
            await handleRegister(data);
        } catch (e) {
            const error = e as AxiosError<
                {
                    data: null;
                    error: { message: string; name: string; status: number };
                },
                any
            >;
            if (
                error.response?.data.error.message ===
                "Данному пользователю не было отправлено приглашение для регистрации!"
            ) {
                setError("email", { type: "notInvite" });
            } else {
                setError("email", { type: "invalid" });
            }
        }
    };

    if (!dorms) {
        return null;
    }

    return (
        <form
            className={clsx(css.form, className)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                register={register}
                property="email"
                type="email"
                placeholder="Почта"
                options={{
                    pattern:
                        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                    required: true,
                }}
                disabled={pending}
                isError={!!errors.email}
                errorMessage={
                    // eslint-disable-next-line no-nested-ternary
                    errors.email?.type === "notInvite"
                        ? "Пользователя с такой почтой не пригласили"
                        : errors.email?.type === "invalid"
                        ? "Пользователь уже зарегестрирован"
                        : "Неправильно введенная почта"
                }
            />
            <Input
                register={register}
                property="username"
                placeholder="Username"
                options={{
                    minLength: 2,
                    required: true,
                }}
                disabled={pending}
                isError={!!errors.username}
                errorMessage="Неправильно введенный username"
            />
            <Input
                register={register}
                property="fio"
                placeholder="ФИО"
                options={{
                    minLength: 8,
                    required: true,
                }}
                disabled={pending}
                isError={!!errors.fio}
                errorMessage="Неправильно введенная ФИО"
            />
            <Select
                register={register}
                property="dorm"
                values={dorms}
                maxSize
                disabled={pending}
            />
            <Input
                register={register}
                property="numberRoom"
                placeholder="Номер комнаты (опционально)"
                options={{
                    pattern: /^[0-9]+$/,
                    required: false,
                }}
                disabled={pending}
                isError={!!errors.numberRoom}
                errorMessage="Неправильно введенный номер комнаты"
            />
            <Input
                register={register}
                property="institute"
                placeholder="ВУЗ"
                options={{
                    minLength: 3,
                    required: true,
                }}
                disabled={pending}
                isError={!!errors.institute}
                errorMessage="Неправильно введенный институт"
            />
            <Input
                register={register}
                property="password"
                placeholder="Пароль"
                type="password"
                options={{
                    minLength: 6,
                    required: true,
                }}
                disabled={pending}
                isError={!!errors.password}
                errorMessage="Неправильно введенный пароль"
            />
            <Button maxWidth disabled={pending}>
                Зарегестрироваться
            </Button>
        </form>
    );
});
