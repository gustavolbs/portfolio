import type { Metadata } from "next";
import { LiveLayout } from "@/components/site/live-layout";

export const metadata: Metadata = {
  title: "Senior Frontend & Product Engineer",
  description:
    "Senior frontend engineering expressed through resilient, accessible interfaces.",
};

export default function Page() {
  return <LiveLayout />;
}
