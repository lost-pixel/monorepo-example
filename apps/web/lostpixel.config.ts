import { CustomProjectConfig } from "lost-pixel";

//@ts-expect-error - types are broken, need fix
export const config: CustomProjectConfig = {
  pageShots: {
    pages: [{ path: "/", name: "docs-home" }],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "clgjsy7vk01vajs0er6790hjs",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
