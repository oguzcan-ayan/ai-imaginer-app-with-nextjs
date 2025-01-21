import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";

const applyMiddleware = (middleware) => (request, response) => new Promise((resolve, reject) => {
    middleware((request, response, (result) => result instanceof Error ? reject(result) : resolve(result)))
})

const getIP = (request) =>
    request.headers["x-forwarded-for"] ||
    request.headers["x-real-ip"] ||
    request.connection.remoteAddress;

const getRateLimitMiddlewares = () => {
    const max = 3;
    const windowMs = 24 * 60 * 60 * 1000 * 30 * 12;
    const keyGenerator = getIP;

    return [
        slowDown({
            keyGenerator,
            windowMs
        }),
        rateLimit({
            keyGenerator,
            windowMs,
            max
        })
    ]
}

const middlewares = getRateLimitMiddlewares();

export const applyRateLimiting = async (request, response) => {
    await Promise.all(middlewares.map(applyMiddleware).map((middleware) => middleware(request, response)));
}