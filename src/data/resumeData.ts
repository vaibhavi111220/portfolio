export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
  summary: string;
}

export const personalInfo: PersonalInfo = {
  name: "Vaibhavi Satish",
  title: "Business & Data Analyst | Product Management",
  email: "vaibhavisatish20@gmail.com",
  phone: "(843) 940-3861",
  location: "Greenville, South Carolina (Willing to Relocate)",
  linkedin: "https://www.linkedin.com/in/vaibhavisatish/",
  github: "https://github.com/vaibhavi111220", // Assuming the same GitHub URL as before
  website: "https://vaibhavisatish1.wixsite.com/my-site",
  summary:
    "Turning complex data into compelling stories is my specialty. With over 3 years in Data & Business Analytics, I've crafted insights that improved operational efficiency by 20% in healthcare analytics and streamlined financial reporting processes across aviation and financial sectors across healthcare, aviation, and financial sectors. Now, I'm channeling this passion into Product Management, aiming to create data-powered products that resonate with users. My journey is about bridging numbers and narratives—let's build something impactful together!",
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Product Data Analyst",
    company: "Board of Pharmacy, State of West Virginia",
    location: "Remote, USA",
    startDate: "07/2024",
    endDate: "Present",
    description: [
      "Led product development initiatives for a pharmacy compliance platform, gathering requirements from stakeholders and translating them into actionable features that improved user satisfaction by 42%",
      "Engineered Python scripts in Databricks notebooks to automate ingestion of 50K+ monthly pharmacy records, reducing pipeline runtime by 35% while ensuring HIPAA and pharmacy compliance",
      "Applied data modeling for efficient querying, enabling 10 Tableau dashboards for real-time anomaly tracking and cutting manual reporting by 40%",
      "Deployed Databricks Workflows for end-to-end compliance checks, slashing inspection delays from 14 to 5 days and reducing submission errors by 30% to meet financial standards",
      "Conducted user research and A/B testing to optimize platform features, resulting in a 27% increase in user engagement and adoption rates",
      "Partnered with IT and business teams to eliminate 95% of data discrepancies through streamlined approval workflows and structured requirements gathering",
      "Drove Agile sprints via JIRA and led Smartsheet project tracking, accelerating regulatory initiatives by 15%",
    ],
    technologies: [
      "Product Management",
      "User Research",
      "A/B Testing",
      "Product Roadmap",
      "Python",
      "Databricks",
      "Tableau",
      "SQL",
      "HIPAA Compliance",
      "Data Modeling",
      "JIRA",
      "Smartsheet",
      "Agile",
    ],
  },
  {
    id: "2",
    title: "Product & Data Analyst (Intern)",
    company: "British Airways",
    location: "Dallas, Texas",
    startDate: "01/2024",
    endDate: "05/2024",
    description: [
      "Collaborated with product teams to define user personas and journey maps, resulting in a customer-centric booking system that increased conversion rates by 18%",
      "Created product requirement documents (PRDs) and user stories for the customer feedback system, ensuring development alignment with business goals",
      "Reduced missed flight bookings by 10% and improved customer targeting by 5% using machine learning models (Python linear regression with NumPy/scikit-learn) to forecast booking trends",
      "Visualized results in Tableau dashboards (drill-down filters, trend lines) to optimize marketing strategies and product offerings",
      "Enhanced real-time customer feedback response by deploying an AI-driven system (NLP-based sentiment analysis with spaCy and automated email triggers), boosting service responsiveness",
      "Led cross-functional collaboration with Product, Sales, Supply Chain, and Procurement teams, refining KPIs using Six Sigma tools (DMAIC, fishbone diagrams) to drive a 15% improvement in operational efficiency",
      "Optimized financial reporting workflows with Power BI (DAX measures, Power Query for ETL) and SAS (data aggregation, regression analysis), achieving 50% faster reporting and 15% cost savings in procurement",
    ],
    technologies: [
      "Product Management",
      "User Personas",
      "Journey Mapping",
      "PRDs",
      "User Stories",
      "Python",
      "Machine Learning",
      "NumPy",
      "scikit-learn",
      "Tableau",
      "NLP",
      "spaCy",
      "Six Sigma",
      "Power BI",
      "DAX",
      "Power Query",
      "SAS",
    ],
  },
  {
    id: "3",
    title: "Graduate Assistant (Data Analytics)",
    company: "University of North Texas",
    location: "Denton, Texas",
    startDate: "12/2022",
    endDate: "05/2024",
    description: [
      "Improved business reporting accuracy by 20% through data visualization and validation using Tableau (interactive dashboards, KPIs) and Python (Pandas, NumPy)",
      "Collaborated with academic stakeholders to gather requirements and deliver reports with actionable insights using Smartsheet",
      "Applied statistical techniques (hypothesis testing, ANOVA, chi-square) using Excel and Python to support data-driven strategies",
      "Mentored 25+ students in data warehousing principles (star schema, ETL), leveraging Smartsheet for tracking project milestones and automating status updates",
    ],
    technologies: [
      "Tableau",
      "Python",
      "Pandas",
      "NumPy",
      "Smartsheet",
      "Statistical Analysis",
      "Excel",
      "Data Warehousing",
      "ETL",
    ],
  },
  {
    id: "4",
    title: "Data Analyst (Software Engineering)",
    company: "Hashout Technologies",
    location: "Bengaluru, India",
    startDate: "01/2022",
    endDate: "07/2022",
    description: [
      "Developed a Figma UI/UX prototype for a web application (URL copyright detector), collaborating closely with clients to enhance user experience by 15% and streamline project timelines",
      "Accelerated data processing speed by 25% using Hadoop MapReduce with Snowflake for scalable data warehousing, enabling quicker fraud detection",
      "Optimized front-end code (JavaScript, CSS) to reduce page load times by 30% and errors by 25%, improving user satisfaction",
    ],
    technologies: [
      "Figma",
      "UI/UX",
      "Hadoop",
      "MapReduce",
      "Snowflake",
      "JavaScript",
      "CSS",
      "Front-end Development",
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Masters in Business Analytics",
    institution: "University of North Texas",
    location: "Denton, Texas, USA",
    startDate: "08/2022",
    endDate: "05/2024",
    achievements: [
      "Urban Walkability Index – Capstone Project",
      "Healthcare Analytics: Predicting Patient Readmission",
      "Advanced data modeling and machine learning techniques",
    ],
  },
  {
    id: "2",
    degree:
      "Bachelors in Computer Science Engineering (Specialization Data Science)",
    institution: "Presidency University",
    location: "Bengaluru, India",
    startDate: "08/2018",
    endDate: "05/2022",
    achievements: [
      "Data Science specialization",
      "Software engineering fundamentals",
      "UI/UX design principles",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "0",
    title: "Pharmacy Compliance Product Strategy",
    description:
      "Led product development for a pharmacy compliance platform by creating comprehensive product requirements, user personas, and journey maps. Conducted user research and A/B testing to refine features, resulting in 42% higher user satisfaction and 27% increased adoption. Created product roadmaps and prioritized features using value vs. effort matrix, ensuring alignment with regulatory requirements and stakeholder needs.",
    technologies: [
      "Product Management",
      "User Research",
      "A/B Testing",
      "Product Roadmap",
      "Feature Prioritization",
      "User Personas",
      "Journey Mapping",
      "JIRA",
      "Agile",
      "Stakeholder Management",
    ],
    featured: true,
  },
  {
    id: "1",
    title: "Urban Walkability Index – Capstone Project",
    description:
      "Created a machine learning model (neural networks with ReLU) to analyze urban walkability, increasing prediction accuracy by 25%. Orchestrated data collection (census data, traffic patterns) and built Tableau dashboards to communicate insights, guiding city planners in data-driven infrastructure investments.",
    technologies: [
      "Python",
      "Neural Networks",
      "Machine Learning",
      "Tableau",
      "Data Collection",
      "Data Visualization",
    ],
    githubUrl:
      "https://github.com/vaibhavi111220/Urban-Walkability-Index-Capstone-Project",
    featured: true,
  },
  {
    id: "2",
    title: "Healthcare Analytics: Predicting Patient Readmission",
    description:
      "Developed a hospital readmission risk model using TensorFlow, achieving 85% accuracy in identifying high-risk patients. Executed end-to-end data analysis (exploration, feature engineering, logistic regression vs. random forest modeling) and interpreted results with SHAP values, contributing to a 20% reduction in readmission rates and improved resource allocation.",
    technologies: [
      "TensorFlow",
      "Machine Learning",
      "Python",
      "Logistic Regression",
      "Random Forest",
      "SHAP Values",
      "Feature Engineering",
      "Data Exploration",
    ],
    githubUrl:
      "https://github.com/vaibhavi111220/Healthcare-Analytics-Predicting-Patient-Readmission",
    featured: true,
  },
  {
    id: "3",
    title: "Pharmacy Compliance Dashboard",
    description:
      "Engineered real-time Tableau dashboards to track pharmacy compliance metrics and anomalies across 50K+ monthly records. Implemented drill-down functionality and automated alerts for regulatory violations, enabling proactive compliance management and reducing inspection delays by 9 days on average.",
    technologies: [
      "Tableau",
      "Python",
      "Databricks",
      "SQL",
      "Data Modeling",
      "HIPAA Compliance",
      "Dashboard Design",
    ],
    featured: true,
  },
  {
    id: "4",
    title: "Flight Booking Prediction Model",
    description:
      "Developed machine learning models using Python, NumPy, and scikit-learn to forecast flight booking trends, reducing missed bookings by 10% and improving customer targeting by 5%. Created visualizations in Tableau with drill-down filters and trend lines to optimize marketing strategies.",
    technologies: [
      "Python",
      "NumPy",
      "scikit-learn",
      "Linear Regression",
      "Tableau",
      "Machine Learning",
      "Data Visualization",
    ],
    featured: true,
    githubUrl: "https://github.com/vaibhavi111220/British-Airways",
  },
  {
    id: "5",
    title: "URL Copyright Detector Application",
    description:
      "Designed UI/UX prototype in Figma for a web application that detects copyright infringement in URLs. Enhanced user experience by 15% through collaborative client feedback and streamlined project timelines, resulting in higher client satisfaction.",
    technologies: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
      "User Research",
      "Frontend Development",
    ],
    featured: false,
  },
  {
    id: "6",
    title: "Academic Performance Analytics",
    description:
      "Created interactive Tableau dashboards with KPIs to improve business reporting accuracy by 20%. Applied statistical techniques (hypothesis testing, ANOVA, chi-square) using Excel and Python to support data-driven strategies in an academic environment.",
    technologies: [
      "Tableau",
      "Python",
      "Pandas",
      "NumPy",
      "Statistical Analysis",
      "Hypothesis Testing",
      "ANOVA",
      "Chi-square",
      "Excel",
    ],
    featured: false,
  },
];

