import { memo } from "react";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUnit } from "effector-react";
import { $invites, sendInviteFx } from "@/entities/invite";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import css from "./SendInvite.module.scss";

interface SendInviteProps {
    className?: string;
}

export const SendInvite = memo((props: SendInviteProps) => {
    const { className } = props;

    const [handleSend, pending, invites] = useUnit([
        sendInviteFx,
        sendInviteFx.pending,
        $invites,
    ]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<{ email: string }>();

    const onSubmit: SubmitHandler<{ email: string }> = async (data) => {
        try {
            await handleSend(data.email);
            reset();
        } catch (e) {
            setError("email", { type: "invalid" });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={clsx(css.SendInvite, className)}
        >
            <Input
                className={css.input}
                register={register}
                maxSize
                property="email"
                placeholder="Введите email"
                options={{
                    pattern:
                        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                    required: true,
                }}
                disabled={pending}
                isError={!!errors.email}
                errorMessage={
                    errors.email?.type === "invalid"
                        ? "Ошибка при отправке письма"
                        : "Неправильно введенная почта"
                }
            />
            <Button disabled={pending}>Отправить</Button>
        </form>
    );
});
