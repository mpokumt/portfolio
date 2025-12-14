import { IconFileDownload, IconMoonStars, IconSun } from "@tabler/icons-react";

import { Button } from "@/components";
import { NavItem, type NavItemInfo } from "./NavItem";

interface NavbarProps {
    isDark: boolean;
    handleToggleTheme: () => void;
    activeSection: string;
    handleScrollToSection: (sectionId: string) => void;
    sections: NavItemInfo[];
}

export const Navbar = ({
    isDark,
    handleToggleTheme,
    handleScrollToSection,
    activeSection,
    sections
}: NavbarProps) => {
    return (
        <nav
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
                isDark
                    ? "bg-gray-900/70 border-gray-700/30 backdrop-blur-xl"
                    : "bg-white/70 border-gray-200/30 backdrop-blur-md"
            } border rounded-3xl px-8 py-4 shadow-2xl hover:shadow-3xl min-w-max`}
            style={{
                backdropFilter: "blur(20px)",
                boxShadow: isDark
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
            }}
        >
            <div className="flex items-center gap-0 justify-between sm:gap-65 md:gap-0 lg:gap-25 ">
                <a onClick={() => handleScrollToSection("hero")}>
                    <img
                        className="cursor-pointer mr-4"
                        src="/portfolio/favicon.svg"
                        alt="engineer portfolio logo"
                        width={40}
                        height={40}
                    />
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {sections.map((navItem: NavItemInfo) => (
                        <NavItem
                            key={navItem.id}
                            navItem={navItem}
                            handleScrollToSection={handleScrollToSection}
                            activeSection={activeSection}
                            isDark={isDark}
                        />
                    ))}
                </div>

                <div className="flex items-center gap-4 ml-0 md:ml-10">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleToggleTheme}
                        className={`rounded-full transition-all duration-300 ${
                            isDark
                                ? "hover:bg-white/10 text-gray-300"
                                : "hover:bg-black/10 text-gray-600"
                        }`}
                        aria-label="Toggle Theme"
                    >
                        {isDark ? (
                            <IconSun className="w-4 h-4" />
                        ) : (
                            <IconMoonStars className="w-4 h-4" />
                        )}
                    </Button>

                    <a href="/portfolio/my_resume.pdf" download="Melissa Adu-Poku.pdf">
                        <Button
                            size="lg"
                            className={`rounded-2xl transition-all duration-300 px-6 hover:scale-101 cursor-pointer ${
                                isDark
                                    ? "bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-500/20"
                                    : "bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20"
                            }`}
                            aria-label="Download Resume"
                        >
                            <IconFileDownload className="hidden md:flex w-4 h-4 mr-2" />
                            Download Resume
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};
