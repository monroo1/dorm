export type { User, UserSchema } from "./model/types/user";
export { UserRole } from "./model/consts/userConsts";

export { userReducer, userActions } from "./model/slice/userSlice";

export { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
export { getUserInited } from "./model/selectors/getUserInited/getUserInited";
export {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from "./model/selectors/getUserRoles/getUserRoles";
export { useJsonSettings } from "./model/selectors/getJsonSettings/getJsonSettings";
export { saveJsonSettings } from "./model/service/saveJsonSerrings";
export { initAuthData } from "./model/service/initAuthData";
