import { Job, Company } from "@/types";

export const mockJobs: Job[] = [
  {
    id: "job-1",
    title: "Senior Frontend Developer",
    companyName: "TechCorp",
    companyId: "company-1",
    companyLogo: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "San Francisco, CA (Remote)",
    jobType: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We're looking for a Senior Frontend Developer to join our growing team. You'll be responsible for building user interfaces for our web applications using React and TypeScript.",
    requirements: [
      "5+ years of experience with JavaScript/TypeScript",
      "3+ years of experience with React",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Strong understanding of web performance optimization",
      "Experience with responsive design and cross-browser compatibility"
    ],
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers",
      "Collaborate with the design team to implement visual elements"
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Unlimited PTO",
      "Remote work options"
    ],
    experienceLevel: "Senior",
    postedAt: "2 days ago",
    featured: true
  },
  {
    id: "job-2",
    title: "Backend Engineer",
    companyName: "DataSystems",
    companyId: "company-2",
    companyLogo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "New York, NY",
    jobType: "Full-time",
    salary: "$110,000 - $140,000",
    description: "We are seeking a Backend Engineer to design and implement server-side logic, maintain databases, and ensure high performance and responsiveness to requests from the front-end.",
    requirements: [
      "3+ years of experience in backend development",
      "Proficiency in Node.js, Python, or Java",
      "Experience with database design and management",
      "Knowledge of server-side frameworks",
      "Understanding of fundamental design principles for building scalable applications"
    ],
    responsibilities: [
      "Design and implement robust, scalable backend services",
      "Optimize application for maximum speed and scalability",
      "Implement security and data protection measures",
      "Integrate data storage solutions",
      "Collaborate with frontend developers to integrate user-facing elements"
    ],
    experienceLevel: "Mid-Level",
    postedAt: "1 week ago"
  },
  {
    id: "job-3",
    title: "UX/UI Designer",
    companyName: "CreativeMinds",
    companyId: "company-3",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Austin, TX (Remote)",
    jobType: "Contract",
    description: "We're looking for a talented UX/UI Designer to create amazing user experiences. The ideal candidate should have a strong portfolio demonstrating their design skills.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
      "Understanding of user-centered design principles",
      "Experience conducting user research and usability testing",
      "Ability to create wireframes, prototypes, and high-fidelity designs"
    ],
    responsibilities: [
      "Create user-centered designs by understanding business requirements",
      "Develop and conceptualize comprehensive UI/UX design strategy",
      "Create wireframes, storyboards, user flows, and prototypes",
      "Conduct user research and evaluate user feedback",
      "Collaborate with developers to implement designs"
    ],
    benefits: [
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Creative work environment"
    ],
    experienceLevel: "Mid-Level",
    postedAt: "3 days ago",
    featured: true
  },
  {
    id: "job-4",
    title: "DevOps Engineer",
    companyName: "CloudNative",
    companyId: "company-4",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Remote",
    jobType: "Full-time",
    salary: "$130,000 - $160,000",
    description: "We are looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. You will be responsible for deployment, automation, and monitoring of our systems.",
    requirements: [
      "3+ years of experience in DevOps or similar role",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of infrastructure as code tools (Terraform, CloudFormation)",
      "Experience with containerization technologies (Docker, Kubernetes)",
      "Understanding of CI/CD pipelines"
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage and optimize cloud infrastructure",
      "Implement monitoring and alerting solutions",
      "Automate manual processes",
      "Collaborate with development teams to improve deployment processes"
    ],
    experienceLevel: "Mid-Level",
    postedAt: "5 days ago"
  },
  {
    id: "job-5",
    title: "Product Manager",
    companyName: "TechCorp",
    companyId: "company-1",
    location: "San Francisco, CA",
    jobType: "Full-time",
    salary: "$130,000 - $160,000",
    description: "We're seeking an experienced Product Manager to help us define and launch new features. You'll work closely with engineering, design, and marketing teams to ensure successful product delivery.",
    requirements: [
      "5+ years of experience in product management",
      "Experience with agile development methodologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management abilities",
      "Technical background preferred"
    ],
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering teams to deliver features",
      "Analyze market trends and competition",
      "Measure and optimize product performance"
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Unlimited PTO",
      "Professional development budget"
    ],
    experienceLevel: "Senior",
    postedAt: "1 week ago"
  }
];

export const mockCompanies: Company[] = [
  {
    id: "company-1",
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    website: "https://techcorp.example.com",
    location: "San Francisco, CA",
    description: "TechCorp is a leading technology company specializing in innovative software solutions for businesses of all sizes. We focus on creating intuitive, powerful applications that solve real-world problems.",
    industry: "Software Development",
    size: "201-500 employees",
    founded: "2010",
    jobCount: 2
  },
  {
    id: "company-2",
    name: "DataSystems",
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    website: "https://datasystems.example.com",
    location: "New York, NY",
    description: "DataSystems specializes in big data analytics and machine learning solutions. We help businesses make sense of their data and derive actionable insights to drive growth and innovation.",
    industry: "Data Analytics",
    size: "51-200 employees",
    founded: "2015",
    jobCount: 1
  },
  {
    id: "company-3",
    name: "CreativeMinds",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    website: "https://creativeminds.example.com",
    location: "Austin, TX",
    description: "CreativeMinds is a design agency focused on creating beautiful, user-friendly digital experiences. We combine creativity with technical expertise to deliver outstanding results for our clients.",
    industry: "Design",
    size: "11-50 employees",
    founded: "2018",
    jobCount: 1
  },
  {
    id: "company-4",
    name: "CloudNative",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    website: "https://cloudnative.example.com",
    location: "Seattle, WA",
    description: "CloudNative specializes in cloud infrastructure and DevOps solutions. We help companies modernize their infrastructure and adopt cloud-native technologies to improve scalability and reliability.",
    industry: "Cloud Computing",
    size: "51-200 employees",
    founded: "2016",
    jobCount: 1
  },
  {
    id: "company-5",
    name: "FinTech Solutions",
    logo: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    website: "https://fintechsolutions.example.com",
    location: "Chicago, IL",
    description: "FinTech Solutions develops innovative financial technology products that help businesses and consumers manage their finances more effectively. Our mission is to make financial services more accessible and user-friendly.",
    industry: "Financial Technology",
    size: "51-200 employees",
    founded: "2014",
    jobCount: 0
  }
];