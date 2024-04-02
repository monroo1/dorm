import { Link } from "atomic-router-react";
import { LoginForm } from "@/features/loginForm";
import { routes } from "@/shared/config/routing";

import css from "./Login.module.scss";

export function Login() {
    return (
        <div className={css.form}>
            <h2>Авторизация</h2>
            <div className={css.already}>
                <p>Нет аккаунта?</p>
                <Link to={routes.auth.signUp}>Зарегестрироваться</Link>
            </div>
            <LoginForm />
        </div>
    );
}
