import { createRouteView } from "atomic-router-react";
import { Signup } from "./ui/Signup";
import { anonymousRoute, currentRoute } from "./model";
import { PageLoader } from "@/shared/ui/pageLoader/PageLoader";
import { AuthLayout } from "@/app/layouts/authLayout/AuthLayout";

export const SignUpRoute = {
    view: createRouteView({
        route: anonymousRoute,
        view: Signup,
        otherwise: PageLoader,
    }),
    route: currentRoute,
    layout: AuthLayout,
};
