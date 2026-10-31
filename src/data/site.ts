import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const SITE = {
  name: 'Eddy Arellanes Bastida',
  shortName: 'Eddy Arellanes',
  avatar: 'https://github.com/EddyArellanes.png',
  quote: {
    text: { en: 'An easy life teaches very little.', es: 'Una vida fácil enseña muy poco.' },
    author: 'TenSoon, Mistborn',
  },
};

export const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/EddyArellanes', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eddy-arellanes-bastida/', icon: 'linkedin' },
  { name: 'X', url: 'https://x.com/eddyarellanes', icon: 'x' },
] as const;

export interface TimelineItem {
  period: string;
  current?: boolean;
  title: Localized;
  org?: string;
  description: Localized;
}

/** Newest first. */
export const TIMELINE: TimelineItem[] = [
  {
    period: '2024',
    current: true,
    title: { en: 'Software Engineer', es: 'Ingeniero de Software' },
    org: 'Microsoft',
    description: {
      en: 'Building software at scale as part of Microsoft.',
      es: 'Construyendo software a gran escala como parte de Microsoft.',
    },
  },
  {
    period: '2023',
    title: { en: 'Staff Software Engineer', es: 'Staff Software Engineer' },
    org: 'Kavak',
    description: {
      en: 'Drove technical direction and architecture across teams.',
      es: 'Impulsé la dirección técnica y la arquitectura entre equipos.',
    },
  },
  {
    period: '2022',
    title: { en: 'Engineering Lead', es: 'Engineering Lead' },
    org: 'Kavak',
    description: {
      en: 'Led an engineering team, balancing delivery, mentoring and technical quality.',
      es: 'Lideré un equipo de ingeniería, equilibrando entregas, mentoría y calidad técnica.',
    },
  },
  {
    period: '2019',
    title: { en: 'Tech Lead', es: 'Tech Lead' },
    description: {
      en: 'Started as Technical Lead, guiding my teammates so our projects succeed.',
      es: 'Inicié como Technical Lead, guiando a mis compañeros para que el desarrollo de los proyectos sea un éxito.',
    },
  },
  {
    period: '2018',
    title: { en: 'JavaScript Developer & Chatbot Developer', es: 'Desarrollador JavaScript y de Chatbots' },
    description: {
      en: 'Moved to full-stack JavaScript (MEVN stack) building web apps with Vue.js, plus chatbots and Firebase.',
      es: 'Me cambié a JavaScript full-stack (stack MEVN) desarrollando aplicaciones web con Vue.js, además de chatbots y Firebase.',
    },
  },
  {
    period: '2017',
    title: { en: 'Full-Stack Developer & Analyst', es: 'Desarrollador Full-Stack y Analista' },
    description: {
      en: 'Besides development, started designing system and application proposals.',
      es: 'Además del desarrollo, empecé a diseñar propuestas de sistemas y aplicaciones.',
    },
  },
  {
    period: '2016',
    title: { en: 'Backend & Mobile Developer', es: 'Desarrollador Backend y Mobile' },
    description: {
      en: 'First professional job: PHP (CodeIgniter) and MySQL on the backend, and native Android apps in Java.',
      es: 'Primer trabajo profesional: PHP (CodeIgniter) y MySQL en el backend, y aplicaciones nativas Android en Java.',
    },
  },
  {
    period: '2012',
    title: { en: 'University', es: 'Universidad' },
    description: {
      en: 'Bachelor in Informatics. My first steps in web development with jQuery, PHP and Bootstrap.',
      es: 'Licenciatura en Informática. Mis primeros pasos en desarrollo web con jQuery, PHP y Bootstrap.',
    },
  },
];

export interface Project {
  name: string;
  type: 'utility' | 'game';
  description: Localized;
  repo: string;
  demo?: string;
  tags?: string[];
}

/** Add public projects here; the Projects page shows an empty state while this is empty. */
export const PROJECTS: Project[] = [];
