import { Github, Linkedin, Instagram } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoGo from '/public/images/logos/icon-go.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoYolov8 from '/public/images/logos/icon-yolov8.svg';
import LogoYolov8Light from '/public/images/logos/icon-yolov8-light.svg';
import LogoPaddleocr from '/public/images/logos/icon-paddleocr.svg';
import LogoOpencv from '/public/images/logos/icon-opencv.svg';
import LogoRos from '/public/images/logos/icon-ros.svg';
import LogoRosLight from '/public/images/logos/icon-ros-light.svg';
import LogoGazebo from '/public/images/logos/icon-gazebo.svg';
import LogoLinux from '/public/images/logos/icon-linux.svg';
import LogoPostman from '/public/images/logos/icon-postman.svg';
import LogoN8n from '/public/images/logos/icon-n8n.svg';
import LogoElevenlabs from '/public/images/logos/icon-elevenlabs.svg';
import LogoElevenlabsLight from '/public/images/logos/icon-elevenlabs-light.svg';
import LogoDbeaver from '/public/images/logos/icon-dbeaver.svg';
import LogoDbeaverLight from '/public/images/logos/icon-dbeaver-light.svg';

import ProjectTriageAiSupport from '/public/images/projects/project-triage-ai-support.png';
import ProjectTriageTickets from '/public/images/projects/project-triage-tickets.png';
import ProjectFaradeyProjects from '/public/images/projects/project-faradey-projects.png';
import ProjectFaradeySales from '/public/images/projects/project-faradey-sales.png';
import ProjectResmartMedicalStay from '/public/images/projects/project-resmart-medical-stay.png';
import ProjectResmartDoctors from '/public/images/projects/project-resmart-doctors.png';
import ProjectOrgsurveyQr from '/public/images/projects/project-orgsurvey-qr.png';
import ProjectOrgsurveyFeedback from '/public/images/projects/project-orgsurvey-feedback.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/betulcagril',
  GITHUB_REPO: 'https://github.com/betulcagril/betulcagril-portfolio',
  LINKEDIN: 'https://www.linkedin.com/in/betul-cagril',
  INSTAGRAM: 'https://www.instagram.com/betulcagril',
  PORTFOLIO: 'https://betulcagril.github.io/betulcagril-portfolio',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/betulcagril',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/betul-cagril',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/betulcagril',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Go',
    logo: LogoGo,
    url: 'https://go.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'YOLOv8',
    logo: LogoYolov8,
    darkModeLogo: LogoYolov8Light,
    url: 'https://docs.ultralytics.com/',
  },
  {
    label: 'PaddleOCR',
    logo: LogoPaddleocr,
    url: 'https://github.com/PaddlePaddle/PaddleOCR',
  },
  {
    label: 'OpenCV',
    logo: LogoOpencv,
    url: 'https://opencv.org/',
  },
  {
    label: 'ROS',
    logo: LogoRos,
    darkModeLogo: LogoRosLight,
    url: 'https://www.ros.org/',
  },
  {
    label: 'Gazebo',
    logo: LogoGazebo,
    url: 'https://gazebosim.org/',
  },
  {
    label: 'Linux',
    logo: LogoLinux,
    url: 'https://www.kernel.org/',
  },
  {
    label: 'Postman',
    logo: LogoPostman,
    url: 'https://www.postman.com/',
  },
  {
    label: 'n8n',
    logo: LogoN8n,
    url: 'https://n8n.io/',
  },
  {
    label: 'ElevenLabs',
    logo: LogoElevenlabs,
    darkModeLogo: LogoElevenlabsLight,
    url: 'https://elevenlabs.io/',
  },
  {
    label: 'DBeaver',
    logo: LogoDbeaver,
    darkModeLogo: LogoDbeaverLight,
    url: 'https://dbeaver.io/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    position: 'Full Stack Intern',
    company: 'CrewLabs Technology Company',
    location: 'Remote',
    websiteUrl: 'https://www.crewlabs.co/tr',
    websiteLabel: 'crewlabs.co',
    startDate: new Date(2025, 5),
    endDate: new Date(2025, 11),
    summary: [
      'AI Powered Voice Assistant:AI-Powered Voice Assistant:Built a Go architecture using ElevenLabs and n8n to analyze spoken user issues.The system automatically identifies the problem,sends it to the right department and runs automated background workflows based on the voice data.',
      'Enterprise Feedback Infrastructure:Built an customer survey and analytical feedback system using Next.js,TypeScript,Tailwind CSS for the frontend, backed by a scalable PostgreSQL database layer.',
      'System Integration:Managed REST API integrations and data flows across the platform.This made sure that AI models and databases could communicate and work together smoothly.',
      'Key Tech:Go,PostgreSQL,Next.js,React,TypeScript,Tailwind CSS,n8n,ElevenLabs API,Postman.',
    ],
  },
  {
    position: 'Computer Vision Intern',
    company: 'Fizibil Engineering & Software Company',
    location: 'On-Site, Ulutek Teknokent',
    websiteUrl: 'https://www.fizibil.com/',
    websiteLabel: 'fizibil.com',
    startDate: new Date(2025, 5),
    endDate: new Date(2025, 8),
    summary: [
      'Automated Meter Reading System:Contributed to the development of an applied AI system designed to automatically localize and extract numerical data from physical meter displays.',
      'Dataset Management:Gathered and labeled different image datasets using LabelImg to provide high quality data for training deep learning models.',
      'Model Training & Extraction:Implemented and fine tuned object detection frameworks using YOLOv8 and successfully integrated PaddleOCR and OpenCV pipelines for accurate character recognition under varying image qualities.',
      'Optimization:Conducted epoch based deep learning model training,tracking key performance metrics to maximize inference speed and recognition accuracy.',
      'Key Tech:Python,OpenCV,YOLOv8,PaddleOCR,LabelImg,Linux.',
    ],
  },
  {
    position: 'Software Team Member',
    company: 'Zafer UAV Team',
    location: 'Teknofest Competition',
    websiteUrl: 'https://www.instagram.com/yeditepezaferuavteam/',
    websiteLabel: 'Instagram · @yeditepezaferuavteam',
    startDate: new Date(2025, 8),
    currentlyWorkHere: true,
    summary: [
      'Autonomous Mission Control:Developing autonomous flight scenarios and core navigation algorithms for a International Unmanned Aerial Vehicle Competition in Teknofest.',
      'Simulation & Image Processing:Implementing real time image processing algorithms integrated within ROS and Gazebo simulation environments.',
      'Team Collaboration:Working in a team to build software pipelines,configure systems and review code in Linux environments.',
      'Key Tech:ROS,Gazebo,Python,OpenCV,Linux,Git.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Triage – AI Based Support Ticket Management System',
    previewImages: [ProjectTriageAiSupport, ProjectTriageTickets],
    summary: [
      'Developed Triage an AI powered support ticket management system designed to automate internal IT support operations,improve issue resolution efficiency and provide secure enterprise grade support workflows through Local LLM integration.The system enables users to submit issues using natural language while AI automatically classifies and prioritizes requests based on urgency.',
      'Implemented intelligent ticket prioritization,duplicate ticket detection and merging,automatic context capturing including device and network information,SLA performance monitoring,secure local AI processing and role based access management for support teams.',
      'Focused on backend architecture design,API development,AI workflow integration and building automation pipelines for enterprise IT support operations.',
      'Key Tech:Python,FastAPI,PostgreSQL,SQLAlchemy,Local LLM,JWT.',
    ],
  },
  {
    name: 'Task Management System',
    previewImages: [ProjectFaradeyProjects, ProjectFaradeySales],
    summary: [
      'Collaborated in a team to develop Task Management System a business workflow and internal operations platform designed to help companies manage employee tasks,project execution processes,customer management,sales workflows and KPI based performance tracking within a centralized enterprise system.',
      'The platform included role based admin management,task creation and assignment workflows,department authorization systems,customer and project lifecycle management,project sub task automation,internal notification systems,sales pipeline management,KPI definition modules,target tracking dashboards and performance reporting systems.',
      'Contributed to both backend and frontend development while designing flexible business workflows.I built systems that handle complex project logic and help manage daily operations across different departments.',
      'Key Tech:Go,Next.js,PostgreSQL,REST APIs,KPI Tracking,System Design.',
    ],
  },
  {
    name: 'Re-Smart – Sanatorium & Healthcare Management Platform',
    previewImages: [ProjectResmartMedicalStay, ProjectResmartDoctors],
    summary: [
      'Collaborated in a team to develop Re-Smart an enterprise healthcare and accommodation management platform designed for sanatorium facilities,integrating patient treatment operations,hotel reservation workflows,accommodation management and medical service processes within a single scalable system.',
      'The system included patient management,reservation lifecycle management,room occupancy tracking,doctor and nurse administration,medical treatment scheduling,patient medical records,multilingual support,reporting systems,document management and integrated workflow automation for healthcare operations.',
      'Worked on backend and frontend development while implementing APIs,complex business logic and enterprise workflow automation for healthcare focused operational management.',
      'Key Tech:Go,Next.js,PostgreSQL,REST APIs,System Design.',
    ],
  },
  {
    name: 'OrganizationSurvey – QR Based Customer Feedback Platform',
    previewImages: [ProjectOrgsurveyQr, ProjectOrgsurveyFeedback],
    summary: [
      'Developed OrganizationSurvey,a QR based customer feedback platform designed for hotels and enterprise environments to collect real time customer satisfaction data through location specific survey systems.The platform enables organizations to place unique QR codes on kiosk devices,hotel departments,floors or service areas allowing customers to instantly access dedicated surveys linked to a specific location.',
      'The system supports dynamic survey generation,location based QR assignment,emoji based feedback collection for quick customer satisfaction analysis,optional text comments for detailed customer reviews and centralized dashboards for monitoring customer satisfaction across different operational areas.The platform was designed to help organizations identify service quality issues and improve customer experience through structured feedback collection.',
      'Focused on backend API development,database architecture and building efficient survey management system capable of handling location based feedback collection across large organizations.',
      'Key Tech:Go,Next.js,PostgreSQL,REST APIs,Dashboard Design,System Architecture.',
    ],
  },
];
