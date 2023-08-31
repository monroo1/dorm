import { rtkApi } from "@/shared/api/rtkApi";
import { User } from "../model/types/user";
import { JsonSettings } from "../model/types/jsonSettings";

interface SetJsonSettingsArg {
    userId: string;
    jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                method: "PATCH",
                url: `/users/${userId}`,
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                method: "GET",
                url: `/users/${userId}`,
            }),
        }),
    }),
});

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
