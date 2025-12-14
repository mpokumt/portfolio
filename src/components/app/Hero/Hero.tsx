import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconChevronsDown,
    IconEyeCode,
    IconFileDownload,
    IconMailSpark,
    type Icon,
    type IconProps
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useEffect, useState, type ForwardRefExoticComponent, type RefAttributes } from "react";

import { Button } from "@/components";

interface ContactInfo {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    href: string;
    label: string;
}

interface HeroProps {
    isDark: boolean;
    handleScrollToSection: (sectionId: string) => void;
}

export const Hero = ({ isDark, handleScrollToSection }: HeroProps) => {
    const [displayText, setDisplayText] = useState("");

    const heading = "Hi, I'm Melissa Adu-Poku";
    const contactInfo: ContactInfo[] = [
        { icon: IconBrandGithub, href: "https://github.com/mpokumt", label: "GitHub" },
        { icon: IconBrandLinkedin, href: "https://linkedin.com/in/melissa19", label: "LinkedIn" },
        { icon: IconMailSpark, href: "mailto:melissaadupoku@gmail.com", label: "Email" }
    ];

    useEffect(() => {
        let currentIndex = 0;
        const typingSpeed = 40;

        const typeWriter = () => {
            if (currentIndex < heading.length) {
                setDisplayText(heading.slice(0, currentIndex + 1));
                setTimeout(typeWriter, typingSpeed);

                currentIndex++;
            }
        };

        const timer = setTimeout(typeWriter, 500);

        return () => clearTimeout(timer);
    }, []);

    const techStack = [
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "React Native",
        "JavaScript",
        "HTML/CSS",
        "AI/ML"
    ];

    const handleChevronOnClick = () => {
        handleScrollToSection("about");
    };

    return (
        <section
            id="hero"
            className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
                isDark ? "bg-gray-900" : "bg-gray-50"
            }`}
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
                <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75" />
                <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="z-10"
            >
                <div className="max-w-4xl mx-auto px-6 py-20 text-center mt-20">
                    <div className="space-y-8">
                        <div>
                            <h1
                                className={`text-4xl sm:text-5xl lg:text-7xl font-bold ${
                                    isDark ? "text-gray-100" : "text-gray-900"
                                } h-20 lg:h-24`}
                            >
                                {displayText.split(" ").map((word: string, index) => (
                                    <span key={index}>
                                        {word}
                                        {index < displayText.split(" ").length - 1 && " "}
                                    </span>
                                ))}
                                <span className="text-teal-500">.</span>
                                <span className="animate-pulse text-teal-500">|</span>
                            </h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.8 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className={`text-2xl lg:text-3xl font-medium mb-5 ${
                                    isDark ? "text-gray-200" : "text-gray-700"
                                }`}
                            >
                                A Fullstack Software Engineer
                            </div>

                            <p
                                className={`text-lg leading-relaxed max-w-2xl mx-auto mb-20 tracking-wide ${
                                    isDark
                                        ? "text-gray-300 font-extralight"
                                        : "text-gray-600 font-light"
                                }`}
                            >
                                I specialise in building powerful performant applications and user
                                experiences that solve real world painpoints, improve and automate
                                workflows, and leverage AI innovation to solve complex problems.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
                                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        size="lg"
                                        className="bg-teal-500 hover:bg-teal-400 text-white rounded-2xl px-8 py-3 transition-all duration-300 hover:scale-101 hover:shadow-lg hover:shadow-teal-500/25 w-50 text-sm cursor-pointer"
                                        onClick={() => handleScrollToSection("about")}
                                        aria-label="About Me"
                                    >
                                        <IconEyeCode className="w-10 h-10 mr-2 text-lg" />
                                        About Me
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                                    <a
                                        href="/portfolio/my_resume.pdf"
                                        download="Melissa Adu-Poku.pdf"
                                    >
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className={`rounded-2xl px-8 py-3 transition-all duration-300 hover:scale-101 hover:shadow-teal-500/25 w-50 text-sm cursor-pointer ${
                                                isDark
                                                    ? "border-gray-600 text-gray-900 hover:bg-gray-100"
                                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                            }`}
                                            aria-label="Download Resume"
                                        >
                                            <IconFileDownload className="w-5 h-5 mr-2" />
                                            Download Resume
                                        </Button>
                                    </a>
                                </motion.div>
                            </div>

                            <div className="flex gap-4 justify-center pt-8 mb-10">
                                {contactInfo.map((contact: ContactInfo) => (
                                    <a
                                        key={contact.label}
                                        href={contact.href}
                                        className={`p-3 rounded-full transition-all duration-300 hover:scale-105 ${
                                            isDark
                                                ? "bg-gray-800 text-gray-300 hover:bg-teal-500/20 hover:text-teal-400"
                                                : "bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                                        } shadow-lg`}
                                        aria-label={`Link to my ${contact.label}`}
                                    >
                                        <contact.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>

                            <div className="pt-12">
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {techStack.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                                isDark
                                                    ? "bg-gray-800 text-gray-300"
                                                    : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                                            } shadow-md`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <Button
                onClick={handleChevronOnClick}
                className={`absolute bg-transparent hover:bg-transparent bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer ${
                    isDark ? "text-gray-300" : "text-gray-600 shadow-none"
                }`}
                aria-label="Scroll to About Section"
            >
                <IconChevronsDown size={48} stroke={3} />
            </Button>
        </section>
    );
};
