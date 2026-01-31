import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Akbar Akhundov | Frontend Developer"
        description="Explore the professional portfolio of Akbar Akhundov, a Frontend Engineer specializing in React and Next.js ecosystems. Discover award-winning government-scale projects and modern web solutions."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Akbar Akhundov - Frontend Developer",
          description:
            "Dive into the world of web development with Akbar Akhundov. Discover a Frontend Engineer delivering award-winning projects using React, Next.js, and TypeScript.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Akbar Akhundov - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, React Developer, Next.js Developer, TypeScript, Government Projects, IDDA Award, Web Developer, JavaScript, Tailwind CSS, Team Lead",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
