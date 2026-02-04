"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import {
  FileText,
  Briefcase,
  Rocket,
  Lightbulb,
  PenTool
} from "lucide-react";

export default function Home() {
  const categories = [
    {
      title: "Question Papers & Study Materials",
      icon: FileText,
      color: "#fb923c", // Orange
      count: "2000+ Files",
      href: "/coming-soon"
    },
    {
      title: "Jobs & Internships",
      icon: Briefcase,
      color: "#38bdf8", // Sky
      count: "150+ Openings",
      href: "/internships"
    },
    {
      title: "Project Guidance",
      icon: Rocket,
      color: "#f472b6", // Pink
      count: "50+ Mentors",
      href: "/project-guidance"
    },
    {
      title: "Project Solutions",
      icon: Lightbulb,
      color: "#4ade80", // Green
      count: "300+ Solved",
      href: "/coming-soon"
    },
    {
      title: "Resume Builder",
      icon: PenTool,
      color: "#a78bfa", // Violet
      count: "Free Templates",
      href: "/resume"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/10 selection:text-primary">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Animated Ticker */}
        <div className="bg-primary py-2 overflow-hidden border-y border-white/10">
          <div className="animate-marquee whitespace-nowrap text-white text-xs font-bold uppercase tracking-[0.2em]">
            New Study Materials Added • 50+ New Internship Openings • Best Project Solutions for Final Year • Professional Resume Templates now available •&nbsp;
            New Study Materials Added • 50+ New Internship Openings • Best Project Solutions for Final Year • Professional Resume Templates now available •&nbsp;
            New Study Materials Added • 50+ New Internship Openings • Best Project Solutions for Final Year • Professional Resume Templates now available •&nbsp;

          </div>
        </div>

        {/* Categories Section */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-3 mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Explore by Category
              </h2>
              <p className="text-muted text-lg max-w-2xl">
                Quickly find what you need with our organized resource centers.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  color={category.color}
                  count={category.count}
                  href={category.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Teaser */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32" />

              <div className="text-center md:text-left relative z-10 flex-1">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  SimpleTech is now <br /> in your pocket!
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-10 max-w-md">
                  Download our mobile app to get instant notifications about job openings and new study materials.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button className="px-8 py-3 rounded-xl bg-white text-primary font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
                    App Store
                  </button>
                  <button className="px-8 py-3 rounded-xl bg-white/10 text-white border border-white/20 font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                    Play Store
                  </button>
                </div>
              </div>

              <div className="relative z-10 flex-1 flex justify-center mt-8 md:mt-0">
                <div className="w-[280px] h-[550px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 soft-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl" />
                  <div className="p-4 pt-12">
                    <div className="w-12 h-12 bg-primary rounded-xl mb-4" />
                    <div className="w-full h-4 bg-slate-700 rounded-full mb-2" />
                    <div className="w-2/3 h-4 bg-slate-700 rounded-full mb-8" />

                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-square bg-slate-800 rounded-2xl" />
                      <div className="aspect-square bg-slate-800 rounded-2xl" />
                      <div className="aspect-square bg-slate-800 rounded-2xl" />
                      <div className="aspect-square bg-slate-800 rounded-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileFooter />
    </div>
  );
}

