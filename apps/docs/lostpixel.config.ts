import { CustomProjectConfig } from "lost-pixel";

//@ts-expect-error - types are broken, need fix
export const config: CustomProjectConfig = {
  pageShots: {
    pages: [
      { path: "/", name: "docs-home" },
      { path: "/main", name: "main" },
    ],
    baseUrl: "http://172.17.0.1:3001",
  },
  lostPixelProjectId: "clgjxquki02dakn0ec4r6lsz5",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
