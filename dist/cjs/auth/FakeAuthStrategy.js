"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InMemoryCachingStrategy_1 = __importDefault(require("../caching/InMemoryCachingStrategy"));
class FakeAuthStrategy {
    accessToken;
    static FAKE_AUTH_TOKEN = "fake-auth-token";
    static cacheKey = "spotify-sdk:FakeAuthStrategy:token";
    cache;
    constructor(accessToken = FakeAuthStrategy.FAKE_AUTH_TOKEN) {
        this.accessToken = accessToken;
        this.cache = new InMemoryCachingStrategy_1.default();
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
exports.default = FakeAuthStrategy;
//# sourceMappingURL=FakeAuthStrategy.js.map