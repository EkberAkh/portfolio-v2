import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import ContactInfoSection from "@/components/contact-info-section";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Akbar Akhundov | Frontend Developer"
        description="Learn more about Akbar Akhundov, a Frontend Engineer specializing in React and Next.js ecosystems with experience in government-scale projects."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Akbar Akhundov - Frontend Developer",
          description:
            "Dive into the story of Akbar Akhundov, a Frontend Engineer. Discover experiences, skills, and passion for delivering award-winning web solutions.",
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
              "Frontend Developer, React Developer, Next.js Developer, TypeScript, Government Projects, IDDA Award, Web Developer, JavaScript, Professional Journey",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
      <ContactInfoSection />
    </>
  );
}
