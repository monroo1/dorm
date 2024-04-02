import { Link } from "atomic-router-react";
import { RegisterForm } from "@/features/registerForm";
import { routes } from "@/shared/config/routing";

import css from "./Register.module.scss";

export function Register() {
    return (
        <div className={css.form}>
            <h2>Регистрация</h2>
            <div className={css.already}>
                <p>Уже есть аккаунт?</p>
                <Link to={routes.auth.signIn}>Авторизация</Link>
            </div>
            <RegisterForm />
        </div>
    );
}
