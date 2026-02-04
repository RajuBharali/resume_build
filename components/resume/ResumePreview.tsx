"use client";

import React, { forwardRef } from "react";
import { ResumeData } from "./types";

interface ResumePreviewProps {
    data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(({ data }, ref) => {
    const { personalInfo, workExperience, education, certifications, skills, interests, settings } = data;
    const { primaryColor, theme, fontFamily, fontSize } = settings;

    // Helper to calculate relative font size
    const getFontSize = (baseSize: number, multiplier: number) => `${baseSize * multiplier}px`;

    return (
        <div
            ref={ref}
            className={`bg-white p-[0.75in] w-[8.5in] min-h-[11in] mx-auto shadow-2xl print:shadow-none text-[#333] leading-tight`}
            style={{
                boxSizing: "border-box",
                fontFamily: fontFamily,
                fontSize: `${fontSize}px`
            }}
        >
            {/* Header */}
            <div
                className={`mb-6 ${theme === "classic" ? "text-center pb-4" : theme === "modern" ? "flex justify-between items-end pb-2" : "text-left pb-2"}`}
                style={{
                    borderBottom: theme === "minimal" ? "none" : `${theme === "modern" ? "2px" : "1px"} solid ${theme === "modern" ? primaryColor : "#000000"}`
                }}
            >
                <div className={theme === "classic" ? "w-full" : ""}>
                    <h1 className={`${theme === "classic" ? "uppercase tracking-tight" : ""}`}
                        style={{
                            color: theme === "modern" ? primaryColor : "#000000",
                            fontSize: getFontSize(fontSize, theme === "modern" ? 2.8 : 2.5),
                            fontWeight: theme === "modern" ? 700 : 400,
                            marginBottom: theme === "classic" ? "8px" : "12px",
                            lineHeight: 1.1
                        }}>
                        {personalInfo.fullName || "Your Name"}
                    </h1>
                    <div className={`flex flex-wrap items-center gap-x-2 ${theme === "classic" ? "justify-center" : "justify-start"}`}
                        style={{ fontSize: getFontSize(fontSize, 0.8), color: "#555555", marginTop: "4px" }}>
                        <span>{personalInfo.email}</span>
                        {personalInfo.phone && <span>| {personalInfo.phone}</span>}
                        {personalInfo.location && <span>| {personalInfo.location}</span>}
                        {personalInfo.portfolio && (
                            <span className="flex items-center gap-x-2">| <a href={personalInfo.portfolio} style={{ color: "#2563eb", textDecoration: "underline" }}>Portfolio</a></span>
                        )}
                        {personalInfo.github && (
                            <span className="flex items-center gap-x-2">| <a href={personalInfo.github} style={{ color: "#2563eb", textDecoration: "underline" }}>GitHub</a></span>
                        )}
                        {personalInfo.linkedin && (
                            <span className="flex items-center gap-x-2">| <a href={personalInfo.linkedin} style={{ color: "#2563eb", textDecoration: "underline" }}>LinkedIn</a></span>
                        )}
                    </div>
                </div>
            </div>

            {/* Summary */}
            {personalInfo.summary && (
                <section className="mb-6 text-justify">
                    <h2 className="font-bold tracking-widest uppercase mb-2"
                        style={{
                            color: primaryColor,
                            fontSize: getFontSize(fontSize, 0.85),
                            borderBottom: theme === "minimal" ? "none" : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"}`,
                            paddingBottom: theme === "minimal" ? 0 : "4px"
                        }}>
                        Profile Summary
                    </h2>
                    <p style={{ fontSize: getFontSize(fontSize, 0.75), lineHeight: 1.5 }}>
                        {personalInfo.summary}
                    </p>
                </section>
            )}

            {/* Work Experience */}
            {workExperience.length > 0 && (
                <section className="mb-6">
                    <h2 className="font-bold tracking-widest uppercase mb-3"
                        style={{
                            color: primaryColor,
                            fontSize: getFontSize(fontSize, 0.85),
                            borderBottom: theme === "minimal" ? "none" : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"}`,
                            paddingBottom: theme === "minimal" ? 0 : "4px"
                        }}>
                        Work Experience
                    </h2>
                    {workExperience.map((exp) => (
                        <div key={exp.id} className="mb-5">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <span className={`${theme === "modern" ? "font-bold" : "font-bold"} tracking-tight`} style={{ fontSize: getFontSize(fontSize, theme === "modern" ? 1.1 : 1), color: "#000000" }}>{exp.company}</span>
                                <span className="font-bold" style={{ fontSize: getFontSize(fontSize, 0.8), color: "#475569" }}>{exp.startDate} – {exp.endDate}</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-2" style={{ color: "#64748b" }}>
                                <span className="italic" style={{ fontSize: getFontSize(fontSize, 0.8) }}>{exp.position}</span>
                                <span className="italic" style={{ fontSize: getFontSize(fontSize, 0.8) }}>{exp.location} {exp.locationType && exp.locationType !== "On-site" && `(${exp.locationType})`}</span>
                            </div>
                            <ul className={`list-disc ml-5 leading-normal ${theme === "minimal" ? "space-y-1" : "space-y-0.5"}`} style={{ fontSize: getFontSize(fontSize, 0.75) }}>
                                {exp.bullets.filter(b => b.trim()).map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-6">
                    <h2 className="font-bold tracking-widest uppercase mb-3"
                        style={{
                            color: primaryColor,
                            fontSize: getFontSize(fontSize, 0.85),
                            borderBottom: theme === "minimal" ? "none" : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"}`,
                            paddingBottom: theme === "minimal" ? 0 : "4px"
                        }}>
                        Education
                    </h2>
                    {education.map((edu) => (
                        <div key={edu.id} className="mb-4">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <span className="font-bold" style={{ fontSize: getFontSize(fontSize, 1), color: "#000000" }}>{edu.school}</span>
                                <span className="font-bold" style={{ fontSize: getFontSize(fontSize, 0.8), color: "#475569" }}>{edu.graduationDate}</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-1" style={{ color: "#64748b" }}>
                                <span className="italic" style={{ fontSize: getFontSize(fontSize, 0.8) }}>{edu.degree}</span>
                                <span className="italic" style={{ fontSize: getFontSize(fontSize, 0.8) }}>{edu.location}</span>
                            </div>
                            {(edu.gpa || edu.honors) && (
                                <ul className="list-disc ml-5 mt-1" style={{ fontSize: getFontSize(fontSize, 0.75) }}>
                                    {edu.gpa && <li><span className="font-bold">GPA: {edu.gpa}</span></li>}
                                    {edu.honors && <li>{edu.honors}</li>}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Certifications, Skills & Interests */}
            {(certifications.some(c => c.trim()) ||
                skills.categories.some(cat => cat.items.some(i => i.trim())) ||
                (data.languages && data.languages.some(l => l.trim())) ||
                interests.some(it => it.trim())) && (
                    <section>
                        <h2 className="font-bold tracking-widest uppercase mb-3"
                            style={{
                                color: primaryColor,
                                fontSize: getFontSize(fontSize, 0.85),
                                borderBottom: theme === "minimal" ? "none" : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"}`,
                                paddingBottom: theme === "minimal" ? 0 : "4px"
                            }}>
                            Additional Skills & Information
                        </h2>
                        <ul className="list-disc ml-5 leading-relaxed space-y-1" style={{ fontSize: getFontSize(fontSize, 0.75) }}>
                            {certifications.filter(c => c.trim()).length > 0 && (
                                <li>
                                    <span className="font-bold uppercase tracking-tight mr-2" style={{ color: "#334155" }}>Certifications:</span>
                                    {certifications.filter(c => c.trim()).join(", ")}
                                </li>
                            )}
                            {skills.categories.filter(cat => cat.items.some(i => i.trim())).map((cat, idx) => (
                                <li key={idx}>
                                    <span className="font-bold uppercase tracking-tight mr-2" style={{ color: "#334155" }}>{cat.name}:</span>
                                    {cat.items.filter(i => i.trim()).join(", ")}
                                </li>
                            ))}
                            {data.languages && data.languages.filter(l => l.trim()).length > 0 && (
                                <li>
                                    <span className="font-bold uppercase tracking-tight mr-2" style={{ color: "#334155" }}>Languages:</span>
                                    {data.languages.filter(l => l.trim()).join(", ")}
                                </li>
                            )}
                            {interests.filter(it => it.trim()).length > 0 && (
                                <li>
                                    <span className="font-bold uppercase tracking-tight mr-2" style={{ color: "#334155" }}>Interests:</span>
                                    {interests.filter(it => it.trim()).join(", ")}
                                </li>
                            )}
                        </ul>
                    </section>
                )}
        </div>
    );
});

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
