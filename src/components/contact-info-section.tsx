import { ReactNode, useRef } from "react";

import { motion, useScroll } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";

import FadeUp from "@/animation/fade-up";

interface ContactItem {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

const CONTACT_INFO: ContactItem[] = [
  {
    icon: <FiPhone className="h-6 w-6" />,
    label: "Phone",
    value: "+994 51 588 20 70",
    href: "tel:+994515882070",
  },
  {
    icon: <FiMail className="h-6 w-6" />,
    label: "Email",
    value: "akbarakhundov.dev@gmail.com",
    href: "mailto:akbarakhundov.dev@gmail.com",
  },
  {
    icon: <FiLinkedin className="h-6 w-6" />,
    label: "LinkedIn",
    value: "linkedin.com/in/akbarakhundov",
    href: "https://www.linkedin.com/in/akbarakhundov",
  },
  {
    icon: <FiGithub className="h-6 w-6" />,
    label: "GitHub",
    value: "github.com/EkberAkh",
    href: "https://github.com/EkberAkh",
  },
];

export default function ContactInfoSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <div className="mx-auto my-40 max-w-7xl px-6 sm:px-14  md:px-20">
      <h2 className="md:mb-30 mb-16 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-8xl">
        Contact
      </h2>
      <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-5 h-[calc(100%-3rem)] w-[5px] origin-top rounded-lg bg-accent"
        ></motion.div>
        <ul className="ml-4 w-full items-center">
          {CONTACT_INFO.map((item, index) => (
            <li
              key={index}
              className={`relative mx-auto w-full ${
                index === CONTACT_INFO.length - 1 ? "" : "mb-8 pb-8"
              }`}
            >
              <FadeUp duration={0.5} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <span className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent p-2 text-background">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-foreground transition-colors hover:text-accent sm:text-xl"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
