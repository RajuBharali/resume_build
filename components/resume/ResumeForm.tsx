"use client";

import React, { useState } from "react";
import { ResumeData } from "./types";
import { Plus, Trash2 } from "lucide-react";

interface ResumeFormProps {
    data: ResumeData;
    onChange: (newData: ResumeData) => void;
}

const ResumeForm = ({ data, onChange }: ResumeFormProps) => {
    const [activeTab, setActiveTab] = useState<"personal" | "experience" | "education" | "skills">("personal");

    const updatePersonalInfo = (field: string, value: string) => {
        onChange({
            ...data,
            personalInfo: { ...data.personalInfo, [field]: value }
        });
    };

    const addExperience = () => {
        const newExp = {
            id: Math.random().toString(36).substr(2, 9),
            company: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
            bullets: [""],
            locationType: "On-site" as const
        };
        onChange({ ...data, workExperience: [...data.workExperience, newExp] });
    };

    const removeExperience = (id: string) => {
        onChange({ ...data, workExperience: data.workExperience.filter(e => e.id !== id) });
    };

    const updateExperience = (id: string, field: string, value: string | boolean | string[]) => {
        onChange({
            ...data,
            workExperience: data.workExperience.map(e => e.id === id ? { ...e, [field]: value } : e)
        });
    };

    const addBullet = (expId: string) => {
        onChange({
            ...data,
            workExperience: data.workExperience.map(e =>
                e.id === expId ? { ...e, bullets: [...e.bullets, ""] } : e
            )
        });
    };

    const updateBullet = (expId: string, index: number, value: string) => {
        onChange({
            ...data,
            workExperience: data.workExperience.map(e =>
                e.id === expId ? {
                    ...e,
                    bullets: e.bullets.map((b, i) => i === index ? value : b)
                } : e
            )
        });
    };

    const removeBullet = (expId: string, index: number) => {
        onChange({
            ...data,
            workExperience: data.workExperience.map(e =>
                e.id === expId ? {
                    ...e,
                    bullets: e.bullets.filter((_, i) => i !== index)
                } : e
            )
        });
    };

    const addEducation = () => {
        const newEdu = {
            id: Math.random().toString(36).substr(2, 9),
            school: "",
            degree: "",
            location: "",
            graduationDate: "",
            gpa: "",
            honors: ""
        };
        onChange({ ...data, education: [...data.education, newEdu] });
    };

    const removeEducation = (id: string) => {
        onChange({ ...data, education: data.education.filter(e => e.id !== id) });
    };

    const updateEducation = (id: string, field: string, value: string) => {
        onChange({
            ...data,
            education: data.education.map(e => e.id === id ? { ...e, [field]: value } : e)
        });
    };

    const addSkillCategory = () => {
        const newCat = { name: "New Category", items: [""] };
        onChange({
            ...data,
            skills: { ...data.skills, categories: [...data.skills.categories, newCat] }
        });
    };

    const updateSkillCategoryName = (index: number, name: string) => {
        onChange({
            ...data,
            skills: {
                ...data.skills,
                categories: data.skills.categories.map((c, i) => i === index ? { ...c, name } : c)
            }
        });
    };

    const addSkillItem = (catIndex: number) => {
        onChange({
            ...data,
            skills: {
                ...data.skills,
                categories: data.skills.categories.map((c, i) =>
                    i === catIndex ? { ...c, items: [...c.items, ""] } : c
                )
            }
        });
    };

    const updateSkillItem = (catIndex: number, itemIndex: number, value: string) => {
        onChange({
            ...data,
            skills: {
                ...data.skills,
                categories: data.skills.categories.map((c, i) =>
                    i === catIndex ? {
                        ...c,
                        items: c.items.map((it, j) => j === itemIndex ? value : it)
                    } : c
                )
            }
        });
    };

    const removeSkillItem = (catIndex: number, itemIndex: number) => {
        onChange({
            ...data,
            skills: {
                ...data.skills,
                categories: data.skills.categories.map((c, i) =>
                    i === catIndex ? {
                        ...c,
                        items: c.items.filter((_, j) => j !== itemIndex)
                    } : c
                )
            }
        });
    };

    const removeSkillCategory = (index: number) => {
        onChange({
            ...data,
            skills: {
                ...data.skills,
                categories: data.skills.categories.filter((_, i) => i !== index)
            }
        });
    };

    const updateCertification = (index: number, value: string) => {
        onChange({
            ...data,
            certifications: data.certifications.map((c, i) => i === index ? value : c)
        });
    };

    const addCertification = () => {
        onChange({ ...data, certifications: [...data.certifications, ""] });
    };

    const removeCertification = (index: number) => {
        onChange({ ...data, certifications: data.certifications.filter((_, i) => i !== index) });
    };

    const updateLanguage = (index: number, value: string) => {
        onChange({
            ...data,
            languages: data.languages.map((l, i) => i === index ? value : l)
        });
    };

    const addLanguage = () => {
        onChange({ ...data, languages: [...data.languages, ""] });
    };

    const removeLanguage = (index: number) => {
        onChange({ ...data, languages: data.languages.filter((_, i) => i !== index) });
    };

    const updateInterest = (index: number, value: string) => {
        onChange({
            ...data,
            interests: data.interests.map((it, i) => i === index ? value : it)
        });
    };

    const addInterest = () => {
        onChange({ ...data, interests: [...data.interests, ""] });
    };

    const removeInterest = (index: number) => {
        onChange({ ...data, interests: data.interests.filter((_, i) => i !== index) });
    };

    return (
        <div className="flex flex-col h-full bg-white rounded-3xl border border-border overflow-hidden soft-shadow">
            {/* Tabs */}
            <div className="flex border-b border-border bg-slate-50/50">
                {(["personal", "experience", "education", "skills"] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4 text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab
                            ? "bg-white text-primary border-b-2 border-primary"
                            : "text-muted hover:text-foreground"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex-grow overflow-y-auto p-6">
                {activeTab === "personal" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="text-lg font-bold">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Full Name" value={data.personalInfo.fullName} onChange={(v: string) => updatePersonalInfo("fullName", v)} />
                            <Input label="Email" value={data.personalInfo.email} onChange={(v: string) => updatePersonalInfo("email", v)} />
                            <Input label="Phone" value={data.personalInfo.phone} onChange={(v: string) => updatePersonalInfo("phone", v)} />
                            <Input label="Location" value={data.personalInfo.location} onChange={(v: string) => updatePersonalInfo("location", v)} />
                            <Input label="Portfolio URL" value={data.personalInfo.portfolio || ""} onChange={(v: string) => updatePersonalInfo("portfolio", v)} />
                            <Input label="GitHub Link" value={data.personalInfo.github || ""} onChange={(v: string) => updatePersonalInfo("github", v)} />
                            <Input label="LinkedIn URL" value={data.personalInfo.linkedin || ""} onChange={(v: string) => updatePersonalInfo("linkedin", v)} />
                        </div>
                        <Textarea label="Professional Summary" value={data.personalInfo.summary || ""} onChange={(v: string) => updatePersonalInfo("summary", v)} placeholder="A brief overview of your professional background and key achievements..." />
                    </div>
                )}

                {activeTab === "experience" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">Work Experience</h3>
                            <button onClick={addExperience} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all">
                                <Plus size={20} />
                            </button>
                        </div>
                        {data.workExperience.map((exp) => (
                            <div key={exp.id} className="p-4 rounded-2xl border border-border bg-slate-50/30 space-y-4">
                                <div className="flex justify-between items-start">
                                    <Input label="Company" value={exp.company} onChange={(v) => updateExperience(exp.id, "company", v)} />
                                    <button onClick={() => removeExperience(exp.id)} className="text-red-400 hover:text-red-600 p-2">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Input label="Position" value={exp.position} onChange={(v) => updateExperience(exp.id, "position", v)} />
                                    <Input label="Location" value={exp.location} onChange={(v) => updateExperience(exp.id, "location", v)} />
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Work Type</label>
                                        <select
                                            className="w-full p-3 text-sm rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-white"
                                            value={exp.locationType || "On-site"}
                                            onChange={(e) => updateExperience(exp.id, "locationType", e.target.value)}
                                        >
                                            <option value="On-site">On-site</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="Start Date" value={exp.startDate} onChange={(v) => updateExperience(exp.id, "startDate", v)} />
                                    <Input label="End Date" value={exp.endDate} onChange={(v) => updateExperience(exp.id, "endDate", v)} />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-muted">Bullet Points</label>
                                    {exp.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex gap-2">
                                            <input
                                                className="flex-grow p-2 text-sm rounded-xl border border-border focus:ring-2 focus:ring-primary/20 outline-none"
                                                value={bullet}
                                                onChange={(e) => updateBullet(exp.id, idx, e.target.value)}
                                                placeholder="Key achievement..."
                                            />
                                            <button onClick={() => removeBullet(exp.id, idx)} className="text-muted hover:text-red-400">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                    <button onClick={() => addBullet(exp.id)} className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                                        <Plus size={14} /> Add Bullet
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "education" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">Education</h3>
                            <button onClick={addEducation} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all">
                                <Plus size={20} />
                            </button>
                        </div>
                        {data.education.map((edu) => (
                            <div key={edu.id} className="p-4 rounded-2xl border border-border bg-slate-50/30 space-y-4">
                                <div className="flex justify-between items-start">
                                    <Input label="School / University" value={edu.school} onChange={(v) => updateEducation(edu.id, "school", v)} />
                                    <button onClick={() => removeEducation(edu.id)} className="text-red-400 hover:text-red-600 p-2">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="Degree / Major" value={edu.degree} onChange={(v) => updateEducation(edu.id, "degree", v)} />
                                    <Input label="Location" value={edu.location} onChange={(v) => updateEducation(edu.id, "location", v)} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="Graduation Date" value={edu.graduationDate} onChange={(v) => updateEducation(edu.id, "graduationDate", v)} />
                                    <Input label="GPA (Optional)" value={edu.gpa || ""} onChange={(v) => updateEducation(edu.id, "gpa", v)} />
                                </div>
                                <Input label="Honors / Awards (Optional)" value={edu.honors || ""} onChange={(v) => updateEducation(edu.id, "honors", v)} />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "skills" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold">Skills Categories</h3>
                                <button onClick={addSkillCategory} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all">
                                    <Plus size={20} />
                                </button>
                            </div>
                            {data.skills.categories.map((cat, catIdx) => (
                                <div key={catIdx} className="p-4 rounded-2xl border border-border bg-slate-50/30 space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <Input label="Category Name (e.g. Languages)" value={cat.name} onChange={(v) => updateSkillCategoryName(catIdx, v)} />
                                        <button onClick={() => removeSkillCategory(catIdx)} className="text-red-400 hover:text-red-600 p-2 mt-6">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Skills</label>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.items.map((item, itemIdx) => (
                                                <div key={itemIdx} className="flex items-center gap-1 bg-white border border-border px-2 py-1 rounded-lg">
                                                    <input
                                                        className="text-xs focus:outline-none min-w-[60px]"
                                                        value={item}
                                                        onChange={(e) => updateSkillItem(catIdx, itemIdx, e.target.value)}
                                                    />
                                                    <button onClick={() => removeSkillItem(catIdx, itemIdx)} className="text-muted hover:text-red-400">
                                                        <Trash2 size={12} />
                                                    </button>
                                                </div>
                                            ))}
                                            <button onClick={() => addSkillItem(catIdx)} className="p-1 px-2 rounded-lg bg-primary/5 text-primary text-[10px] font-bold hover:bg-primary/10">
                                                + Add Skill
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 pt-6 border-t border-border">
                            <h3 className="text-lg font-bold">Additional Information</h3>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-bold uppercase text-muted">Certifications & Training</label>
                                        <button onClick={addCertification} className="text-xs text-primary font-bold hover:underline flex items-center gap-1">
                                            <Plus size={14} /> Add
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {data.certifications.map((cert, certIdx) => (
                                            <div key={certIdx} className="flex gap-2">
                                                <input
                                                    className="flex-grow p-2 text-sm rounded-xl border border-border focus:ring-2 focus:ring-primary/20 outline-none"
                                                    value={cert}
                                                    onChange={(e) => updateCertification(certIdx, e.target.value)}
                                                    placeholder="AWS Certified Cloud Practitioner..."
                                                />
                                                <button onClick={() => removeCertification(certIdx)} className="text-muted hover:text-red-400">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-bold uppercase text-muted">Languages</label>
                                        <button onClick={addLanguage} className="text-xs text-primary font-bold hover:underline flex items-center gap-1">
                                            <Plus size={14} /> Add
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {data.languages.map((lang, langIdx) => (
                                            <div key={langIdx} className="flex gap-2">
                                                <input
                                                    className="flex-grow p-2 text-sm rounded-xl border border-border focus:ring-2 focus:ring-primary/20 outline-none"
                                                    value={lang}
                                                    onChange={(e) => updateLanguage(langIdx, e.target.value)}
                                                    placeholder="English (Fluent)..."
                                                />
                                                <button onClick={() => removeLanguage(langIdx)} className="text-muted hover:text-red-400">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-bold uppercase text-muted">Interests</label>
                                        <button onClick={addInterest} className="text-xs text-primary font-bold hover:underline flex items-center gap-1">
                                            <Plus size={14} /> Add
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {data.interests.map((it, itIdx) => (
                                            <div key={itIdx} className="flex gap-2">
                                                <input
                                                    className="flex-grow p-2 text-sm rounded-xl border border-border focus:ring-2 focus:ring-primary/20 outline-none"
                                                    value={it}
                                                    onChange={(e) => updateInterest(itIdx, e.target.value)}
                                                    placeholder="Chess, Hiking..."
                                                />
                                                <button onClick={() => removeInterest(itIdx)} className="text-muted hover:text-red-400">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const Input = ({ label, value, onChange, placeholder }: InputProps) => (
    <div className="flex flex-col gap-1.5 flex-grow">
        <label className="text-[10px] font-bold uppercase tracking-widest text-muted">{label}</label>
        <input
            className="w-full p-3 text-sm rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
);

interface TextareaProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const Textarea = ({ label, value, onChange, placeholder }: TextareaProps) => (
    <div className="flex flex-col gap-1.5 w-full">
        <label className="text-[10px] font-bold uppercase tracking-widest text-muted">{label}</label>
        <textarea
            className="w-full p-3 text-sm rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none min-h-[100px] resize-y"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
);

export default ResumeForm;