export const skills: Skill[] = [
  {
    category: "Product Management",
    items: [
      "Product Roadmapping",
      "User Research",
      "A/B Testing",
      "Product Requirements Documents",
      "User Stories",
      "User Personas",
      "Journey Mapping",
      "Competitive Analysis",
      "Feature Prioritization",
      "Product Strategy",
      "Product Analytics",
      "Product Lifecycle Management",
    ],
  },
  {
    category: "Technical Skills",
    items: [
      "Python",
      "SQL (PostgreSQL, MySQL)",
      "Databricks",
      "Hadoop/Spark",
      "Tableau",
      "Power BI (DAX, Power Query)",
      "Excel (VBA)",
      "Azure (Data Factory, Synapse)",
      "AWS (Glue, EMR, Airflow)",
    ],
  },
  {
    category: "Data Science & Analytics",
    items: [
      "Machine Learning",
      "Neural Networks",
      "Statistical Analysis",
      "Hypothesis Testing",
      "Data Visualization",
      "NLP",
      "Time Series Analysis",
      "Feature Engineering",
      "ETL Processes",
      "Data Modeling",
    ],
  },
  {
    category: "Business Skills",
    items: [
      "Six Sigma (Green Belt)",
      "Risk Management",
      "KPI Metrics Development",
      "Process Improvement (DMAIC)",
      "Strategic Communication",
      "Stakeholder Engagement",
      "Data Storytelling",
      "Agile",
      "Smartsheet Project Management",
    ],
  },
  {
    category: "Tools & Software",
    items: [
      "JIRA",
      "Confluence",
      "Smartsheet",
      "Figma",
      "SAS",
      "spaCy",
      "scikit-learn",
      "TensorFlow",
      "Git",
      "Excel",
    ],
  },
  {
    category: "Domain Knowledge",
    items: [
      "Healthcare Analytics",
      "Aviation Industry",
      "Financial Services",
      "Regulatory Compliance",
      "HIPAA",
      "Urban Planning",
      "Academic Administration",
      "Project Management",
    ],
  },
];

