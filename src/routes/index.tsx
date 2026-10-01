import { createFileRoute } from "@tanstack/react-router";
import KainGoApp from "@/components/KainGoApp";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "KainGo — Food delivery prototype" },
    { name: "description", content: "Explore the KainGo food delivery prototype and its interactive guide to Nielsen's ten usability heuristics." },
    { property: "og:title", content: "KainGo — Food delivery prototype" },
    { property: "og:description", content: "An interactive food delivery prototype demonstrating Nielsen's ten usability heuristics." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: KainGoApp,
});
