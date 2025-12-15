import { Project, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'About Me', href: '#about' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Chaintech Product',
    category: 'Product Design',
    image: 'https://picsum.photos/seed/p1/400/300',
    tags: ['UX Design', 'App Design', 'Wireframe'],
  },
  {
    id: 2,
    title: 'Chaintech Product',
    category: 'Product Design',
    image: 'https://picsum.photos/seed/p2/400/300',
    tags: ['UX Design', 'App Design', 'Wireframe'],
  },
  {
    id: 3,
    title: 'Chaintech Product',
    category: 'Product Design',
    image: 'https://picsum.photos/seed/p3/400/300',
    tags: ['UX Design', 'App Design', 'Wireframe'],
  },
  {
    id: 4,
    title: 'Chaintech Product',
    category: 'Product Design',
    image: 'https://picsum.photos/seed/p4/400/300',
    tags: ['UX Design', 'App Design', 'Wireframe'],
  },
];

export const SKILLS: Skill[] = [
  {
    id: 1,
    title: 'UX Design',
    percentage: 97,
    description:
      'UX design focuses on the overall experience a user has with a product, from first impression to final interaction.',
  },
  {
    id: 2,
    title: 'UI Design',
    percentage: 97,
    description:
      'UI design shapes the visual language of a product through layout, typography, color, and interactive elements.',
  },
];