export interface ResumeData {
    personalInfo: {
        fullName: string;
        email: string;
        phone: string;
        location: string;
        portfolio?: string;
        github?: string;
        linkedin?: string;
        summary?: string;
    };
    workExperience: {
        id: string;
        company: string;
        position: string;
        location: string;
        startDate: string;
        endDate: string;
        description: string;
        bullets: string[];
        locationType: "On-site" | "Remote" | "Hybrid";
    }[];
    education: {
        id: string;
        school: string;
        degree: string;
        location: string;
        startDate: string;
        endDate: string;
        gpa?: string;
        honors?: string;
    }[];
    certifications: string[];
    languages: string[];
    skills: {
        categories: {
            name: string;
            items: string[];
        }[];
    };
    interests: string[];
    projects: {
        id: string;
        name: string;
        description: string;
        techUsed: string;
        link?: string;
    }[];
    settings: {
        primaryColor: string;
        theme: "classic" | "modern" | "minimal";
        fontFamily: string;
        fontSize: number;
    };
}
