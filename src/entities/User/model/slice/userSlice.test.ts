import { UserSchema } from "../types/user";
import { userReducer, userActions } from "./userSlice";

const data = {
    id: "1",
    username: "user",
    avatar: "avatar",
};

describe("profileSlice.test", () => {
    test("test set auth data user", () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined,
            _inited: false,
        };
        expect(
            userReducer(state as UserSchema, userActions.setAuthData(data)),
        ).toEqual({
            authData: data,
            _inited: false,
        });
    });
    test("test init auth data user", () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined,
            _inited: false,
        };
        expect(
            userReducer(state as UserSchema, userActions.initAuthData),
        ).toEqual({
            authData: undefined,
            _inited: true,
        });
    });
    test("test logout user", () => {
        const state: DeepPartial<UserSchema> = {
            authData: data,
            _inited: true,
        };
        expect(userReducer(state as UserSchema, userActions.logout)).toEqual({
            authData: undefined,
            _inited: true,
        });
    });
});
