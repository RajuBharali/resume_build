import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "./data";

export const metadata: Metadata = {
    title: 'Project Guidance',
    description: 'Step-by-step guides for electronics and software projects.',
};

export default function ProjectGuidancePage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-4">
                            Project Guidance
                        </h1>
                        <p className="text-muted text-lg max-w-2xl">
                            Step-by-step guides for building innovative electronics and software projects.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <MobileFooter />
        </div>
    );
}
