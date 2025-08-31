import type { Config } from "@react-router/dev/config";

export default {
  // Switch to SPA mode to avoid SSR hook conflicts during dev
  ssr: false,
} satisfies Config;
