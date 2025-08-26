"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a student from{" "}
        <span className="font-medium">the Philippines 🇵🇭</span> who is
        passionate about{" "}
        <span className="font-medium">learning and creativity</span>. I thrive
        on building{" "}
        <span className="font-medium">dynamic, user-friendly applications</span>{" "}
        and enjoy exploring both front-end and back-end technologies.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, Node.js, C#, .NET, Java, MySQL, and
          PostgreSQL
        </span>
        . I am always looking to learn new technologies and am currently
        expanding my skillset with{" "}
        <span className="font-medium">modern web technologies</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy exploring
        new technologies, working on personal projects, and connecting with the
        developer community. I'm passionate about{" "}
        <span className="font-medium">continuous learning</span> and staying
        up-to-date with the latest trends in web development. I'm always excited
        to take on new challenges and collaborate on interesting projects.
      </p>
    </motion.section>
  );
}
