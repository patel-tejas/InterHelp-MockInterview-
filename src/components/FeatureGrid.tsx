import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Custom Interview Creation",
            description:
                "Generate tailored interview questions based on any given job description and create comprehensive interview simulations.",
            icon: <IconTerminal2 />,
        },
        {
            title: "Resume ATS Integration",
            description:
                "Evaluate your resume with our ATS and get detailed feedback to meet specific job requirements.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Personalized Feedback",
            description:
                "Receive constructive feedback on your interview responses, highlighting strengths and areas for improvement.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "Real-time Practice Sessions",
            description:
                "Engage in live practice interviews with automated or human interviewers, covering a variety of question types and difficulty levels.",
            icon: <IconHelp />,
        },
        {
            title: "Progress Tracking",
            description:
                "Monitor your interview performance over time and track your improvements to ensure readiness for real interviews.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Comprehensive Skill Assessment",
            description:
                "Assess your skills against job-specific requirements and highlight key skills and experiences that align with job descriptions.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "Interactive Learning Modules",
            description:
                "Access learning modules to improve interview techniques and strategies with expert tips and best practices.",
            icon: <IconHelp />,
        },
        {
            title: "Mock Interviews",
            description:
                "Schedule and conduct mock interviews to simulate real-world interview scenarios with instant feedback and scoring.",
            icon: <IconEaseInOut />,
        },

    ];
    return (
        <>
            <h1 className='text-2xl md:text-6xl font-bold text-blue-800 text-center px-10'>InterHelp provides</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
