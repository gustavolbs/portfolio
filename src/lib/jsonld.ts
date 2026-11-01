import { caseStudies, profile } from "@/content/validated";
import { publicProfile } from "@/content/public-profile";

const BASE = "https://iam.linearcraft.dev";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE}/#person`,
    name: publicProfile.name,
    jobTitle: publicProfile.role,
    url: BASE,
    sameAs: [publicProfile.github, publicProfile.linkedin, "https://www.linearcraft.dev"],
    worksFor: { "@type": "Organization", name: "Linear Craft Technology", url: "https://www.linearcraft.dev" },
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Frontend Architecture",
      "Design Systems",
      "Internationalization",
    ],
  };
}

export function breadcrumbsFor(path: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: path.map((label, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: label,
      item: `${BASE}/${path.slice(0, i + 1).join("/")}`,
    })),
  };
}

export function caseStudyJsonLd(slug: string) {
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return null;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.title,
    author: {
      "@type": "Person",
      name: profile.shortName,
    },
    about: c.company,
    datePublished: c.period,
    keywords: c.stack.join(", "),
    url: `${BASE}/work/${c.slug}`,
    description: c.problem,
  };
}
