import { createRoutesView } from "atomic-router-react";
import { SignUpRoute } from "./signup";
import { SignInRoute } from "./signin";
import { MainRoute } from "./main";
import { ProfileRoute } from "./profile";

export const Pages = createRoutesView({
    routes: [SignUpRoute, SignInRoute, MainRoute, ProfileRoute],
});
