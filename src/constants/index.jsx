import { FaGithub, FaLinkedin } from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
// import project7 from "../assets/project7.webp";
// import project8 from "../assets/project8.webp";
// import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  // { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, TypeScript, C++, Tailwind, Bootstrap, Javascript, WordPress,";

export const PROJECTS = [
  {
    id: 1,
    title: "Google Search Clone",
    description:
      "Google-like search engine with React, Tailwind CSS, and Rapid API for real-time web, image, news, and video searches.",
    imgSrc: project1,
    link: "https://github.com/KalpeshKumar-09/Google-Search-Clone",
  },
  {
    id: 2,
    title: "Fitness Exercise App",
    description:
      "A fitness exercise application with exercise data and youtube data.",
    imgSrc: project2,
    link: "https://github.com/KalpeshKumar-09/Fitness-Exercises-App",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://example.com/portfolio-website",
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "Task management system using React.js, Context API, and Tailwind CSS for efficient task distribution and progress tracking. ",
    imgSrc: project4,
    link: "https://github.com/KalpeshKumar-09/Employee-Management-System-using-React-and-LocalStorage",
  },
  {
    id: 5,
    title: "Weather Forecast Application",
    description:
      "Weather app providing real-time updates and seven-day forecasts worldwide using the OpenWeatherMap API",
    imgSrc: project5,
    link: "https://github.com/KalpeshKumar-09/Weather-Forecast-App",
  },
  {
    id: 6,
    title: "Expense Tracker App",
    description:
      "The Expense Tracker application built with React and Context API.",
    imgSrc: project6,
    link: "https://github.com/KalpeshKumar-09/Expense-Tracker-App",
  },
  // {
  //   id: 7,
  //   title: "Fitness Tracker",
  //   description: "A mobile application to track fitness activities and goals.",
  //   imgSrc: project7,
  //   link: "https://example.com/fitness-tracker",
  // },
  // {
  //   id: 8,
  //   title: "Recipe App",
  //   description: "An app for browsing and saving various cooking recipes.",
  //   imgSrc: project8,
  //   link: "https://example.com/recipe-app",
  // },
  // {
  //   id: 9,
  //   title: "Weather Dashboard",
  //   description:
  //     "A weather dashboard providing current weather data and forecasts.",
  //   imgSrc: project9,
  //   link: "https://example.com/weather-dashboard",
  // },
];

export const ABOUT =
  "As a dedicated Front End Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in front-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

// export const EXPERIENCES = [
//   {
//     company: "Google",
//     role: "Software Engineer",
//     year: "12/2023 - Present",
//     description:
//       "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
//   },
//   {
//     company: "Facebook",
//     role: "Frontend Developer",
//     year: "01/2021 - 11/2023",
//     description:
//       "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
//   },
// ];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/KalpeshKumar-09",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/kalpesh-kumar/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "sutharkalpesh101@gmail.com",
  phone: "+91 - 8239269179",
};