export const certifications = [
  {
    name: "Product Management First Steps",
    issuer: "PMI",
    date: "2025",
    url: "https://www.linkedin.com/learning/certificates/fa5b493a87f2737928a7681fe860f870a359dea7d875c09e6bb3b0b31a919e54?trk=share_certificate",
  },
  {
    name: "Smartsheet Project Management Expert",
    issuer: "Udemy",
    date: "April 2025",
    url: "https://www.udemy.com/certificate/UC-5c98e1aa-11d6-472d-abd8-7e2dba7b50aa/",
  },
  {
    name: "Lean Six Sigma Green Belt",
    issuer: "PMI",
    date: "Jan 2025",
    url: "https://www.linkedin.com/learning/certificates/c15a024398d5a10bcea5b1b95fa803aff3e042af98bed21f247cd2277e0140f1?trk=share_certificate ",
  },
  {
    name: "Risk Management",
    issuer: "UC Irvine",
    date: "Oct 2024",
    url: "https://www.coursera.org/account/accomplishments/records/LUZVUESF09KM",
  },
  {
    name: "Introduction to Data Engineering (AWS)",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://www.linkedin.com/learning/certificates/0179078d0c276d29e1530ade6ce9eaf4560e6133fb477b7e0cf819d1ce9b8495",
  },
  {
    name: "Marketing Analytics",
    issuer: "University Of Virginia",
    date: "2024",
    url: "https://www.coursera.org/account/accomplishments/verify/BJCDXDCPQKHB",
  },
];
