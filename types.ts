
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  year: string;
  longDescription: string;
  outcome: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
