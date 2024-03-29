import { memo, useEffect } from "react";
import clsx from "clsx";

import { SubmitHandler, useForm } from "react-hook-form";
import { useUnit } from "effector-react";
import css from "./RegisterForm.module.scss";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { IRegisterProps } from "@/shared/types/User";
import { registerFx, $viewer } from "@/entities/viewer";

interface RegisterProps {
    className?: string;
}

export const RegisterForm = memo((props: RegisterProps) => {
    const { className } = props;
    const handleRegister = useUnit(registerFx);
    const viewer = useUnit($viewer);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IRegisterProps>();

    const onSubmit: SubmitHandler<IRegisterProps> = async (data) => {
        console.log(data, "data");
        const res = handleRegister(data);
        console.log(res);
    };

    useEffect(() => {
        console.log(viewer);
    }, [viewer]);

    return (
        <div className={clsx(css.Register, className)}>
            register
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    property="email"
                    placeholder="Почта"
                />
                <Input
                    register={register}
                    property="username"
                    placeholder="Username"
                />
                <Input register={register} property="fio" placeholder="ФИО" />
                <Input
                    register={register}
                    property="dorm"
                    placeholder="Общежитие"
                />
                <Input
                    register={register}
                    property="numberRoom"
                    placeholder="Номер комнаты (опционально)"
                />
                <Input
                    register={register}
                    property="institute"
                    placeholder="ВУЗ"
                />
                <Input
                    register={register}
                    property="password"
                    placeholder="Пароль"
                />
                <Button>Зарегестрироваться</Button>
            </form>
        </div>
    );
});
