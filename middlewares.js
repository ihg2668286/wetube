import routes from "./routes";
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WebTube";
    res.locals.routes = routes;
    next();
};