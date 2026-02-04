"use client";

import React, { useState, useRef } from "react";
// import { useReactToPrint } from "react-to-print";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";
import Header from "@/components/Header";
import { ResumeData } from "@/components/resume/types";
import { Download, Eye, Edit3, CheckCircle2, Palette, Layout, Loader2 } from "lucide-react";

export default function ResumePageClient() {
    const [data, setData] = useState<ResumeData>({
        personalInfo: {
            fullName: "Jobby McJobface",
            email: "hey@sheetsresume.com",
            phone: "(555) 555-5555",
            location: "Denver, CO",
            portfolio: "https://portfolio.com",
            github: "https://github.com/jobby",
            linkedin: "https://linkedin.com/in/jobby",
            summary: "Experienced software professional with a passion for building AI-powered tools and optimizing user experiences. Proven track record in product management and full-stack development.",
        },
        workExperience: [
            {
                id: "1",
                company: "SheetsResume.com",
                position: "Co-Founder",
                location: "Remote",
                startDate: "Aug. 2023",
                endDate: "Present",
                description: "Ideation, product management, & marketing for AI-powered Resume Builder.",
                bullets: [
                    "SheetsResume.com is an online repository of free and paid resume and job seeking resources used by millions.",
                    "Ideation, product management, & marketing for AI-powered Resume Builder, Cover Letters, & Mock Interviews.",
                    "Stack: JavaScript (React); PHP (Laravel + Inertia); Linux (Ubuntu); Nginx; OpenAI; Gemini; MySQL"
                ],
                locationType: "Remote",
            }
        ],
        education: [
            {
                id: "edu1",
                school: "University Name",
                degree: "Bachelor of Science in Computer Science",
                location: "City, ST",
                graduationDate: "May 2024",
                gpa: "3.8/4.0",
                honors: "Dean's List, Summa Cum Laude"
            }
        ],
        certifications: ["AWS Certified Cloud Practitioner", "Google Data Analytics Professional Certificate"],
        languages: ["English (Fluent)", "Hindi (Native)"],
        skills: {
            categories: [
                { name: "Technologies", items: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker"] },
                { name: "Tools", items: ["Git", "GitHub Actions", "Vercel", "Figma", "Jira"] }
            ]
        },
        interests: ["Weightlifting", "Skiing", "Camping", "Chess"],
        settings: {
            primaryColor: "#000000",
            theme: "classic",
            fontFamily: "serif",
            fontSize: 14
        }
    });

    const themes = [
        { id: "classic", name: "Classic" },
        { id: "modern", name: "Modern" },
        { id: "minimal", name: "Minimal" }
    ] as const;

    const colors = ["#000000", "#1e40af", "#047857", "#b91c1c", "#6b21a8", "#c2410c"];

    const fonts = [
        { id: "serif", name: "Serif" },
        { id: "sans-serif", name: "Sans" },
        { id: "monospace", name: "Mono" },
        { id: "system-ui", name: "System" }
    ];

    const [view, setView] = useState<"edit" | "preview">("edit");
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

    const handleDownloadPdf = async () => {
        if (!componentRef.current || isGeneratingPdf) return;

        setIsGeneratingPdf(true);

        // Dynamic import to avoid SSR issues
        const html2canvas = (await import("html2canvas")).default;
        const { jsPDF } = await import("jspdf");

        try {
            const element = componentRef.current;
            const canvas = await html2canvas(element, {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff",
                windowWidth: 1200, // Force desktop width to prevent mobile squashing
                width: 816, // precise 8.5in in @96dpi
            });

            const imgData = canvas.toDataURL("image/png");

            // Standard US Letter dimensions in mm (matches the CSS w-[8.5in] h-[11in])
            const pdfWidth = 215.9;
            const pdfHeight = 279.4;

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "letter"
            });

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${data.personalInfo.fullName.replace(/\s+/g, "_")}_Resume.pdf`);
        } catch (error) {
            console.error("PDF Generation failed", error);
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f8fafc]">
            <Header />

            <main className="flex-grow flex flex-col">
                {/* Builder Toolbar */}
                <div className="sticky top-16 z-30 glass border-b border-border px-4 py-3">
                    <div className="container mx-auto flex flex-col gap-3">
                        <div className="flex items-center justify-between pointer-events-auto">
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-wider">
                                    <CheckCircle2 size={14} />
                                    <span>Auto-saved</span>
                                </div>

                                <div className="h-6 w-px bg-border hidden md:block"></div>

                                {/* Desktop Settings (Hidden on Mobile) */}
                                <div className="hidden md:flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Layout size={16} className="text-muted" />
                                        <div className="flex bg-slate-100 p-0.5 rounded-lg border border-border">
                                            {themes.map((t) => (
                                                <button
                                                    key={t.id}
                                                    onClick={() => setData({ ...data, settings: { ...data.settings, theme: t.id } })}
                                                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${data.settings.theme === t.id ? "bg-white text-primary shadow-sm" : "text-muted hover:text-foreground"}`}
                                                >
                                                    {t.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-6 w-px bg-border"></div>
                                    <div className="flex items-center gap-2">
                                        <Palette size={16} className="text-muted" />
                                        <div className="flex items-center gap-1.5 ml-1">
                                            {colors.map((c) => (
                                                <button
                                                    key={c}
                                                    onClick={() => setData({ ...data, settings: { ...data.settings, primaryColor: c } })}
                                                    className={`w-5 h-5 rounded-full border-2 transition-all ${data.settings.primaryColor === c ? "border-primary scale-110" : "border-transparent hover:scale-110"}`}
                                                    style={{ backgroundColor: c }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-6 w-px bg-border"></div>
                                    {/* Font Family */}
                                    <div className="flex items-center gap-2">
                                        <Edit3 size={16} className="text-muted" />
                                        <select
                                            className="bg-slate-100 text-[10px] font-bold uppercase tracking-wider px-2 py-1.5 rounded-lg border border-border outline-none focus:ring-1 focus:ring-primary/20"
                                            value={data.settings.fontFamily}
                                            onChange={(e) => setData({ ...data, settings: { ...data.settings, fontFamily: e.target.value } })}
                                        >
                                            {fonts.map(f => (
                                                <option key={f.id} value={f.id}>{f.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="h-6 w-px bg-border"></div>
                                    {/* Font Size */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold uppercase text-muted">A</span>
                                        <input
                                            type="range"
                                            min="10" max="18" step="1"
                                            value={data.settings.fontSize}
                                            onChange={(e) => setData({ ...data, settings: { ...data.settings, fontSize: parseInt(e.target.value) } })}
                                            className="w-20 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                        <span className="text-[12px] font-bold uppercase text-muted">A</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Mobile View/Settings Toggle */}
                                <div className="flex bg-slate-100 p-1 rounded-xl sm:hidden">
                                    <button
                                        onClick={() => setView("edit")}
                                        className={`p-2 rounded-lg transition-all ${view === "edit" && !isSettingsOpen ? "bg-white shadow-sm text-primary" : "text-muted"}`}
                                    >
                                        <Edit3 size={18} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsSettingsOpen(!isSettingsOpen);
                                            setView("edit");
                                        }}
                                        className={`p-2 rounded-lg transition-all ${isSettingsOpen ? "bg-white shadow-sm text-primary" : "text-muted"}`}
                                    >
                                        <Palette size={18} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setView("preview");
                                            setIsSettingsOpen(false);
                                        }}
                                        className={`p-2 rounded-lg transition-all ${view === "preview" ? "bg-white shadow-sm text-primary" : "text-muted"}`}
                                    >
                                        <Eye size={18} />
                                    </button>
                                </div>

                                <button
                                    onClick={() => handleDownloadPdf()}
                                    disabled={isGeneratingPdf}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all soft-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isGeneratingPdf ? (
                                        <Loader2 size={18} className="animate-spin" />
                                    ) : (
                                        <Download size={18} />
                                    )}
                                    <span className="hidden sm:inline">
                                        {isGeneratingPdf ? "Processing..." : "Download PDF"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Settings Panel (Visible only when toggled) */}
                        {isSettingsOpen && (
                            <div className="sm:hidden flex flex-col gap-4 p-4 bg-white rounded-2xl border border-border mt-1 animate-in slide-in-from-top-2 max-h-[60vh] overflow-y-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
                                            <Layout size={14} />
                                            <span>Select Theme</span>
                                        </div>
                                        <div className="flex bg-slate-100 p-1 rounded-xl w-full">
                                            {themes.map((t) => (
                                                <button
                                                    key={t.id}
                                                    onClick={() => setData({ ...data, settings: { ...data.settings, theme: t.id } })}
                                                    className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${data.settings.theme === t.id ? "bg-white text-primary shadow-sm" : "text-muted"}`}
                                                >
                                                    {t.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
                                            <Palette size={14} />
                                            <span>Pick a Color</span>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {colors.map((c) => (
                                                <button
                                                    key={c}
                                                    onClick={() => setData({ ...data, settings: { ...data.settings, primaryColor: c } })}
                                                    className={`w-8 h-8 rounded-full border-2 transition-all ${data.settings.primaryColor === c ? "border-primary scale-110 shadow-lg" : "border-transparent"}`}
                                                    style={{ backgroundColor: c }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
                                            <Edit3 size={14} />
                                            <span>Font Family</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {fonts.map((f) => (
                                                <button
                                                    key={f.id}
                                                    onClick={() => setData({ ...data, settings: { ...data.settings, fontFamily: f.id } })}
                                                    className={`py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg border transition-all ${data.settings.fontFamily === f.id ? "bg-primary text-white border-primary shadow-sm" : "bg-slate-50 text-muted border-border"}`}
                                                    style={{ fontFamily: f.id }}
                                                >
                                                    {f.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-muted">
                                            <div className="flex items-center gap-2">
                                                <Eye size={14} />
                                                <span>Font Size</span>
                                            </div>
                                            <span>{data.settings.fontSize}px</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="10" max="18" step="1"
                                            value={data.settings.fontSize}
                                            onChange={(e) => setData({ ...data, settings: { ...data.settings, fontSize: parseInt(e.target.value) } })}
                                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-grow container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 overflow-hidden h-[calc(100vh-12rem)]">
                    {/* Form Section */}
                    <div className={`flex-1 overflow-hidden h-full ${view === "preview" ? "hidden lg:block" : "block"}`}>
                        <ResumeForm data={data} onChange={setData} />
                    </div>

                    {/* Preview Section */}
                    <div className={`flex-1 overflow-y-auto h-full flex justify-center bg-slate-200/50 rounded-[2rem] p-4 md:p-8 ${view === "edit" ? "hidden lg:flex" : "flex"}`}>
                        <div className="origin-top scale-[0.6] sm:scale-[0.8] md:scale-100">
                            <ResumePreview ref={componentRef} data={data} />
                        </div>
                    </div>
                </div>
            </main>

            {/* Processing Overlay */}
            {isGeneratingPdf && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                    <div className="bg-white text-foreground p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 animate-in zoom-in-95 duration-200">
                        <Loader2 size={48} className="text-primary animate-spin" />
                        <div className="flex flex-col items-center gap-1">
                            <h3 className="text-xl font-bold">Processing Resume...</h3>
                            <p className="text-muted-foreground text-sm">Please wait while we generate your PDF.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
