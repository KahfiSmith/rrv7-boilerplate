import { type RouteConfig, index, route } from "@react-router/dev/routes";

const createRoute = (path: string) => route(path, `routes/${path}/index.tsx`);
const createAuthRoute = (path: string) =>
  route(`auth/${path}`, `routes/auth/${path}/index.tsx`);

export default [
  index("routes/_index.tsx"),

//   createAuthRoute("login"),
//   createAuthRoute("register"),
//   createAuthRoute("forgot-password"),
//   createAuthRoute("reset-password"),

//   createRoute("dashboard"),
] satisfies RouteConfig;
