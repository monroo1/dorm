import { StateSchema } from "app/providers/StoreProvider";
import { getUserRoles, isUserAdmin, isUserManager } from "./getUserRoles";
import { UserRole } from "../../types/user";

describe("getUserRoles.test", () => {
	test("should return roles", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					roles: [UserRole.ADMIN, UserRole.MANAGER],
				},
			},
		};
		expect(getUserRoles(state as StateSchema)).toEqual([UserRole.ADMIN, UserRole.MANAGER]);
	});
	test("should return roles with empty state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
			},
		};
		expect(getUserRoles(state as StateSchema)).toEqual(undefined);
	});
	test("should return isAdmin true", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					roles: [UserRole.ADMIN, UserRole.MANAGER],
				},
			},
		};
		expect(isUserAdmin(state as StateSchema)).toEqual(true);
	});
	test("should return isManager true", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					roles: [UserRole.ADMIN, UserRole.MANAGER],
				},
			},
		};
		expect(isUserManager(state as StateSchema)).toEqual(true);
	});
	test("should return isAdmin false with empty state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(isUserAdmin(state as StateSchema)).toEqual(false);
	});
	test("should return isManager false with empty state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(isUserManager(state as StateSchema)).toEqual(false);
	});
});
