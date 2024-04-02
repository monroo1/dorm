import {
    createHistoryRouter,
    createRoute,
    createRouterControls,
} from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";
import { appStarted } from "./init";

export const routes = {
    discussions: createRoute(),
    auth: {
        signIn: createRoute(),
        signUp: createRoute(),
    },
    profile: createRoute(),
};

export const controls = createRouterControls();

export const router = createHistoryRouter({
    routes: [
        {
            path: "/",
            route: routes.discussions,
        },
        {
            path: "/signin",
            route: routes.auth.signIn,
        },
        {
            path: "/signup",
            route: routes.auth.signUp,
        },
        {
            path: "/profile",
            route: routes.profile,
        },
    ],
    controls,
});

sample({
    clock: appStarted,
    fn: () => createBrowserHistory(),
    target: router.setHistory,
});
