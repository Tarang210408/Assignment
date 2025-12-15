export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Skill {
  id: number;
  title: string;
  percentage: number;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}