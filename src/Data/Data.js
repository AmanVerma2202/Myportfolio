import cloud from "../Image/cloud.svg"
import app from "../Image/app.svg"
import docker from "../Image/dock.svg"
import kubernetes from "../Image/kubernetes.svg"
import react from "../Image/re.svg"
import node from "../Image/nodejs.svg"
import express from "../Image/express.svg"
import python from "../Image/pythonn.svg"
import tailwind from "../Image/tail.svg"
import postgresql from "../Image/postgresql.svg"
import nextjs from "../Image/next.svg"
import javascript from "../Image/javascript.svg"
import cpp from "../Image/cpp.svg"
import mongodb from "../Image/mongodb.svg"
import git from "../Image/github.svg"
import ts from "../Image/ts.svg"
import redux from "../Image/redux.svg"
import spreadsheet from "../Image/spreadsheets.svg"

import aman from "../Image/amanY.jpeg"
import sanskruti from "../Image/sanskruti.jpeg"
import sir from "../Image/Sir.jpeg"
import akshaya from "../Image/akshaya.jpeg"
import pratyaksh from "../Image/pratyaksh.jpeg"


import exp1 from "../Image/exp1.jpeg"
import exp2 from "../Image/exp2.jpeg"


import rj from "../Image/rj.jpeg"
import aggregate from "../Image/aggregate.jpeg"
import superjoin from "../Image/super.jpg"
import hirewise from "../Image/hirewise.jpeg"


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  
];

export const gridItems = [
  {
    id: 1,
    title: "I value teamwork and emphasize transparent communication to achieve shared goals. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I adapt to any time zone for smooth communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A tech-savvy individual with a strong enthusiasm for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on RJ&Snacks and open source",
    description: "Insider",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to team up on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    git:"https://github.com/AmanVerma2202/AGGREGATE",
    title: "Aggregate - Web Application for Farmers",
    des: "An agricultural app providing NPK-based crop insights, increasing yields by 25%.",
    img: aggregate,
    iconLists: [react, tailwind, javascript, node, redux],
    link: "https://aggregate-f-7is6.vercel.app/",
  },
  {
    id: 2,
    git:"https://github.com/AmanVerma2202/HireWise",
    title: "HireWise- Mock Interview Application",
    des: "Hire Wise offers an interactive platform for job seekers to ace their interviews.",
    img: hirewise,
    iconLists: [nextjs,tailwind,ts,postgresql],
    link: "https://hireewisee.vercel.app/",
  },
  {
    id: 3,
    git:"https://github.com/AmanVerma2202/RJ-Snacks",
    title: "RJ&Snacks- Nagercoil chips web application",
    des: "Nagercoil Chips web app, built with MERN, boosted online sales by 50%.",
    img: rj,
    iconLists: [react, tailwind,  mongodb, node,redux],
    link: "https://rjfrontend.onrender.com/",
  },
  {
    id: 4,
    git:"https://github.com/AmanVerma2202/SuperJoin",
    title: "Superjoin",
    des: "A solution for real-time sync between Google Sheets and databases (PostgreSQL), updating both on changes.",
    img: superjoin,
    iconLists: [postgresql, node,express,spreadsheet],
    link: "https://github.com/AmanVerma2202/SuperJoin",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of collaborating with Aman on two projects, Aggregate and RJ Snack. Their expertise as a web developer stood out from day one. Aman brought incredible technical skills to the table, especially in Reactjs and javascript, and their ability to solve complex problems ensured the success of both projects.he is not only a skilled developer but also a great team player and an excellent teacher from whom I have learned many things and will continue to learn.",
    name: "Sanskruti Mansoriya",
    image:sanskruti,
    title: "TCS",
  },
  {
    quote:
      "I’ve had the privilege of knowing Aman Verma since our school days, and he has always been a standout individual. His sincerity and honesty form the foundation of his exceptional character. Aman is highly intelligent, hardworking, and approaches every task with unwavering dedication.What truly sets Aman apart is his commitment to excellence and his ability to consistently deliver high-quality results. He’s incredibly professional, responsive, and ensures that every project he undertakes reflects his passion for development.If you’re looking for someone who combines integrity, intellect, and an unmatched work ethic, Aman Verma is the ideal person to collaborate with.",
    name: "Aman Yadav",
    image:aman,
    title: "SDE Intern,Ultimate Kronos Group",
  },
  {
    quote:
      "I've known Aman Verma since our school days, and his dedication and work ethic have always stood out.He’s incredibly professional, quick to respond, and genuinely invested in delivering great results. His passion for development shines through in everything he does. If you’re looking for someone who truly cares about elevating your website and brand, Aman is the perfect choice.",
    name: "Akshaya Pratap Singh",
    image:akshaya,
    title: "Samsung(Upcoming SDE)",
  },
  {
    quote:
      "I met Aman Verma almost 8 years ago when he was in 9th standard.I had been his mentor for four long years. I have seen him growing from an ordinary student to a promising scholar. I feel extremely proud to be his teacher. I have observed many qualities in him in later years such as determination, hard work, dedication, a good listener, caring and soft-spoken. Above his excellent academic qualities he is , no doubt, a very good human being that I like most.The last one that I must mention here, he is stubborn towards his goals. Such a great spirit not to give up till the end. I wish him a bright future.",
    name: "Mahesh Kumar Sharma",
    image:sir,
    title: "Government Teacher, M. Sc., B.Ed.",
  },
  {
    quote:
      "Working with Aman was like catching lightning in a bottle! His innovative ideas and unstoppable enthusiasm turned our project into an exciting journey rather than just a task to complete. From late-night brainstorming sessions to perfecting the final details, he brought a spark that ignited the whole team. If you're looking for someone who can elevate your project from ordinary to extraordinary, Aman is the creative powerhouse you need by your side.",
    name: "Pratyaksh Roy",
    image:pratyaksh,
    title: "Ex-ML Engineer Intern,Sarvam",
  },
];

export const skill = [
  {
    id: 1,
    name: "cloudinary",
    img: cloud,
    nameImg: "Cloudinary",
  },
  {
    id: 2,
    name: "appwrite",
    img:app,
    nameImg: "Appwrite",
  },
  {
    id: 3,
    name: "docker.",
    img: docker,
    nameImg: "Docker",
  },
  {
    id: 4,
    name: "Kubernetes",
    img: kubernetes,
    nameImg: "Kubernetes",
  },
  {
    id: 5,
    name: "ReactJs",
    img: react,
    nameImg: "ReactJS",
  },
  {
    id: 6,
    name: "NodeJs",
    img: node,
    nameImg: "NodeJs",
  },
  {
    id: 7,
    name: "Express",
    img: express,
    nameImg: "Express",
  },
  {
    id: 8,
    name: "Python",
    img: python,
    nameImg: "Python",
  },
  {
    id: 9,
    name: "Tailwind",
    img: tailwind,
    nameImg: "Tailwind",
  },
  {
    id: 10,
    name: "PostgreSQL",
    img: postgresql,
    nameImg: "PostgreSQL",
  },
  {
    id: 11,
    name: "NextJs",
    img: nextjs,
    nameImg: "NextJs",
  },
  {
    id: 12,
    name: "JavaScript",
    img: javascript,
    nameImg: "JavaScript",
  },
  {
    id: 13,
    name: "C++",
    img: cpp,
    nameImg: "C++",
  },
  {
    id: 14,
    name: "MongoDB",
    img: mongodb,
    nameImg: "MongoDB",
  },
  {
    id: 15,
    name: "Git",
    img: git,
    nameImg: "Github",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Python Developer",
    desc: "Pioneered a solution that analyzes PDFs with PyMuPDF and Tesseract, highlights text mismatches, and enables correct annotated PDF downloads.",
    className: "md:col-span-2",
    thumbnail: exp1,
  },
  {
    id: 2,
    title: "Full Stack Developer - Freelance",
    desc: "Designed and developed Nagercoil chips for client using Reactjs, MongoDB, Express, NodeJs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: exp2,
  },
  
];

export const socialMedia = [
  {
    id: 1,
    link:"https://github.com/AmanVerma2202",
    img: "/git.svg",
  },
  {
    id: 2,
    link:"https://x.com/akaAmanVerma",
    img: "/twit.svg",
  },
  {
    id: 3,
    link:"https://www.linkedin.com/in/akaamanverma/",
    img: "/link.svg",
  },
  {
    id: 4,
    link:"https://leetcode.com/u/akaAmanVerma/",
    img: "/leetcode.png",
  },
];

// export const profile={
//   image:"../../Image/ama.jpeg"
// }
