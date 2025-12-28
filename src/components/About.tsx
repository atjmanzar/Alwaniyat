"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="heritage" className="py-24 md:py-32 bg-deep-onyx relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="md:w-1/2 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-antique-gold mb-8">
                            Where Royal Legacies <br /> Meet Modern Looms
                        </h2>
                        <div className="w-24 h-0.5 bg-champagne-cream/30" />
                        <div className="space-y-6 text-lg text-champagne-cream/80 font-light leading-relaxed">
                            <p>
                                In the shadowed valleys where history whispers through the pines, Alwaaniyan reawakens an ancient dialogue between thread and time. We are not merely weavers; we are custodians of a forgotten imperial grace.
                            </p>
                            <p>
                                Each shawl is a canvas where the golden echoes of royal darbars meet the silent precision of the modern loom. Sourced from the highest altitudes, our wool carries the purity of the snow, dyed in colors borrowed from twilight skies and regal courts.
                            </p>
                            <p>
                                For the connoisseur who understands that true luxury is quiet, unspoken, and felt in the warmth of a single touch—Alwaaniyan is the embrace of heritage.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-antique-gold/20">
                            <Image
                                src="/assets/draping.png"
                                alt="Alwaaniyan Shawl Draping"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-onyx/80 to-transparent" />
                        </div>

                        {/* Decimal accent */}
                        <div className="absolute -bottom-10 -right-10 text-[10rem] font-serif text-antique-gold/5 pointer-events-none select-none">
                            &
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
