import type { MetadataRoute } from "next";
import config from "@/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return config.robots;
}
