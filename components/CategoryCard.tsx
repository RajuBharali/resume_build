"use client";

import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
    title: string;
    icon: LucideIcon;
    color: string;
    count?: string;
    href?: string;
}

import Link from "next/link";

const CategoryCard = ({ title, icon: Icon, color, count, href }: CategoryCardProps) => {
    const CardContent = (
        <div className="group relative bg-white p-6 rounded-3xl border border-border/50 soft-shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex flex-col items-center text-center gap-4 h-full">
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12"
                style={{ backgroundColor: `${color}15`, color: color }}
            >
                <Icon className="w-8 h-8" />
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {title}
                </h3>
                {count && (
                    <span className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-wider">
                        {count}
                    </span>
                )}
            </div>
        </div>
    );

    if (href) {
        return <Link href={href} className="block h-full">{CardContent}</Link>;
    }

    return CardContent;
};

export default CategoryCard;
