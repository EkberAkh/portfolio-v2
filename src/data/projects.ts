import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "E-AHIK",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "IDDA Award Winner"],
    image: {
      LIGHT: "/images/projects/ahik.png",
      DARK: "/images/projects/ahik.png",
    },
  },
  {
    index: 1,
    title: "UWORK",
    href: "/projects",
    tags: ["React", "TypeScript", "Next.js", "Team Lead"],
    image: {
      LIGHT: "/images/projects/uwork.png", // <!-- TODO: Replace with your image -->
      DARK: "/images/projects/uwork.png", // <!-- TODO: Replace with your image -->
    },
  },
  {
    index: 2,
    title: "E-Keyfiyyet",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Government Portal"],
    image: {
      LIGHT: "/images/projects/eKeyfiyyet.png",
      DARK: "/images/projects/eKeyfiyyet.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "E-AHIK",
    favicon: "/images/projects/logos/eahik.ico", // <!-- TODO: Replace with your image -->
    imageUrl: [
      "/images/projects/ahik.png", // <!-- TODO: Replace with your image -->
      "/images/projects/ahik2.png", // <!-- TODO: Replace with your image -->
    ],
    description:
      "IDDA Digital Project of the Year award-winning government portal. Built with Next.js and TypeScript, delivering a scalable solution for the Agency for Sustainable and Operative Social Security.",
    liveWebsiteHref: "https://e-ahik.az/",
  },
  {
    name: "UWORK",
    favicon: "/images/projects/logos/uwork.ico", // <!-- TODO: Replace with your image -->
    imageUrl: [
      "/images/projects/uwork.png", // <!-- TODO: Replace with your image -->
      "/images/projects/uwork2.png", // <!-- TODO: Replace with your image -->
    ],
    description:
      "Azerbaijan's #1 job matching platform that connects opportunities with the right candidates in just 4 seconds. Leading the frontend team as Team Lead, managing GitHub workflows, and conducting technical interviews.",
    liveWebsiteHref: "https://uwork.az/",
  },
  {
    name: "E-Keyfiyyet",
    favicon: "/images/projects/logos/ekeyfiyyet.ico", // <!-- TODO: Replace with your image -->
    imageUrl: [
      "/images/projects/eKeyfiyyet.png", // <!-- TODO: Replace with your image -->
      "/images/projects/eKeyfiyyet2.png", // <!-- TODO: Replace with your image -->
    ],
    description:
      "Government quality management portal built with Next.js and TypeScript. Part of the government-scale projects delivered at AISTGroup.",
    liveWebsiteHref: "https://e-keyfiyyet.gov.az/home",
  },
  {
    name: "E-Reqabet",
    favicon: "/images/projects/logos/ereqabet.ico", // <!-- TODO: Replace with your image -->
    imageUrl: [
      "/images/projects/eReqabet.png", // <!-- TODO: Replace with your image -->
      "/images/projects/eReqabet2.png", // <!-- TODO: Replace with your image -->
    ],
    description:
      "State Competition and Consumer Protection portal. A government-scale application developed using modern frontend technologies.",
    liveWebsiteHref: "https://e-reqabet.gov.az/home",
  },
  {
    name: "E-TTKF",
    favicon: "/images/projects/logos/ettkf.ico", // <!-- TODO: Replace with your image -->
    imageUrl: [
      "/images/projects/eTtkf.png", // <!-- TODO: Replace with your image -->
      "/images/projects/eTtkf2.png", // <!-- TODO: Replace with your image -->
    ],
    description:
      "Bank module for the education sector. Successfully migrated from Angular to React, improving performance and maintainability.",
    liveWebsiteHref: "https://e-ttkf.edu.az/",
  },
  {
    name: "Guideinbaku",
    favicon: "/images/projects/logos/guideinbaku.ico", // <!-- TODO: Replace with your image -->
    imageUrl: [
      "/images/projects/guideinbaku.png", // <!-- TODO: Replace with your image -->
      "/images/projects/guideinbaku2.png", // <!-- TODO: Replace with your image -->
    ],
    description:
      "Travel and tourism guide platform for Baku, Azerbaijan. Helping tourists discover the best of the city.",
    liveWebsiteHref: "https://www.guideinbaku.com/en",
  },
  {
    name: "Digimagg",
    favicon: "/images/projects/logos/digimagg.ico", // <!-- TODO: Replace with your image -->
    imageUrl: [
      "/images/projects/digimagg.png", // <!-- TODO: Replace with your image -->
      "/images/projects/digimagg2.png", // <!-- TODO: Replace with your image -->
    ],
    description:
      "Digital marketing and e-commerce platform. Modern web application built with React and Next.js.",
    liveWebsiteHref: "https://digimagg.com/",
  },
  {
    name: "AHIK Internal Registry",
    imageUrl: ["/images/projects/confidential-placeholder.svg"],
    description:
      "Internal registry system for AHIK. Secure government application for managing records and data. (Confidential - Internal Use Only)",
  },
  {
    name: "Partner Integration System (TIS)",
    imageUrl: ["/images/projects/confidential-placeholder.svg"],
    description:
      "Internal partner integration system for AHIK. Architected to enable seamless integration with external partners and systems. (Confidential - Internal Use Only)",
  },
  {
    name: "QMKIK Portal",
    imageUrl: ["/images/projects/confidential-placeholder.svg"],
    description:
      "Internal portal for State Committee for IDPs (Internally Displaced Persons). Government-scale application serving refugees and displaced communities. (Confidential - Internal Use Only)",
  },
  {
    name: "ATIAHI Portal",
    imageUrl: ["/images/projects/confidential-placeholder.svg"],
    description:
      "Internal portal for Education Trade Union. Supporting education workers across Azerbaijan. (Confidential - Internal Use Only)",
  },
];
