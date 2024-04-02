import { createRouteView } from "atomic-router-react";
import { Signin } from "./ui/Signin";
import { anonymousRoute, currentRoute } from "./model";
import { PageLoader } from "@/shared/ui/pageLoader/PageLoader";
import { AuthLayout } from "@/app/layouts/authLayout/AuthLayout";

export const SignInRoute = {
    view: createRouteView({
        route: anonymousRoute,
        view: Signin,
        otherwise: PageLoader,
    }),
    route: currentRoute,
    layout: AuthLayout,
};
