"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Cpu, Layers, Wrench } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    description: string;
    technologies: string[];
    features: string[];
    components: string[];
    details: React.ReactNode;
}

const ProjectCard = ({
    title,
    category,
    difficulty,
    description,
    technologies,
    features,
    components,
    details
}: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getDifficultyColor = (diff: string) => {
        switch (diff) {
            case "Beginner": return "bg-green-100 text-green-700";
            case "Intermediate": return "bg-yellow-100 text-yellow-700";
            case "Advanced": return "bg-red-100 text-red-700";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-border soft-shadow overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {category}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getDifficultyColor(difficulty)}`}>
                                {difficulty}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
                    </div>
                </div>

                <p className="text-muted leading-relaxed mb-6">
                    {description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-sm font-bold text-foreground uppercase tracking-wide">
                            <Cpu size={16} className="text-primary" /> Technologies
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, idx) => (
                                <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium border border-slate-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-sm font-bold text-foreground uppercase tracking-wide">
                            <Wrench size={16} className="text-primary" /> Key Components
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {components.map((comp, idx) => (
                                <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium border border-slate-200">
                                    {comp}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {isExpanded && (
                    <div className="border-t border-border pt-6 mt-6 animate-in fade-in slide-in-from-top-4">
                        <div className="mb-6">
                            <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wide mb-3">
                                <Layers size={16} className="text-primary" /> Key Features
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="prose prose-sm max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
                            {details}
                        </div>
                    </div>
                )}

                <div className="flex pt-4 md:pt-0">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center gap-2 text-primary font-bold hover:underline transition-all"
                    >
                        {isExpanded ? (
                            <>Hide Guide <ChevronUp size={18} /></>
                        ) : (
                            <>View Project Guide <ChevronDown size={18} /></>
                        )}
                    </button>

                    <button className="ml-auto px-6 py-2.5 bg-black text-white rounded-xl font-bold hover:bg-slate-800 transition-all soft-shadow text-sm">
                        Download Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
