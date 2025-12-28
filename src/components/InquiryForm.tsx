"use client";

import { motion } from "framer-motion";

export default function InquiryForm() {
    return (
        <section id="contact" className="py-24 bg-deep-onyx relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-antique-gold mb-6">Initiate a Dialogue</h2>
                    <p className="text-champagne-cream/70 font-light">
                        We invite global connoisseurs to request a private showing or trade consultation.
                    </p>
                </div>

                <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-antique-gold/80 ml-1">Full Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-white/20 text-white px-1 py-3 focus:outline-none focus:border-antique-gold transition-colors font-serif placeholder:text-white/20"
                                placeholder="e.g. Alaric Vance"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-antique-gold/80 ml-1">Company / House</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-white/20 text-white px-1 py-3 focus:outline-none focus:border-antique-gold transition-colors font-serif placeholder:text-white/20"
                                placeholder="e.g. Vance & Co."
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-antique-gold/80 ml-1">Region / Country</label>
                            <select className="w-full bg-transparent border-b border-white/20 text-white px-1 py-3 focus:outline-none focus:border-antique-gold transition-colors font-serif *:bg-deep-onyx">
                                <option value="">Select Region</option>
                                <option value="uk">United Kingdom</option>
                                <option value="eu">Europe</option>
                                <option value="uae">Middle East</option>
                                <option value="us">North America</option>
                                <option value="asia">Asia Pacific</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-antique-gold/80 ml-1">Volume Interest</label>
                            <select className="w-full bg-transparent border-b border-white/20 text-white px-1 py-3 focus:outline-none focus:border-antique-gold transition-colors font-serif *:bg-deep-onyx">
                                <option value="">Select Tier</option>
                                <option value="capsule">Capsule (10-50 units)</option>
                                <option value="boutique">Boutique (50-200 units)</option>
                                <option value="retail">Retail Distribution (500+ units)</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1 pt-4">
                        <label className="text-xs uppercase tracking-widest text-antique-gold/80 ml-1">Specific Requirements</label>
                        <textarea
                            rows={4}
                            className="w-full bg-transparent border-b border-white/20 text-white px-1 py-3 focus:outline-none focus:border-antique-gold transition-colors font-serif placeholder:text-white/20 resize-none"
                            placeholder="Tell us about your fabric specifications, micron preferences, or custom design needs..."
                        ></textarea>
                    </div>

                    <div className="pt-10 text-center">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-antique-gold text-deep-onyx px-12 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors duration-500"
                        >
                            Request Private Quote
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    );
}
