"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/60" /> {/* Overlay for readability */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <motion.h1
                        initial={{ opacity: 0, letterSpacing: "0em" }}
                        animate={{ opacity: 1, letterSpacing: "0.1em" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif text-antique-gold mb-6"
                    >
                        Alwaaniyan
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-1 bg-antique-gold mx-auto mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                        className="text-xl md:text-2xl text-champagne-cream font-light tracking-wider"
                    >
                        The Loom of Heritage <br />
                        <span className="text-base md:text-lg opacity-80 mt-2 block">
                            Exquisite Indian Shawls Crafted for the Global Connoisseur
                        </span>
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-12"
                >
                    <div className="w-6 h-10 border-2 border-champagne-cream/30 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-1 h-2 bg-antique-gold rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
