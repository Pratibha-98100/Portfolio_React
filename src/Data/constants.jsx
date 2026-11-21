import pic1 from '../Images/pic1.png';
import pic2 from '../Images/pic2.png';
import pic3 from '../Images/pic3.png';
import pic4 from '../Images/pic4.png';
import pic5 from '../Images/pic5.png';
import pic6 from '../Images/pic6.png';
import lpu from '../Images/lpu.png';
import bsc from '../Images/bsc.jpeg';
import kv from '../Images/kv.jpeg';




export const Bio ={
    name: "Pratibha Yadav",
    roles: [
        "Full Stack Developer",
        "Programmer",
    ],
    description:
    "I'm a backend-focused Full Stack Developer with 2+ years of experience building secure REST APIs and multi-tenant SaaS platforms. At FinOpsys, I work with Node.js, Express.js, PostgreSQL, and Snowflake, and I've built AI-powered features using LLM APIs, RAG, and pgvector. I enjoy solving real backend problems like query optimization, rate limiting, role-based access control, and clean, SOLID-based architecture. I hold an MCA from Lovely Professional University and I'm always learning new technologies to build reliable, scalable products.",
  github: "https://github.com/pratibha-98100",
  resume:
    "https://drive.google.com/file/d/11lJOcCC8c888CVXtfX9wjcPevyTez82c/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/pratibha-yadav-73260b216/",
}

const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}`;
const simpleIcon = (slug) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/${slug}.svg`;

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", image: devicon("react/react-original.svg") },
      { name: "JavaScript (ES6+)", image: devicon("javascript/javascript-original.svg") },
      { name: "HTML5", image: devicon("html5/html5-original.svg") },
      { name: "CSS3", image: devicon("css3/css3-original.svg") },
      { name: "Bootstrap", image: devicon("bootstrap/bootstrap-original.svg") },
      { name: "Material UI", image: devicon("materialui/materialui-original.svg") },
      { name: "Axios", image: devicon("axios/axios-plain.svg") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: devicon("nodejs/nodejs-original.svg") },
      { name: "Express.js", image: devicon("express/express-original.svg") },
      { name: "REST API Development" },
      { name: "PostgreSQL", image: devicon("postgresql/postgresql-original.svg") },
      { name: "Supabase", image: devicon("supabase/supabase-original.svg") },
      { name: "MySQL", image: devicon("mysql/mysql-original.svg") },
      { name: "Snowflake", image: simpleIcon("snowflake") },
      { name: "JWT Authentication", image: simpleIcon("jsonwebtokens") },
      { name: "Role-Based Access Control (RBAC)" },
    ],
  },
  {
    title: "AI & LLM",
    skills: [
      { name: "Claude API", image: simpleIcon("anthropic") },
      { name: "LLM API Integration" },
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "Vector Embeddings" },
      { name: "pgvector", image: devicon("postgresql/postgresql-original.svg") },
      { name: "Semantic Search" },
      { name: "AI Chatbots / AI Agents" },
      { name: "OCR & Document Data Extraction" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", image: devicon("git/git-original.svg") },
      { name: "GitHub", image: devicon("github/github-original.svg") },
      { name: "Postman", image: devicon("postman/postman-original.svg") },
      { name: "VS Code", image: devicon("vscode/vscode-original.svg") },
      { name: "Docker", image: devicon("docker/docker-original.svg") },
      { name: "Hostinger VPS", image: simpleIcon("hostinger") },
      { name: "Kafka", image: devicon("apachekafka/apachekafka-original.svg") },
      { name: "Stripe", image: simpleIcon("stripe") },
      { name: "Jest", image: devicon("jest/jest-plain.svg") },
    ],
  },
];



