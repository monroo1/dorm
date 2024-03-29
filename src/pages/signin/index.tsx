import { createRouteView } from "atomic-router-react";
import { Signin } from "./ui/Signin";
import { anonymousRoute, currentRoute } from "./model";
import { PageLoader } from "@/shared/ui/pageLoader/PageLoader";

export const SignInRoute = {
    view: createRouteView({
        route: anonymousRoute,
        view: Signin,
        otherwise: PageLoader,
    }),
    route: currentRoute,
};
