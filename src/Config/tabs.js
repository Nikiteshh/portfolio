import About from "../components/About";
import Contact from "../components/Contact";

const tabs = [
  {
    title: "About",
    icon: "A",
    content: <About />,
  },
  {
    title: "Projects",
    icon: "P",
    content: "project-project-project",
  },
  {
    title: "Contact",
    icon: "C",
    content: <Contact />,
  },
  {
    title: "Resume",
    icon: "R",
    content: "resume-resume-resume",
  },
];

export default tabs;
