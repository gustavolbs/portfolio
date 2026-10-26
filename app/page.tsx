import type { Metadata } from "next";
import { Home } from "@/components/site/home";

export const metadata: Metadata = {
  title: "Senior Frontend, Product & Forward Deployed Engineer",
  description:
    "Senior frontend engineering expressed through resilient, accessible interfaces.",
};

export default function Page() {
  return <Home />;
}
