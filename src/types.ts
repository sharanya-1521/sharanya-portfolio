export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  image: string;
  featured: boolean;
  metrics?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  details?: string[];
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Web' | 'AI & Machine Learning' | 'Cloud' | 'Database' | 'Core CS' | 'Tools';
  level: number; // 1 to 5
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  description: string[];
  type: 'Virtual Experience' | 'Job Simulation' | 'Training' | 'Internship' | 'Specialist';
  skills: string[];
  certificateUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  category: 'Cloud' | 'AI & ML' | 'Software Engineering' | 'Networking' | 'Professional';
  skillsGained?: string[];
  previewImage?: string;
  pdfUrl?: string;
  viewUrl?: string;
}
