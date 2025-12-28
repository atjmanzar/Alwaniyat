"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-deep-onyx/90 backdrop-blur-md border-b border-antique-gold/20 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl md:text-3xl font-serif text-antique-gold tracking-wider">
                    ALWAANIYAN
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {["Heritage", "Collections", "Craftsmanship", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm uppercase tracking-widest hover:text-antique-gold transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="px-6 py-2 border border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-deep-onyx transition-all duration-300 uppercase text-xs tracking-widest">
                        B2B Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-champagne-cream"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-deep-onyx border-b border-antique-gold/20 p-6 md:hidden flex flex-col space-y-4"
                    >
                        {["Heritage", "Collections", "Craftsmanship", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-center text-sm uppercase tracking-widest py-2 hover:text-antique-gold"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full py-3 border border-antique-gold text-antique-gold uppercase text-xs tracking-widest">
                            B2B Login
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
