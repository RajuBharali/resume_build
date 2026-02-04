import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import InternshipCard from "@/components/InternshipCard";
import { internships } from "./data";

export const metadata: Metadata = {
    title: 'Internships & Jobs',
    description: 'Find the latest internships and job opportunities in tech and engineering.',
};

export default function InternshipsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-4">
                            Explore Opportunities
                        </h1>
                        <p className="text-muted text-lg max-w-2xl">
                            Gain practical experience with top organizations. Check out available internships and jobs below.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {internships.map((internship, index) => (
                            <InternshipCard key={index} {...internship} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <MobileFooter />
        </div>
    );
}
