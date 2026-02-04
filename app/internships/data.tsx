import { ReactNode } from "react";

export interface Internship {
    type: "Internship" | "Job";
    title: string;
    organization: string;
    location: string;
    duration: string;
    eligibility: string;
    description: string;
    isClosed?: boolean;
    reopenDate?: string;
    details: ReactNode;
}

export const internships: Internship[] = [
    {
        type: "Internship",
        title: "Internship & Project Work Scheme",
        organization: "URSC (ISRO Centre)",
        location: "Bengaluru, India",
        duration: "15 - 45 Days (Internship) / 45 - 120 Days (Project)",
        eligibility: "UG/PG/PhD Students (See details)",
        description: "As part of the holistic education concept of NEP-2020, URSC (one of the leading Centres of ISRO) provides opportunity for student's community to carry out Internship as well as project work as part of their academic curriculum.",
        isClosed: true,
        reopenDate: "04 May 2026 at 10:00Hrs",
        details: (
            <div className="space-y-6">
                <section>
                    <h4 className="text-lg font-bold mb-2">Internship Scheme</h4>
                    <p><strong>Target Audience:</strong> UG/PG/PhD students.</p>
                    <p><strong>Duration:</strong> Minimum 15 days, Maximum 45 days.</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Must be a Citizen of India.</li>
                        <li>Pursuing UG/PG/PhD from a recognized University/Institution (India/Abroad).</li>
                        <li>OR completed UG/PG seeking internship within 6 months of course completion.</li>
                        <li>No Stipend, transport, or canteen facility provided.</li>
                    </ul>
                </section>

                <section>
                    <h4 className="text-lg font-bold mb-2">Student Project Trainee Scheme</h4>
                    <p>Opportunity for final year/semester project work.</p>
                    <div className="overflow-x-auto mt-2">
                        <table className="min-w-full text-sm border-collapse border border-border">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="border border-border p-2 text-left">Degree</th>
                                    <th className="border border-border p-2 text-left">Eligibility Criteria</th>
                                    <th className="border border-border p-2 text-left">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-border p-2">BE/BTech</td>
                                    <td className="border border-border p-2">Completed 6th semester</td>
                                    <td className="border border-border p-2">Min 45 days</td>
                                </tr>
                                <tr>
                                    <td className="border border-border p-2">ME/MTech</td>
                                    <td className="border border-border p-2">Completed 1st semester</td>
                                    <td className="border border-border p-2">Min 120 days</td>
                                </tr>
                                <tr>
                                    <td className="border border-border p-2">BSc/Diploma</td>
                                    <td className="border border-border p-2">Only final year students</td>
                                    <td className="border border-border p-2">Min 45 days</td>
                                </tr>
                                <tr>
                                    <td className="border border-border p-2">MSc</td>
                                    <td className="border border-border p-2">Completed 1st semester</td>
                                    <td className="border border-border p-2">Min 120 days</td>
                                </tr>
                                <tr>
                                    <td className="border border-border p-2">PhD</td>
                                    <td className="border border-border p-2">Scholars having completed course work</td>
                                    <td className="border border-border p-2">Min 30 days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-2 text-xs italic">* Minimum 60% aggregate or CGPA 6.32/10 required.</p>
                </section>

                <section>
                    <h4 className="text-lg font-bold mb-2">How to Apply</h4>
                    <p>Interested students must send their resume, request letter from college (HOD/Principal), and marksheets by post or email to:</p>
                    <div className="bg-slate-50 p-4 rounded-xl mt-2 border border-border">
                        <p className="font-bold">Head, HRDD, PPEG</p>
                        <p>U R Rao Satellite Centre</p>
                        <p>#17, Old Airport Road, Vimanapura Post, Bengaluru-560017</p>
                        <p className="mt-2"><strong>Email:</strong> hrddoffice[at]ursc[dot]gov[dot]in</p>
                    </div>
                    <p className="mt-4 text-sm text-red-500 font-bold">
                        Note: The portal is closed for the 01 April - 30 June 2026 window. Reopens on 04 May 2026 for July-Sept 2026 window.
                    </p>
                </section>
            </div>
        )
    },
    {
        type: "Job",
        title: "Software Engineer (Frontend)",
        organization: "TechCorp Solutions",
        location: "Remote / Bengaluru",
        duration: "Full-time",
        eligibility: "B.Tech/BE in CS/IT or related field",
        description: "Join our dynamic team building the next generation of ed-tech solutions. We are looking for passionate frontend developers receiving a competitive salary package.",
        details: (
            <div className="space-y-4">
                <p><strong>Role:</strong> Junior Frontend Developer</p>
                <p><strong>Package:</strong> 6 - 12 LPA based on experience.</p>
                <h4 className="text-lg font-bold">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Proficiency in React.js, Next.js, and Tailwind CSS.</li>
                    <li>Strong understanding of JavaScript/TypeScript.</li>
                    <li>Experience with REST APIs and state management.</li>
                    <li>Good problem-solving skills and attention to detail.</li>
                </ul>
                <h4 className="text-lg font-bold mt-4">Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Remote-first work culture.</li>
                    <li>Health insurance and annual learning budget.</li>
                    <li>Flexible working hours.</li>
                </ul>
            </div>
        )
    }
];
