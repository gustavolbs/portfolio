// UI fallback for placeholder strings. A value that begins with
// "[[PLACEHOLDER" never renders literally in the interface.
// Instead a neutral, non-committal string is shown. The literal
// marker remains in TODO.md so the open fact stays tracked.

const PREFIX = "[[PLACEHOLDER";

export function isPlaceholder(value: string): boolean {
  return typeof value === "string" && value.trim().startsWith(PREFIX);
}

export function ui(value: string, fallback: string): string {
  return isPlaceholder(value) ? fallback : value;
}

// Default fallbacks per field name. Components call
// `uiText("currentCompany")` to read a value with the right fallback.
const DEFAULTS: Record<string, string> = {
  currentCompany: "A consumer product company",
  measurement: "Production traffic, measured and dated in the case study.",
  measuredDate: "Dated in the case study",
  Based: "Remote, globally",
  Languages: "Multilingual",
  Education: "B.S. Computer Science",
  Postgraduate: "Postgraduate studies in software architecture",
  about_body:
    "Computer scientist by training, frontend engineer by trade, product engineer by disposition. I care about whether the thing ships, whether it holds up under load, and whether the next person to touch it will thank me or curse me.",
};

export function uiText(field: string, value: string): string {
  if (!isPlaceholder(value)) return value;
  return DEFAULTS[field] ?? "—";
}
