import { Project, Education, Skill, Experience, Certification } from './types';

export const personalInfo = {
  name: 'Dyavanandi Sharanya',
  role: 'Aspiring Software Engineer',
  subRoles: [
    'Aspiring Software Engineer',
    'AI & Machine Learning Enthusiast',
    'Cloud Computing Learner'
  ],
  location: 'Hyderabad, India',
  email: 'sharanyadyavanandi@gmail.com',
  about: 'I am a Computer Science undergraduate at CMR College of Engineering and Technology (2023–2027) with a CGPA of 8.89. I enjoy solving problems, building AI-powered applications, and continuously learning new technologies. My interests include Artificial Intelligence, Machine Learning, Cloud Computing, and Software Development. I am looking for internship and research opportunities where I can contribute while continuously improving my technical skills.',
  careerObjective: 'Motivated and detail-oriented Computer Science Engineering student seeking a challenging Software Engineering internship. Eager to leverage strong analytical abilities, hands-on experience in AI/ML model development, and cloud computing foundations to build robust, scalable solutions in a collaborative environment.',
  socials: {
    github: 'https://github.com/sharanya-1521',
    linkedin: 'https://www.linkedin.com/in/sharanya-dyavanandi-482404306',
    leetcode: 'https://leetcode.com/u/DyavanandiSharanya/'
  }
};

export const educationList: Education[] = [
  {
    institution: 'CMR College of Engineering and Technology',
    degree: 'B.Tech in Computer Science Engineering',
    duration: '2023 – 2027',
    grade: 'CGPA: 8.89',
    details: [
      'Core Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Machine Learning.',
      'Active member of the Technical & Coding Club.',
      'Participated in campus-wide hackathons and coding challenges.'
    ]
  },
  {
    institution: 'Intermediate Education',
    degree: 'MPC (Maths, Physics, Chemistry)',
    duration: '2021 – 2023',
    grade: 'Percentage: 98.5%',
    details: [
      'Secured top-tier grades in Mathematics, Physics, and Chemistry.',
      'Strong mathematical foundation in linear algebra, calculus, and probability.'
    ]
  },
  {
    institution: 'Secondary School Certificate (SSC)',
    degree: 'Class X Board Education',
    duration: '2021',
    grade: 'GPA: 10.0',
    details: [
      'Graduated with a perfect GPA of 10.0.',
      'Represented school in regional mathematics olympiad and science exhibitions.'
    ]
  }
];

export const skillsList: Skill[] = [
  // Programming
  { name: 'Java', category: 'Programming', level: 4 },
  { name: 'C', category: 'Programming', level: 4 },
  
  // Web
  { name: 'HTML', category: 'Web', level: 5 },
  { name: 'CSS', category: 'Web', level: 4 },
  
  // AI & Machine Learning
  { name: 'Machine Learning', category: 'AI & Machine Learning', level: 4 },
  { name: 'Deep Learning', category: 'AI & Machine Learning', level: 3 },
  { name: 'Data Preprocessing', category: 'AI & Machine Learning', level: 5 },
  { name: 'Model Evaluation', category: 'AI & Machine Learning', level: 4 },
  
  // Cloud
  { name: 'Google Cloud Platform (GCP)', category: 'Cloud', level: 4 },
  
  // Database
  { name: 'MySQL', category: 'Database', level: 4 },
  
  // Core CS
  { name: 'Data Structures & Algorithms (DSA)', category: 'Core CS', level: 4 },
  { name: 'DBMS', category: 'Core CS', level: 4 },
  { name: 'Operating Systems (OS)', category: 'Core CS', level: 4 },
  
  // Tools
  { name: 'Git', category: 'Tools', level: 4 },
  { name: 'GitHub', category: 'Tools', level: 5 },
  { name: 'VS Code', category: 'Tools', level: 5 },
  { name: 'Tableau', category: 'Tools', level: 3 },
  { name: 'Excel', category: 'Tools', level: 4 }
];

export const projectsList: Project[] = [
  {
    id: 'stock-prediction',
    title: 'Stock Price Prediction using LSTM',
    description: 'Developed an LSTM-based deep learning model for stock market prediction. Implemented end-to-end data pipelines starting from historical stock dataset fetching, moving window preprocessing, MinMax scaling, and stateful LSTM layers. Optimized prediction error metrics (RMSE/MAE) through grid search hyperparameter tuning.',
    githubUrl: 'https://github.com/sharanya-1521/stock-price-prediction-lstm',
    tags: ['Deep Learning', 'LSTM', 'Python', 'Keras', 'Data Preprocessing'],
    image: 'stock_prediction_img',
    featured: true,
    metrics: '94.2% Prediction Direction Accuracy'
  },
  {
    id: 'pancreatic-detection',
    title: 'Pancreatic Cancer Detection using ML',
    description: 'Built a predictive machine learning pipeline for the early-stage detection of pancreatic cancer using complex clinical and urinary biomarker datasets. Performed exploratory data analysis (EDA), synthetic oversampling (SMOTE) to tackle class imbalance, and evaluated multiple supervised models including Random Forest, SVM, and XGBoost.',
    githubUrl: 'https://github.com/sharanya-1521/Pancreatic-Cancer-Detection-ML',
    tags: ['Machine Learning', 'Healthcare AI', 'Scikit-Learn', 'Feature Engineering'],
    image: 'pancreatic_cancer_img',
    featured: true,
    metrics: '96.5% Recall Score on Test Set'
  }
];

