import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 495,
  site: "createdemostore",
  domains: ["createdemostore.deco.site"],
});