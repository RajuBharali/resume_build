"use client";

import Link from "next/link";
import { Home, BookOpen, FileText, Briefcase, User } from "lucide-react";
import { usePathname } from "next/navigation";

const MobileFooter = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: "Home", icon: Home, href: "/" },
        { name: "Resources", icon: BookOpen, href: "/project-guidance" },
        { name: "Resume", icon: FileText, href: "/resume" },
        { name: "Jobs", icon: Briefcase, href: "/internships" },
        { name: "Profile", icon: User, href: "/profile" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border px-4 py-2 flex justify-between items-center transition-all duration-300">
            {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 min-w-[64px] transition-all duration-200 ${isActive ? "text-primary translate-y-[-2px]" : "text-muted hover:text-primary"
                            }`}
                    >
                        <div className={`p-2 rounded-full transition-colors ${isActive ? "bg-primary/10" : "bg-transparent"
                            }`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider">
                            {item.name}
                        </span>
                        {isActive && (
                            <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full" />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
};

export default MobileFooter;
