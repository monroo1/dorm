import {
    attach,
    createEvent,
    createStore,
    Effect,
    Event,
    sample,
} from "effector";
import {
    chainRoute,
    RouteInstance,
    RouteParams,
    RouteParamsAndQuery,
} from "atomic-router";
import { IUser } from "@/shared/types/User";
import { registerFx } from "./api/register";
import { LOCAL_TOKEN } from "@/shared/consts/localstorage";
import { loginFx } from "./api/login";
// import { getSessionFx } from "./api/session";

import * as api from "./api/session";

export enum AuthStatus {
    Initial = 0,
    Pending,
    Anonymous,
    Authenticated,
}

export const sessionRequestFx = attach({ effect: api.getSessionFx });

export const $viewer = createStore<IUser | null>(null);
const $authenticationStatus = createStore(AuthStatus.Initial);

$authenticationStatus.on(sessionRequestFx, (status) => {
    if (status === AuthStatus.Initial) return AuthStatus.Pending;
    return status;
});

$viewer.on(sessionRequestFx.doneData, (_, user) => user);

$authenticationStatus.on(
    sessionRequestFx.doneData,
    () => AuthStatus.Authenticated,
);

$authenticationStatus.on(sessionRequestFx.fail, () => AuthStatus.Anonymous);

sample({
    clock: [registerFx.doneData, loginFx.doneData],
    fn: (data) => localStorage.setItem(LOCAL_TOKEN, data.jwt),
    target: sessionRequestFx,
});

// username length  >= 3

// password length >= 6

// number room - numbeаr

interface ChainParams<Params extends RouteParams> {
    otherwise?: Event<void> | Effect<void, any, any>;
}
export function chainAuthorized<Params extends RouteParams>(
    route: RouteInstance<Params>,
    { otherwise }: ChainParams<Params> = {},
): RouteInstance<Params> {
    const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
    const sessionReceivedAnonymous = createEvent<RouteParamsAndQuery<Params>>();

    const alreadyAuthenticated = sample({
        clock: sessionCheckStarted,
        source: $authenticationStatus,
        filter: (status) => status === AuthStatus.Authenticated,
    });

    const alreadyAnonymous = sample({
        clock: sessionCheckStarted,
        source: $authenticationStatus,
        filter: (status) => status === AuthStatus.Anonymous,
    });

    sample({
        clock: sessionCheckStarted,
        source: $authenticationStatus,
        filter: (status) => status === AuthStatus.Initial,
        target: sessionRequestFx,
    });

    sample({
        clock: [alreadyAnonymous, sessionRequestFx.fail],
        source: { params: route.$params, query: route.$query },
        filter: route.$isOpened,
        target: sessionReceivedAnonymous,
    });

    if (otherwise) {
        sample({
            clock: sessionReceivedAnonymous,
            target: otherwise as Effect<void, any, any>,
        });
    }

    return chainRoute({
        route,
        beforeOpen: sessionCheckStarted,
        openOn: [alreadyAuthenticated, sessionRequestFx.done],
        cancelOn: sessionReceivedAnonymous,
    });
}

export function chainAnonymous<Params extends RouteParams>(
    route: RouteInstance<Params>,
    { otherwise }: ChainParams<Params> = {},
): RouteInstance<Params> {
    const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
    const sessionReceivedAuthenticated =
        createEvent<RouteParamsAndQuery<Params>>();

    const alreadyAuthenticated = sample({
        clock: sessionCheckStarted,
        source: $authenticationStatus,
        filter: (status) => status === AuthStatus.Authenticated,
    });

    const alreadyAnonymous = sample({
        clock: sessionCheckStarted,
        source: $authenticationStatus,
        filter: (status) => status === AuthStatus.Anonymous,
    });

    sample({
        clock: sessionCheckStarted,
        source: $authenticationStatus,
        filter: (status) => status === AuthStatus.Initial,
        target: sessionRequestFx,
    });

    sample({
        clock: [alreadyAuthenticated, sessionRequestFx.done],
        source: { params: route.$params, query: route.$query },
        filter: route.$isOpened,
        target: sessionReceivedAuthenticated,
    });

    if (otherwise) {
        sample({
            clock: sessionReceivedAuthenticated,
            target: otherwise as Effect<void, any, any>,
        });
    }

    return chainRoute({
        route,
        beforeOpen: sessionCheckStarted,
        openOn: [alreadyAnonymous, sessionRequestFx.fail],
        cancelOn: sessionReceivedAuthenticated,
    });
}
