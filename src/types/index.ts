export interface Job {
  id: string;
  title: string;
  companyName: string;
  companyId: string;
  companyLogo?: string;
  location: string;
  jobType: string;
  salary?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  experienceLevel?: string;
  postedAt: string;
  featured?: boolean;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  location: string;
  description: string;
  industry: string;
  size?: string;
  founded?: string;
  jobCount: number;
}