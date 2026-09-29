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

// "2021-01" → 2021.0 (연 단위 소수). 비어 있으면 오늘.
export const ymToYear = (ym?: string | null) => {
  if (!ym) {
    const now = new Date();
    return now.getFullYear() + now.getMonth() / 12;
  }
  const [y, m = '1'] = String(ym).split('-');
  return Number(y) + (Number(m) - 1) / 12;
};

// 인증 영역 — 표시 순서와 CSS 색상 키
export const categories = [
  { name: '필수', key: 'mandatory' },
  { name: '의무', key: 'legal' },
  { name: '공공', key: 'public' },
  { name: '금융', key: 'finance' },
  { name: '글로벌', key: 'global' },
] as const;

export const categoryKey = (name: string) =>
  categories.find((c) => c.name === name)?.key ?? 'global';

// [2021, 2022, 2024] → [[2021, 2022], [2024, 2024]]
export const yearRuns = (years: number[]) => {
  const sorted = [...new Set(years)].sort((a, b) => a - b);
  const runs: [number, number][] = [];
  for (const y of sorted) {
    const last = runs[runs.length - 1];
    if (last && y === last[1] + 1) last[1] = y;
    else runs.push([y, y]);
  }
  return runs;
};
