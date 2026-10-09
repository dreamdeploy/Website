"use client";

import WebsiteVisual from "@/components/services/visuals/WebsiteVisual";
import MobileVisual from "@/components/services/visuals/MobileVisual";
import SoftwareVisual from "@/components/services/visuals/SoftwareVisual";
import DesignVisual from "@/components/services/visuals/DesignVisual";
import BackendVisual from "@/components/services/visuals/BackendVisual";
import AIVisual from "@/components/services/visuals/AIVisual";

export function ServiceVisual({ type }: { type: string }) {
  if (type === "mobile") return <MobileVisual />;
  if (type === "software") return <SoftwareVisual />;
  if (type === "design") return <DesignVisual />;
  if (type === "backend") return <BackendVisual />;
  if (type === "ai") return <AIVisual />;

  return <WebsiteVisual />;
}
