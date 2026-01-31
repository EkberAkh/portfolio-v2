import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiGraphql,
  SiReactquery,
  SiSwagger,
  SiAntdesign,
  SiFigma,
  SiJira,
} from "react-icons/si";
import { RiRobot2Fill } from "react-icons/ri";
import { FramerMotionIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML5",
        icon: HtmlSvg,
      },
      {
        name: "CSS3",
        icon: CsssSvg,
      },
      {
        name: "SASS/SCSS",
        icon: SassSvg,
      },
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "TypeScript",
        icon: TypescriptSvg,
      },
    ],
  },
  {
    sectionName: "Frontend Frameworks & Libraries",
    skills: [
      {
        name: "React JS",
        icon: ReactjsSvg,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Redux Toolkit",
        icon: ReduxSvg,
      },
      {
        name: "React Query",
        icon: SiReactquery,
      },
      {
        name: "Zustand",
        icon: ReduxSvg,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Ant Design",
        icon: SiAntdesign,
      },
      {
        name: "Framer Motion",
        icon: FramerMotionIcon,
      },
    ],
  },
  {
    sectionName: "Backend & APIs",
    skills: [
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
      },
      {
        name: "WebSocket/WebRTC",
        icon: SiSocketdotio,
      },
      {
        name: "Swagger",
        icon: SiSwagger,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    sectionName: "Cloud & DevOps",
    skills: [
      {
        name: "AWS (S3, EC2, IAM)",
        icon: AwsSvg,
      },
      {
        name: "AWS (EBS, ASG, ELB)",
        icon: AwsSvg,
      },
      {
        name: "AWS (RDS, Lambda)",
        icon: AwsSvg,
      },
      {
        name: "Git (GitHub/GitLab)",
        icon: GitSvg,
      },
    ],
  },
  {
    sectionName: "Tools & Technologies",
    skills: [
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
      {
        name: "Jira/ClickUp/Redmine",
        icon: SiJira,
      },
      {
        name: "AI Agent Development",
        icon: RiRobot2Fill,
      },
    ],
  },
];
