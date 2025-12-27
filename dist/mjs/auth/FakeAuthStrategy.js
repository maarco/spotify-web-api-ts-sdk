import InMemoryCachingStrategy from "../caching/InMemoryCachingStrategy";
export default class FakeAuthStrategy {
    accessToken;
    static FAKE_AUTH_TOKEN = "fake-auth-token";
    static cacheKey = "spotify-sdk:FakeAuthStrategy:token";
    cache;
    constructor(accessToken = FakeAuthStrategy.FAKE_AUTH_TOKEN) {
        this.accessToken = accessToken;
        this.cache = new InMemoryCachingStrategy();
    }
    setConfiguration(_) {
    }
    async getOrCreateAccessToken() {
        const token = await this.cache.getOrCreate(FakeAuthStrategy.cacheKey, async () => {
            return {
                access_token: this.accessToken,
                expires: Date.now() + 3600 * 1000,
            };
        });
        return token;
    }
    async getAccessToken() {
        const token = await this.cache.get(FakeAuthStrategy.cacheKey);
        return token;
    }
    removeAccessToken() {
        this.cache.remove(FakeAuthStrategy.cacheKey);
    }
}
//# sourceMappingURL=FakeAuthStrategy.js.map