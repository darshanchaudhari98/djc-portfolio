import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "tradediary",
    category: "Trading Journal",
    title: "Trade Diary",
    src: "/assets/projects-screenshots/codingducks/tradediary.png",
    screenshots: ["tradediary.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.reactQuery,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://tradediary.in/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Trading Journal for Smarter Decisions
          </TypographyP>
          <TypographyP className="font-mono ">
            Trade Diary is an AI-powered trading journal that helps traders track, analyze, and improve their trading performance. It provides detailed trade analytics, AI-driven insights, and broker integrations for smarter decision-making.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Detailed trade analytics to track your performance</li>
            <li>AI-driven insights to identify patterns and opportunities</li>
            <li>Broker integrations for seamless data import</li>
            <li>Designed for consistency and discipline in trading</li>
            <li>Helps reduce mistakes and grow steadily</li>
          </ul>
          <TypographyP className="font-mono mt-8">
            Whether you&apos;re a beginner or an experienced trader, Trade Diary helps you identify patterns, reduce mistakes, and grow steadily on your trading journey.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "resumate",
    category: "Resume Builder",
    title: "ResuMate",
    src: "/assets/projects-screenshots/codingducks/Resumate.png",
    screenshots: ["Resumate.png"],
    live: "https://resumate.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.reactQuery,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered, ATS-Focused Resume Builder
          </TypographyP>
          <TypographyP className="font-mono ">
            ResuMate is an AI-powered, ATS-focused resume builder and analyzer designed to help job seekers create resumes that actually get shortlisted. It analyzes job descriptions, optimizes keywords, and scores resumes for ATS compatibility.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Analyzes job descriptions for keyword optimization</li>
            <li>Scores resumes for ATS compatibility</li>
            <li>Smart suggestions to improve your resume</li>
            <li>Clean, professional templates</li>
            <li>Tailor your resume faster and apply with confidence</li>
          </ul>
          <TypographyP className="font-mono mt-8">
            With smart suggestions and clean templates, ResuMate helps you tailor your resume faster and apply with confidence.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "campusrick",
    category: "Mobile App",
    title: "CampusRick",
    src: "/assets/projects-screenshots/codingducks/campusrick.png",
    screenshots: ["campusrick.png"],
    live: "https://campusrick.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.supabase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Smart Campus Rickshaw Management App
          </TypographyP>
          <TypographyP className="font-mono ">
            CampusRick is a smart mobile app designed to simplify and organize rickshaw travel within campuses and nearby areas. It uses a token-based queue system and ride-sharing features to reduce waiting time, crowding, and fare confusion.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Token-based queue system for fair allocation</li>
            <li>Ride-sharing features to reduce costs</li>
            <li>Reduces waiting time and crowding</li>
            <li>Eliminates fare confusion</li>
            <li>Faster pickups for students</li>
          </ul>
          <TypographyP className="font-mono mt-8">
            CampusRick ensures faster pickups, fair allocation, and a smoother experience for both students and rickshaw drivers.
          </TypographyP>
        </div>
      );
    },
  },
];
export default projects;
