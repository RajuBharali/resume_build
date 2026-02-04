"use client";

import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-20">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-4000" />

            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
                    <Sparkles className="w-3 h-3" />
                    <span>Your College Companion</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Empowering Every <br className="hidden md:block" />
                    <span className="text-primary">College Student</span>
                </h1>

                <p className="max-w-[600px] mx-auto text-lg md:text-xl text-muted mb-10 leading-relaxed">
                    Access study materials, find jobs, get project guidance, and build your professional resume—all in one place.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all soft-shadow flex items-center justify-center gap-2 group">
                        Explore Resources
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-border text-foreground font-bold hover:bg-slate-50 transition-all">
                        Join Community
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
