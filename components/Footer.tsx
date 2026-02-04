"use client";

import Link from "next/link";
import { Github, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="hidden md:block bg-white border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo & About */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center group">
                            <Logo className="h-10 w-auto" />
                        </Link>
                        <p className="text-muted leading-relaxed">
                            The ultimate platform for college students to excel in their academic and professional journey.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-lg bg-slate-50 text-muted hover:text-primary hover:bg-primary/5 transition-all">
                                <Github size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-lg bg-slate-50 text-muted hover:text-primary hover:bg-primary/5 transition-all">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-lg bg-slate-50 text-muted hover:text-primary hover:bg-primary/5 transition-all">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Resources</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="#" className="text-muted hover:text-primary transition-colors">Study Materials</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary transition-colors">Project Solutions</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary transition-colors">Question Papers</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary transition-colors">Resume Tips</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Support</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="#" className="text-muted hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Get In Touch</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3 text-muted">
                                <Mail size={18} className="text-primary" />
                                <span>info@simpletech.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <MapPin size={18} className="text-primary" />
                                <span>Guwahati, Assam</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted">
                        © {new Date().getFullYear()} SimpleTech Platform. All rights reserved.
                    </p>
                    <p className="text-sm text-muted">
                        Designed and Developed by Students of Department of ETC 6th Semester
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
