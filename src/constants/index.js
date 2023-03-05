import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    ubermap,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "Back-end Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  

  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Center for Integrative Learning and Life Design, Johns Hopkins University",
      iconBg: "#383E56",
      date: "Jan 2023 - Apr 2023",
      points: [
        "Front-end Dev: Built 10+ SPAs and static websites with React and Tailwind CSS, applied React Hooks and ES6 for state management and scaling, renewed the whole career system, reduced single page dev time from 3 days to 0.5 day",
        "Web Design: Delivered 12 career page designs using Canva and Figma, incorporated agile dev for continuous delivery and weekly retrospectives, increased ASD by 85% and boosted community PV from 4k to 27k",
        "Database Dev: Created collections to store forms and comments data using Node.js and built-in NoSQL database"
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Wicresoft",
      iconBg: "#E6DEDD",
      date: "Oct 2021 - May 2022",
      points: [
        "Front-end Dev: Created a Learning Management System (LMS) with 30+ reusable UI units using Next.js, D3.js, Tailwind CSS and TypeScript, ensured optimal learning experience for over 7000 students",
        "Back-end Dev: Fabricated features such as Matplotlib visualization unification, dashboards data sourcing and user segmentation tool for the Django data microservices, shipped the app 35 days ahead of Q4 OKR",
        "Data Middleware: Developed async GraphQL APIs to integrate 20+ third-party endpoints into an employee self-service portal with Apollo and Express.js, optimized response time by 75% and saved ¥300,000 HR labor expenses",
        "Site Reliability: Wrote and automated unit and E2E tests on the cross-department OA tool’s front-end codes using Jest and Cypress, achieved 90% project coverage, streamlined 30% debugging efficiency for 5 senior engineers",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Northeastern University (CN)",
      iconBg: "#383E56",
      date: "Feb 2021 - May 2021",
      points: [
        "Back-end Dev: Developed RESTful web services for data acquisition sensors’ JSON data, enabled on-the-spot CRUD operations with Redis, SpringBoot, Postman and HTTP, revamped data acquisition pipelines by 40% smarter",
        "Database Design: Modified 5+ schemas in MySQL database, combined AWS S3 for unstructured files storage",
        "System Sustainability: Containerized lab servers using Docker and hosted in Kubernetes clusters on cloud, deployed a CI/CD pipeline for team co-development with Gitlab, cut research team’s time cost by half"
      ],
    },
    {
      title: "Product Operations Intern",
      company_name: "OPPO",
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Dec 2020",
      points: [
        "IT Operations: Supported OPPO Game Center, improved Ads and notification push efficiency through data analysis"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Uber Map Services",
      description:
        "Uber Map Services Clone, implemented ride ordering, location memorizing and destination setting, supported map pinning, rides sharing and multi-stop setting.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
        {
          name: "Google Cloud",
          color: "blue-text-gradient",
        },
        {
          name: "Expo",
          color: "green-text-gradient",
        },
      ],
      image: ubermap,
      source_code_link: "https://github.com/RicardoChaseCo/Uber-Map-Services",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };