import Drink from '../assets/drink.jpg';
import Figma from '../assets/figma.jpg';
import Chat from '../assets/chat.jpg';
import Source from '../assets/source.jpg';
import Source2 from '../assets/source2.jpg';
import Manager from '../assets/manager.jpg';
import Facebook from '../assets/facebook.jpg';
import Avt from '../assets/avt.jpg';
export const projects = [
  {
    id: 1,
    title: 'Order Drink Platform',
    description: 'A website built to fulfill users’ needs of buying soft drinks, with features for product management such as adding and removing items, implemented through WordPress.',
    image: Drink,
    category: 'web',
    technologies: ['PHP', 'CSS', 'JavaScript', 'SQL', 'WordPress'],
    liveUrl: 'https://order-drink.42web.io/',
    githubUrl: 'https://github.com/tranhoangvu2205/ecommerce-website',
    featured: true,
},
    {
    id: 2,
    title: 'Online Source – Learning Platform',
    description: 'A responsive web application for exploring, filtering, and paginating courses across categories. Built with ReactJS and Tailwind CSS for a clean, mobile-friendly experience.',
    image: Source,
    category: 'web',
    technologies: ['ReactJS', 'Javascript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://online-source.vercel.app/',
    githubUrl: 'https://github.com/THoangVu/OnlineSource',
    featured: false,
    },
    {
    id: 3,
    title: 'Admin Dashboard (UI Design)',
    description: 'Figma-based UI design for an admin dashboard, focusing on layout and usability.',
    image: Figma,
    category: 'other',
    technologies: ['Figma'],
    liveUrl: 'https://www.figma.com/design/TFlmJPtieZRlwVdsltcZxW/Admin',
    githubUrl: 'https://www.figma.com/design/TFlmJPtieZRlwVdsltcZxW/Admin',
    featured: false,
  },
  {
    id: 4,
    title: 'ChatApp',
    description: 'A real-time chat application with user authentication, built using React and Redux for the frontend, and ASP.NET Core + MongoDB for the backend.',
    image: Chat,
    category: 'web',
    technologies: ['React', 'Redux', 'Bootstrap', 'ASP.NET Core', 'C#', 'MongoDB'],
    liveUrl: 'null',
    githubUrl: 'https://github.com/duongkz365/ChatBF',
    featured: false,
  },
  
  {
    id: 5,
    title: 'Clothing Management System',
    description: 'A desktop application for clothing management, built with Java and SQL Server..',
    image: Manager,
    category: 'other',
    technologies: ['Java', 'SQL Server'],
    liveUrl: 'null',
    githubUrl: 'https://github.com/tranhoangvu2205/QuanlyJava',
    featured: false,
  },
  {
    id: 6,
    title: 'Course Management API',
    description: 'Backend API for course management, built using Node.js and MongoDB.',
    image: Source2,
    category: 'web',
    technologies: ['JavaScript', 'SCSS', 'Node.js', 'MongoDB'],
    liveUrl: 'null',
    githubUrl: 'https://github.com/tranhoangvu2205/course-web',
    featured: false,
  },
  {
    id: 7,
    title: 'Facebook Fake',
    description: 'A Facebook simulation project, implementing the basic features of a social network, using frontend technologies and Java Spring Boot for the backend.',
    image: Facebook,
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Java Spring Boot'],
    liveUrl: 'null',
    githubUrl: 'https://github.com/buikien2k2/SilkRoad',
    featured: false,
  },
  {
    id: 8,
    title: 'My profile',
    description: 'A personal portfolio website built with ReactJS and Tailwind CSS to showcase my skills, experience, and projects.',
    image: Avt,
    category: 'web',
    technologies: ['ReactJS', 'Tailwind CSS', 'Vite'],
    liveUrl: 'null',
    githubUrl: 'https://github.com/tranhoangvu2205/mini-react-project',
    featured: false,
  },
];
