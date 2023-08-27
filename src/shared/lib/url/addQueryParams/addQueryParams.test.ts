import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", () => {
    test("test with one param", () => {
        const params = getQueryParams({
            test: "value",
        });
        expect(params).toBe("?test=value");
    });
    test("test with two param", () => {
        const params = getQueryParams({
            test: "value",
            sort: "value-sort",
        });
        expect(params).toBe("?test=value&sort=value-sort");
    });
    test("test with undefined", () => {
        const params = getQueryParams({
            test: "value",
            sort: undefined,
        });
        expect(params).toBe("?test=value");
    });
});
