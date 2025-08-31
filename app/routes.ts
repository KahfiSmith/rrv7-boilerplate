import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  
  // ...prefix("auth", [
  //   layout("routes/auth/_layout.tsx", [
  //     route("login", "routes/auth/login.tsx"),
  //     route("register", "routes/auth/register.tsx"),
  //     route("forgot-password", "routes/auth/forgot-password.tsx"),
  //     route("reset-password", "routes/auth/reset-password.tsx"),
  //   ]),
  // ]),
  
  // ...prefix("dashboard", [
  //   index("routes/dashboard/index.tsx"),
  //   route("profile", "routes/dashboard/profile.tsx"),
  //   route("settings", "routes/dashboard/settings.tsx"),
    
  //   layout("routes/dashboard/users/_layout.tsx", [
  //     route("users", "routes/dashboard/users/index.tsx"),
  //     route("users/:id", "routes/dashboard/users/detail.tsx"),
  //   ]),
  // ]),
  
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;