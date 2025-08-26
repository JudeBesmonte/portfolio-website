"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://aygaepypiusloubktinn.supabase.co/storage/v1/object/public/documents/9a446660-1208-4fd7-a6a0-8d2b47357eb6.jpg"
              alt="Jude Ivan Besmonte portrait"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.div
        className="mt-8 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-sans font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Hi, I'm Jude Ivan Besmonte
        </h1>

        {/* Summary Description */}
        <p className="text-lg sm:text-xl font-sans text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          A Junior Full-Stack Developer from{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            the Philippines 🇵🇭
          </span>{" "}
          who loves learning and creativity. I thrive on building{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            dynamic, user-friendly applications
          </span>{" "}
          and enjoy exploring both front-end and back-end technologies. My focus
          is{" "}
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            React (Next.js)
          </span>{" "}
          and modern web development.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-base font-medium mt-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