export const projects=[
    {
     id: 0,
     title: "Healthy Life",
     date: "Oct 2023-Nov 2023",
     description:"I have used the technologies React.js, CSS, Firebase etc. Developed a full-stack Doctor Appointment Booking Application where user can check the availability of slots and book the appointment for the respective doctor. Implemented features like role-based user interface, notification, dashboard management and authetication for different type users",
     image: pic1,
     tags: [
       "CSS", "JavaScript", "ReactJs", "Firebase", "AntD", "Redux"
     ],
    category: "web app",
    github: "https://github.com/Pratibha-98100/healthy-life",
    webapp: "https://healthy-life-brn3c8hw0-pratibha-98100.vercel.app/"
    },
    {
    id: 1,
    title: "Crypto Tracker",
    date: "Sep 2023-Sep 2023",
    description:"I have used the technologies React.js, CSS, Coingecko API,chart.js etc. Developed a Crypto Tracker in which user can see search for top 100 Crypto Currencies in real time. Basic functionalities includes graph of crypto currencies which contains price, total volumes, market cap etc. Watch-list is also available for users to see crypto of their choices later.",
    image: pic2,
    tags:[ "React.js", "CSS", "Javascript" , "Material UI", "ChartJs"],
    category: "web app",
    github: "https://github.com/Pratibha-98100/Crypo_Tracker_Project",
    webapp: "https://crypo-tracker-project-6g94.vercel.app",
    },
    {
        id: 2,
        title: "ShopEazy",
        date:"July 2023-July 2023",
        description: "I have used the technologies HTML , CSS , Javascript, API etc. Developed a online shopping application from which user can order different products of their needs",
        image: pic3,
        tags:[ "HTML5","CSS3","JavaScript"],
        category:"web app",
        github: "https://github.com/Pratibha-98100/E-Commerce-Shop",
        webapp: "https://e-commerce-shop-32iq52jna-pratibha-98100.vercel.app/",
    },
    {
        id:3,
        title:"Food App",
        date:"  Oct 2023-Nov 2023",
        description:"I have used the technologies React.js , JavaScript, Node.js, MongoDB, etc. Developed a MERN stack Food Delivery App in which user can place different type of dishes.",
        image: pic4,
        tags:["React.js", "CSS3", "JavaScript", "Node.js", "MongoDB", "Express.js" ],
        category: "web app",
        github:"https://github.com/Pratibha-98100/food-app.git",
        // webapp: "https://google-sheet-97vs0sm4q-pratibha-98100.vercel.app/",
    },
    {
        id:4,
        title:"Google Sheet Clone",
        date:"July 2023-July 2023",
        description:"I have used the technologies HTML , CSS , Javascript etc. Developed a Google Sheet Clone so that users can get ability to quickly organize, analyze data in an intuitive way",
        image: pic5,
        tags:["HTML5", "CSS3", "JavaScript", ],
        category: "web app",
        github:"https://github.com/Pratibha-98100/Google_Sheet",
        webapp: "https://google-sheet-97vs0sm4q-pratibha-98100.vercel.app/",
    },
    {
        id:5,
        title:"Real Time Chat",
        date:"Feb 2024-feb 2024",
        description:"I have used the technologies React.js , CSS , Javascript etc. Developed a Real Time Chat so that person can a have a chat with their friends and family.",
        image: pic6,
        tags:["React.js", "CSS3", "JavaScript","socket.io" ],
        category: "web app",
        github:"https://github.com/Pratibha-98100/Real_Time_Chat.git",
        webapp: "https://real-time-chat-3dpc.onrender.com/",
    },
   
]




