import IAuthStrategy from "../auth/IAuthStrategy";
import type { AccessToken, ICachingStrategy, SdkConfiguration } from "../types";
export default class FakeAuthStrategy implements IAuthStrategy {
    protected accessToken: string;
    static readonly FAKE_AUTH_TOKEN = "fake-auth-token";
    private static readonly cacheKey;
    protected cache: ICachingStrategy;
    constructor(accessToken?: string);
    setConfiguration(_: SdkConfiguration): void;
    getOrCreateAccessToken(): Promise<AccessToken>;
    getAccessToken(): Promise<AccessToken | null>;
    removeAccessToken(): void;
}
