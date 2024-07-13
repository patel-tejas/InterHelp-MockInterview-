"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { AnimatedModalDemo } from "./dashboardBtn";
import Link from "next/link";

export function HeroHighlightDemo() {
    return (
        <>
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    Land your dream job with <Highlight className="text-black dark:text-white">InterHelp</Highlight>!
                    The ultimate platform to <Highlight className="text-black dark:text-white">create,
                        practice and perfect</Highlight> your interview skills. 🚀
                </motion.h1>
                <div className="flex items-center justify-center mt-10">

                    <button className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            <Link href={"/dashboard"}>
                            Dashboard
                            </Link>
                        </div>
                    </button>
                </div>
            </HeroHighlight>
        </>

    );
}
