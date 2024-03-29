import { createRouteView } from "atomic-router-react";
import { Signup } from "./ui/Signup";
import { anonymousRoute, currentRoute } from "./model";
import { PageLoader } from "@/shared/ui/pageLoader/PageLoader";

export const SignUpRoute = {
    view: createRouteView({
        route: anonymousRoute,
        view: Signup,
        // component: Signup,
        otherwise: PageLoader,
    }),
    route: currentRoute,
};
