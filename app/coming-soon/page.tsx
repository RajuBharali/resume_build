"use client";

import Link from "next/link";
import { Hammer, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow flex items-center justify-center p-4">
                <div className="max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Hammer className="w-12 h-12 text-primary animate-pulse" />
                    </div>

                    <h1 className="text-4xl font-extrabold text-foreground tracking-tight">
                        Work in Progress!
                    </h1>

                    <p className="text-muted text-lg leading-relaxed">
                        We&apos;re currently building this feature to make it perfect for you. Check back soon for updates!
                    </p>

                    <div className="pt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all soft-shadow group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
            <MobileFooter />
        </div>
    );
}