export const experiencesList: Experience[] = [
  {
    id: 'exp-google-cloud',
    organization: 'L4G — Supported by Google for Developers',
    role: 'Virtual Intern – Associate Cloud Engineering',
    duration: 'May 2026 – Jul 2026',
    description: [
      'Completed a comprehensive 10-week virtual internship in Associate Cloud Engineering supported by Google for Developers.',
      'Successfully earned Google Cloud skill badges through hands-on cloud labs covering infrastructure deployment.',
      'Worked with Google Cloud Platform (GCP) services including Compute Engine, Cloud Storage, IAM, and Networking.',
      'Gained practical experience in cloud deployment, virtualization, secure access control, and routing configuration.'
    ],
    type: 'Virtual Experience',
    skills: ['Google Cloud Platform (GCP)', 'Compute Engine', 'Cloud Storage', 'IAM', 'Cloud Networking'],
    certificateUrl: 'https://drive.google.com/file/d/1s9b7sQdYmtoaC3Uwjs8Z6pS4QdsXiAAY/preview'
  },
  {
    id: 'exp-google-genai',
    organization: 'L4G — Supported by Google for Developers',
    role: 'Virtual Intern – Generative AI',
    duration: 'May 2026 – Jul 2026',
    description: [
      'Completed a comprehensive 10-week virtual internship in Generative AI supported by Google for Developers.',
      'Successfully earned Google Cloud skill badges in Generative AI, Vertex AI, and prompt engineering.',
      'Gained hands-on experience utilizing cutting-edge Vertex AI, Prompt Engineering, and Gemini models.',
      'Practiced workflows in AI application prototyping, natural language workflows, and responsible AI practices.'
    ],
    type: 'Virtual Experience',
    skills: ['Generative AI', 'Vertex AI', 'Prompt Engineering', 'Responsible AI', 'Large Language Models'],
    certificateUrl: 'https://drive.google.com/file/d/1wEYcDkthjZVRkjzwJLWIyxiApvwIzaUk/preview'
  }
];

export const certificationsList: Certification[] = [
  {
    title: 'Agentforce Specialist',
    issuer: 'Salesforce',
    date: 'May 2026',
    category: 'AI & ML',
    credentialUrl: 'https://trailhead.salesforce.com/',
    skillsGained: ['Salesforce', 'AI Agents', 'Agentforce', 'NLP Integration', 'Copilot Setup'],
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/salesforce-agentforce.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/salesforce-agentforce.pdf'
  },
  {
    title: 'APAC Solutions Architecture Virtual Experience',
    issuer: 'AWS',
    date: 'Sep 2025',
    category: 'Cloud',
    credentialUrl: 'https://aws.amazon.com/training/',
    skillsGained: ['Amazon Web Services (AWS)', 'Solutions Architecture', 'VPC Design', 'EC2 Auto Scaling', 'Cost Optimization'],
    previewImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/aws-apac.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/aws-apac.pdf'
  },
  {
    title: 'Hexart AI',
    issuer: 'Hexart AI',
    date: 'Aug 2025',
    category: 'AI & ML',
    credentialUrl: '#',
    skillsGained: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python', 'Model Evaluation', 'Hyperparameter Tuning'],
    previewImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/hexart-ai.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/hexart-ai.pdf'
  },
  {
    title: 'Deloitte Job Simulation',
    issuer: 'Deloitte',
    date: 'May 2025',
    category: 'Professional',
    credentialUrl: '#',
    skillsGained: ['Cloud Migration Strategy', 'API Specification', 'Technology Consulting', 'Enterprise Architecture', 'Business Presentation'],
    previewImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/deloitte.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/deloitte.pdf'
  },
  {
    title: 'Tata iQ Job Simulation',
    issuer: 'Tata iQ',
    date: 'Mar 2025',
    category: 'Professional',
    credentialUrl: '#',
    skillsGained: ['Tableau', 'Data Analysis', 'Business Intelligence', 'Excel Dashboards', 'Visual Storytelling'],
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/tata-iq.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/tata-iq.pdf'
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2025',
    category: 'Software Engineering',
    credentialUrl: '#',
    skillsGained: ['Python', 'Object-Oriented Programming', 'Algorithms', 'Basic Syntax'],
    previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/python-essentials-1.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/python-essentials-1.pdf'
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'Mar 2025',
    category: 'AI & ML',
    credentialUrl: '#',
    skillsGained: ['Data Analysis', 'Statistics', 'Data Visualization', 'Python'],
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/introduction-to-data-science.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/introduction-to-data-science.pdf'
  },
  {
    title: 'Network Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2025',
    category: 'Networking',
    credentialUrl: '#',
    skillsGained: ['Network Protocols', 'Subnetting', 'Routing', 'Switching', 'OSI Model'],
    previewImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/network-basics.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/network-basics.pdf'
  },
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2025',
    category: 'Networking',
    credentialUrl: '#',
    skillsGained: ['IoT Architecture', 'Sensors', 'Smart Devices', 'Embedded Systems', 'Network Connectivity'],
    previewImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/introduction-to-iot.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/introduction-to-iot.pdf'
  },
  {
    title: 'Artificial Intelligence Primer',
    issuer: 'Infosys Springboard',
    date: 'Nov 2024',
    category: 'AI & ML',
    credentialUrl: '#',
    skillsGained: ['AI Core Concepts', 'Search Algorithms', 'Knowledge Representation', 'Machine Learning Intro'],
    previewImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/infosys-ai-primer.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/infosys-ai-primer.pdf'
  },
  {
    title: 'Generative AI',
    issuer: 'Infosys Springboard',
    date: 'Jan 2025',
    category: 'AI & ML',
    credentialUrl: '#',
    skillsGained: ['Generative Models', 'LLMs', 'Prompt Engineering', 'Transformer Architectures', 'AI Safety'],
    previewImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/infosys-generative-ai.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/infosys-generative-ai.pdf'
  }
];
