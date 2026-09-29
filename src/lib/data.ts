import { parse } from 'yaml';
import profileRaw from '../../data/profile.yml?raw';
import careerRaw from '../../data/career.yml?raw';
import certificationsRaw from '../../data/certifications.yml?raw';
import auditsRaw from '../../data/audits.yml?raw';
import projectsRaw from '../../data/projects.yml?raw';

export interface Profile {
  name: string;
  name_en?: string;
  title: string;
  organization?: string;
  summary: string;
  highlights?: { label: string; value: string }[];
  links?: { email?: string; linkedin?: string; github?: string };
}

export interface Career {
  company: string;
  team?: string;
  role: string;
  start: string;
  end?: string | null;
  duties?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  acquired: string;
}

export interface Audit {
  name: string;
  category: string;
  role: string;
  years: number[];
}

export interface Project {
  title: string;
  period: string | number;
  description: string;
  outcomes?: string[];
  tags?: string[];
}

export const profile = parse(profileRaw) as Profile;
export const career = (parse(careerRaw) ?? []) as Career[];
export const certifications = (parse(certificationsRaw) ?? []) as Certification[];
export const audits = (parse(auditsRaw) ?? []) as Audit[];
export const projects = (parse(projectsRaw) ?? []) as Project[];

// "2021-01" → "2021.01"
export const formatYm = (ym?: string | null) => (ym ? String(ym).replace('-', '.') : '현재');
