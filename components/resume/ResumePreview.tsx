"use client";

import React, { forwardRef } from "react";
import { ResumeData } from "./types";

interface ResumePreviewProps {
    data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
    ({ data }, ref) => {
        const {
            personalInfo = {} as any,
            workExperience = [],
            education = [],
            certifications = [],
            skills = { categories: [] },
            interests = [],
            settings = {} as any,
            projects = [],
            languages = [],
        } = data || {};

        const { primaryColor, theme, fontFamily, fontSize } = settings;

        /* ===== Typography Constants (PDF-TUNED) ===== */
        const BODY_LINE_HEIGHT = 1.45;
        const SECTION_GAP = "20px";
        const ITEM_GAP = "6px";

        const getFontSize = (base: number, mult: number) =>
            `${base * mult}px`;

        return (
            <div
                ref={ref}
                className="bg-white w-[8.5in] min-h-[11in] mx-auto shadow-2xl print:shadow-none"
                style={{
                    padding: "0.75in",
                    boxSizing: "border-box",
                    fontFamily,
                    fontSize: `${fontSize}px`,
                    lineHeight: BODY_LINE_HEIGHT,
                    color: "#333",
                }}
            >
                {/* ================= HEADER ================= */}
                <header
                    className={
                        theme === "modern"
                            ? "flex justify-between items-end"
                            : theme === "classic"
                                ? "text-center"
                                : ""
                    }
                    style={{
                        paddingBottom: "12px",
                        marginBottom: SECTION_GAP,
                        borderBottom:
                            theme === "minimal"
                                ? "none"
                                : `1px solid ${theme === "modern" ? primaryColor : "#000"
                                }`,
                    }}
                >
                    <div>
                        <h1
                            style={{
                                fontSize: getFontSize(fontSize, theme === "modern" ? 2.8 : 2.5),
                                fontWeight: theme === "modern" ? 700 : 400,
                                color: theme === "modern" ? primaryColor : "#000",
                                marginBottom: "16px",
                                lineHeight: 1.1,
                            }}
                        >
                            {personalInfo.fullName || "Your Name"}
                        </h1>

                        <div
                            className={`flex flex-wrap gap-x-2 ${theme === "classic" ? "justify-center" : ""
                                }`}
                            style={{
                                fontSize: getFontSize(fontSize, 0.8),
                                color: "#555",
                            }}
                        >
                            {personalInfo.email && <span>{personalInfo.email}</span>}
                            {personalInfo.phone && <span>| {personalInfo.phone}</span>}
                            {personalInfo.location && <span>| {personalInfo.location}</span>}
                            {personalInfo.portfolio && (
                                <span>
                                    |{" "}
                                    <a
                                        href={personalInfo.portfolio}
                                        style={{ color: "#2563eb", textDecoration: "underline" }}
                                    >
                                        Portfolio
                                    </a>
                                </span>
                            )}
                            {personalInfo.github && (
                                <span>
                                    |{" "}
                                    <a
                                        href={personalInfo.github}
                                        style={{ color: "#2563eb", textDecoration: "underline" }}
                                    >
                                        GitHub
                                    </a>
                                </span>
                            )}
                            {personalInfo.linkedin && (
                                <span>
                                    |{" "}
                                    <a
                                        href={personalInfo.linkedin}
                                        style={{ color: "#2563eb", textDecoration: "underline" }}
                                    >
                                        LinkedIn
                                    </a>
                                </span>
                            )}
                        </div>
                    </div>
                </header>

                {/* ================= PROFILE SUMMARY ================= */}
                {personalInfo.summary && (
                    <section data-section style={{ marginBottom: SECTION_GAP }}>
                        <h2
                            style={{
                                fontSize: getFontSize(fontSize, 0.85),
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: primaryColor,
                                paddingBottom: "4px",
                                borderBottom:
                                    theme === "minimal"
                                        ? "none"
                                        : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"
                                        }`,
                                marginBottom: "8px",
                            }}
                        >
                            Profile Summary
                        </h2>

                        <p
                            style={{
                                fontSize: getFontSize(fontSize, 0.75),
                                lineHeight: 1.5,
                                marginBottom: ITEM_GAP,
                                textAlign: "justify",
                            }}
                        >
                            {personalInfo.summary}
                        </p>
                    </section>
                )}

                {/* ================= WORK EXPERIENCE ================= */}
                {workExperience.length > 0 && (
                    <section data-section style={{ marginBottom: SECTION_GAP }}>
                        <h2
                            style={{
                                fontSize: getFontSize(fontSize, 0.85),
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: primaryColor,
                                paddingBottom: "4px",
                                borderBottom:
                                    theme === "minimal"
                                        ? "none"
                                        : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"
                                        }`,
                                marginBottom: "12px",
                            }}
                        >
                            Work Experience
                        </h2>

                        {workExperience.map((exp) => (
                            <div key={exp.id} data-item style={{ marginBottom: "16px" }}>
                                <div
                                    className="flex justify-between"
                                    style={{ marginBottom: "4px" }}
                                >
                                    <span
                                        style={{
                                            fontWeight: 700,
                                            fontSize: getFontSize(fontSize, 1),
                                            color: "#000",
                                        }}
                                    >
                                        {exp.company}
                                    </span>
                                    <span
                                        style={{
                                            fontWeight: 700,
                                            fontSize: getFontSize(fontSize, 0.8),
                                            color: "#475569",
                                        }}
                                    >
                                        {exp.startDate} – {exp.endDate}
                                    </span>
                                </div>

                                <div
                                    className="flex justify-between"
                                    style={{
                                        fontStyle: "italic",
                                        fontSize: getFontSize(fontSize, 0.8),
                                        color: "#64748b",
                                        marginBottom: "8px",
                                    }}
                                >
                                    <span>{exp.position}</span>
                                    <span>
                                        {exp.location}
                                        {exp.locationType &&
                                            exp.locationType !== "On-site" &&
                                            ` (${exp.locationType})`}
                                    </span>
                                </div>

                                {(exp.bullets || [])
                                    .filter((b) => b.trim())
                                    .map((bullet, idx) => (
                                        <div
                                            key={idx}
                                            className="flex gap-2"
                                            style={{
                                                fontSize: getFontSize(fontSize, 0.75),
                                                marginBottom: ITEM_GAP,
                                            }}
                                        >
                                            <span style={{ color: primaryColor }}>•</span>
                                            <span>{bullet}</span>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </section>
                )}

                {/* ================= EDUCATION ================= */}
                {education.length > 0 && (
                    <section data-section style={{ marginBottom: SECTION_GAP }}>
                        <h2
                            style={{
                                fontSize: getFontSize(fontSize, 0.85),
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: primaryColor,
                                paddingBottom: "4px",
                                borderBottom:
                                    theme === "minimal"
                                        ? "none"
                                        : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"
                                        }`,
                                marginBottom: "12px",
                            }}
                        >
                            Education
                        </h2>

                        {education.map((edu) => (
                            <div key={edu.id} data-item style={{ marginBottom: "14px" }}>
                                <div
                                    className="flex justify-between"
                                    style={{ marginBottom: "4px" }}
                                >
                                    <span style={{ fontWeight: 700 }}>{edu.school}</span>
                                    <span
                                        style={{
                                            fontWeight: 700,
                                            fontSize: getFontSize(fontSize, 0.8),
                                            color: "#475569",
                                        }}
                                    >
                                        {edu.startDate} – {edu.endDate}
                                    </span>
                                </div>

                                <div
                                    className="flex justify-between"
                                    style={{
                                        fontStyle: "italic",
                                        fontSize: getFontSize(fontSize, 0.8),
                                        color: "#64748b",
                                        marginBottom: ITEM_GAP,
                                    }}
                                >
                                    <span>{edu.degree}</span>
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {/* ================= PROJECTS ================= */}
                {projects && projects.length > 0 && (
                    <section data-section style={{ marginBottom: SECTION_GAP }}>
                        <h2
                            style={{
                                fontSize: getFontSize(fontSize, 0.85),
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: primaryColor,
                                paddingBottom: "4px",
                                borderBottom:
                                    theme === "minimal"
                                        ? "none"
                                        : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"
                                        }`,
                                marginBottom: "12px",
                            }}
                        >
                            Projects
                        </h2>

                        {projects.map((proj) => (
                            <div key={proj.id} data-item style={{ marginBottom: "14px" }}>
                                <div
                                    className="flex justify-between items-baseline"
                                    style={{ marginBottom: "4px" }}
                                >
                                    <span
                                        style={{
                                            fontWeight: 700,
                                            fontSize: getFontSize(fontSize, 1),
                                            color: "#000",
                                        }}
                                    >
                                        {proj.name}
                                    </span>
                                    {proj.link && (
                                        <a
                                            href={proj.link}
                                            style={{
                                                fontSize: getFontSize(fontSize, 0.75),
                                                color: "#2563eb",
                                                textDecoration: "underline",
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Link
                                        </a>
                                    )}
                                </div>

                                <div
                                    style={{
                                        fontSize: getFontSize(fontSize, 0.8),
                                        color: "#64748b",
                                        marginBottom: ITEM_GAP,
                                    }}
                                >
                                    <span style={{ fontWeight: 500 }}>Tech Stack: </span>
                                    <span style={{ fontStyle: "italic" }}>{proj.techUsed}</span>
                                </div>

                                <p
                                    style={{
                                        fontSize: getFontSize(fontSize, 0.75),
                                        lineHeight: 1.4,
                                        color: "#475569",
                                        marginBottom: ITEM_GAP,
                                        textAlign: "justify",
                                    }}
                                >
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </section>
                )}

                {/* ================= ADDITIONAL INFO ================= */}
                {(certifications.length > 0 ||
                    (skills?.categories || []).length > 0 ||
                    interests.length > 0 ||
                    languages?.length) && (
                        <section data-section>
                            <h2
                                style={{
                                    fontSize: getFontSize(fontSize, 0.85),
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: primaryColor,
                                    paddingBottom: "4px",
                                    borderBottom:
                                        theme === "minimal"
                                            ? "none"
                                            : `1px solid ${theme === "modern" ? primaryColor : "#e5e7eb"
                                            }`,
                                    marginBottom: "10px",
                                }}
                            >
                                Additional Skills & Information
                            </h2>

                            <div style={{ fontSize: getFontSize(fontSize, 0.75) }}>
                                {certifications.length > 0 && (
                                    <p style={{ marginBottom: ITEM_GAP }}>
                                        <strong>Certifications:</strong>{" "}
                                        {certifications.join(", ")}
                                    </p>
                                )}

                                {(skills?.categories || []).map((cat, idx) => (
                                    <p key={idx} style={{ marginBottom: ITEM_GAP }}>
                                        <strong>{cat.name}:</strong>{" "}
                                        {(cat.items || []).join(", ")}
                                    </p>
                                ))}

                                {languages && languages.length > 0 && (
                                    <p style={{ marginBottom: ITEM_GAP }}>
                                        <strong>Languages:</strong> {languages.join(", ")}
                                    </p>
                                )}

                                {interests.length > 0 && (
                                    <p>
                                        <strong>Interests:</strong> {interests.join(", ")}
                                    </p>
                                )}
                            </div>
                        </section>
                    )}
            </div>
        );
    }
);

ResumePreview.displayName = "ResumePreview";
export default ResumePreview;
