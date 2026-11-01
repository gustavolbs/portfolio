import { z } from "zod";
import {
  aboutCopy as aboutCopyRaw,
  caseStudies as caseStudiesRaw,
  contactChannels as contactChannelsRaw,
  experience as experienceRaw,
  homeActions as homeActionsRaw,
  positioning as positioningRaw,
  profile as profileRaw,
} from "@/content/site";

const PlaceholderString = z.string().min(1);

const ProfileSchema = z.object({
  name: PlaceholderString,
  shortName: PlaceholderString,
  email: PlaceholderString,
  mailto: PlaceholderString,
  github: PlaceholderString,
  linkedin: PlaceholderString,
  resumeHref: PlaceholderString,
  currentCompany: PlaceholderString,
  role: PlaceholderString,
  years: PlaceholderString,
  location: PlaceholderString,
  status: PlaceholderString,
});

const PositioningSchema = z.object({
  role: PlaceholderString,
  focusShort: PlaceholderString,
  domain: PlaceholderString,
  proof: PlaceholderString,
});

const HomeActionsSchema = z.object({
  primary: z.object({
    label: PlaceholderString,
    value: PlaceholderString,
  }),
  secondary: z.object({
    label: PlaceholderString,
    href: PlaceholderString,
  }),
});

const ChapterSchema = z.object({
  label: PlaceholderString,
  body: PlaceholderString,
});

const DecisionSchema = z.object({
  chose: PlaceholderString,
  rejected: PlaceholderString,
  why: PlaceholderString,
});

const CaseStudySchema = z.object({
  slug: PlaceholderString,
  number: PlaceholderString,
  company: PlaceholderString,
  title: PlaceholderString,
  role: PlaceholderString,
  period: PlaceholderString,
  problem: PlaceholderString,
  outcome: PlaceholderString,
  stack: z.array(PlaceholderString).min(1),
  chapters: z.array(ChapterSchema).min(1),
  context: PlaceholderString.optional(),
  ownership: PlaceholderString.optional(),
  tradeoff: PlaceholderString.optional(),
  decisions: z.array(DecisionSchema).optional(),
  quality: z.array(PlaceholderString).optional(),
  measurementMethod: PlaceholderString.optional(),
  measuredDate: PlaceholderString.optional(),
  whatIdChange: PlaceholderString.optional(),
});

const ExperienceRoleSchema = z.object({
  company: PlaceholderString,
  role: PlaceholderString,
  period: PlaceholderString,
  current: z.boolean().optional(),
  focus: PlaceholderString,
});

const AboutCopySchema = z.object({
  body: z.array(PlaceholderString).min(1),
  facts: z.array(z.object({ label: PlaceholderString, value: PlaceholderString })),
});

const ContactChannelSchema = z.object({
  label: PlaceholderString,
  value: PlaceholderString,
  href: PlaceholderString,
  external: z.boolean().optional(),
});

const ContactChannelsSchema = z.array(ContactChannelSchema);

export const profile = ProfileSchema.parse(profileRaw);
export const positioning = PositioningSchema.parse(positioningRaw);
export const homeActions = HomeActionsSchema.parse(homeActionsRaw);
export const caseStudies = z.array(CaseStudySchema).min(3).max(3).parse(caseStudiesRaw);
export const experience = z.array(ExperienceRoleSchema).parse(experienceRaw);
export const aboutCopy = AboutCopySchema.parse(aboutCopyRaw);
export const contactChannels = ContactChannelsSchema.parse(contactChannelsRaw);

export type Profile = z.infer<typeof ProfileSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;
export type ExperienceRole = z.infer<typeof ExperienceRoleSchema>;
