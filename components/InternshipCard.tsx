"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Calendar, Building2, GraduationCap } from "lucide-react";

interface InternshipCardProps {
    type?: "Internship" | "Job";
    title: string;
    organization: string;
    location: string;
    duration: string;
    eligibility: string;
    description: string;
    details: React.ReactNode;
    isClosed?: boolean;
    reopenDate?: string;
}

const InternshipCard = ({
    type = "Internship",
    title,
    organization,
    location,
    duration,
    eligibility,
    description,
    details,
    isClosed,
    reopenDate
}: InternshipCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-3xl border border-border soft-shadow overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${type === "Job" ? "bg-blue-100 text-blue-700" : "bg-primary/10 text-primary"
                                }`}>
                                {type}
                            </span>
                            {isClosed && (
                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Applications Closed
                                </span>
                            )}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
                        <div className="flex items-center gap-2 text-muted font-medium">
                            <Building2 size={18} />
                            <span>{organization}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-muted">
                        <MapPin size={16} className="text-primary" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted">
                        <Calendar size={16} className="text-primary" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-start gap-2 text-muted">
                        <GraduationCap size={16} className="text-primary mt-0.5" />
                        <span className="line-clamp-1">{eligibility}</span>
                    </div>
                </div>

                <p className="text-muted leading-relaxed mb-6">
                    {description}
                </p>

                {isExpanded && (
                    <div className="border-t border-border pt-6 mt-6 animate-in fade-in slide-in-from-top-4">
                        <div className="prose prose-sm max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
                            {details}
                        </div>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-0">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center gap-2 text-primary font-bold hover:underline transition-all"
                    >
                        {isExpanded ? (
                            <>Read Less <ChevronUp size={18} /></>
                        ) : (
                            <>Read More Details <ChevronDown size={18} /></>
                        )}
                    </button>

                    {isClosed ? (
                        <div className="sm:ml-auto text-xs font-bold text-red-500 bg-red-50 px-4 py-2 rounded-xl text-center">
                            Window Reopens: {reopenDate}
                        </div>
                    ) : (
                        <button className="sm:ml-auto px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all soft-shadow">
                            Apply Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InternshipCard;
