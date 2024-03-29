import { memo } from "react";
import clsx from "clsx";

// import css from "./Register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUnit } from "effector-react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { ILoginProps } from "@/shared/types/User";
import { $viewer, loginFx } from "@/entities/viewer";

interface RegisterProps {
    className?: string;
}

export const LoginForm = memo((props: RegisterProps) => {
    const { className } = props;
    const handleRegister = useUnit(loginFx);
    const viewer = useUnit($viewer);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ILoginProps>();

    const onSubmit: SubmitHandler<ILoginProps> = async (data) => handleRegister(data);

    return (
        <div className={clsx(className)}>
            login
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    property="identifier"
                    placeholder="email"
                />
                <Input
                    register={register}
                    property="password"
                    placeholder="password"
                />
                <Button>Login</Button>
            </form>
        </div>
    );
});