export const education =[
    {
        id:0,
        img:lpu,
        school: "Lovely Professional University",
        date: "Oct 2023-Jul 2025",
        grade: "7.83 CGPA",
        desc: "Master of Computer Application",
        degree: "Post Graduation",
    },
    {
        id:1,
        img:bsc,
        school: "Maharaja Chhatrasal Bundelkhand University",
        date: "Jul 2018-Jul 2021",
        grade: "73%",
        desc: "Bachelor of Science - Computer Application",
        degree: "Graduation",
    },
    {
        id:2,
        img: kv,
        school: "Kendriya Vidyalaya, Bina",
        date: "May 2018",
        grade: "62%",
        desc:"I completed my class 12th education at Kendriya Vidyalaya, Bina where I studied Science with Maths.",
        degree: "CBSE(XII), Science with Maths",
    },
    {
        id:3,
        img: kv,
        school: "Kendriya Vidyalaya, Bina",
        date: "May 2016",
        grade: "9.6 CGPA",
        desc:"I completed my class 10th education at Kendriya Vidyalaya, Bina where I studied Science with Maths.",
        degree: "CBSE(X), Science with Maths",
    },
];

export const TimeLineData=[
    {year:2021, text: "Started With basic of DSA"},
    {year:2022, text:"After Expolring On youtube Got Enrolled in AccioJob"},
    {year:2023, text:"Learned And Worked On Project Based On Tech Stack JavaScript, HTML,CSS, ReactJS, Node, Java"}
]




export const experiences = [
  {
    id: 0,
    company: "FinOpsys",
    role: "Full Stack Developer (Backend-Focused)",
    date: "June 2024 – Present",
    location: "Remote",
    type: "Full-time",
    projects: [
      {
        name: "AP Bookkeeping and Automation Platform",
        stack: ["Node.js", "Express.js", "React.js", "Supabase PostgreSQL", "pgvector", "Snowflake", "Claude API"],
        points: [
          "Built REST APIs for bank connectivity, transaction categorization, invoice management, and reporting, secured with JWT authentication and RBAC.",
          "Built an AI Chat Agent using the Claude API (LLM) so users can ask plain-language questions about invoices, vendors, expenses, and due payments and get answers from live company data.",
          "Designed a RAG pipeline with Supabase PostgreSQL and pgvector (document embeddings, similarity search) with company- and permission-scoped retrieval, so users only see their own data.",
          "Built OCR invoice extraction, QuickBooks sync, OTP/email authentication, and AI document Q&A; added rate limiting on auth, OTP, and AI endpoints to prevent abuse and control LLM costs.",
          "Optimized Snowflake queries and pagination, cutting API latency by ~35%; structured the backend in controller–service–repository layers using SOLID principles for testable, extensible modules.",
        ],
      },
      {
        name: "Client Portal (Multi-Tenant SaaS)",
        link: "https://workspace.finopsys.ai",
        stack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "Redis", "Kafka", "Stripe", "LLM API", "Microsoft Graph API", "MS Teams"],
        points: [
          "Architected a multi-tenant SaaS portal with Admin, Accounting Manager, Specialist, and Customer roles, company onboarding, JWT authentication, and RBAC.",
          "Built an AI chat assistant using an external LLM API that answers company-specific queries from project and company documentation, with role-based access control so each user only sees data they are permitted to access.",
          "Built Stripe payment and subscription workflows, invitations, service assignments, and task tracking, reducing manual coordination by ~30%.",
          "Integrated a Microsoft Teams calendar meeting scheduler using the Microsoft Graph API, letting users book meetings from the portal that sync instantly to Teams calendars with auto-generated meeting links.",
          "Used Redis for caching, session/OTP storage, and rate limiting; used Apache Kafka for async event processing, email notifications, and real-time chat updates.",
          "Optimized PostgreSQL queries, reducing dashboard latency by ~30%; deployed the React.js frontend and Node.js backend on a Hostinger VPS.",
        ],
      },
    ],
  },
  {
    id: 1,
    company: "Acciojob",
    role: "Full Stack Development Trainee",
    date: "December 2022 – January 2024",
    location: "Remote",
    type: "Training",
    points: [
      "Built dynamic web apps with React.js, JavaScript, HTML, CSS, and Bootstrap; practiced MySQL and solved 300+ DSA problems.",
    ],
    stack: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL", "DSA"],
  },
];
