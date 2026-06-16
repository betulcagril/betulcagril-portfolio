import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo?: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt?: string;
  position: string;
  company?: string;
  location?: string;
  websiteUrl?: string;
  websiteLabel?: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  name: string;
  summary: string[];
  previewImages: (string | StaticImageData)[];
  url?: string;
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};
