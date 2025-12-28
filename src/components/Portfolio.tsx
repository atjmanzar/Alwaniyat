"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const collections = [
    {
        id: "sovereign",
        title: "The Sovereign Series",
        description: "The pinnacle of opulence. Hand-spun Pashmina blended with rare Vicuña, adorned with 24k gold-threaded Zari work. A tribute to the imperial wardrobes of yore.",
        type: "Luxury",
        image: "/assets/embroidery.png"
    },
    {
        id: "heritage",
        title: "The Heritage Loom",
        description: "Where volume meets virtue. Premium Merino wool shawls featuring intricate Jamawar motifs, crafted for the discerning global retailer seeking consistent excellence.",
        type: "Premium",
        image: "/assets/hero-bg.png"
    },
    {
        id: "artisan",
        title: "The Artisan’s Capsule",
        description: "Limited edition masterpieces. Each piece acts as a signed canvas by our master weavers, featuring experimental dyes and reviving lost weave patterns.",
        type: "Limited Edition",
        image: "/assets/draping.png"
    }
];

export default function Portfolio() {
    return (
        <section id="collections" className="py-24 bg-[#151515]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Curated Collections</h2>
                    <p className="text-antique-gold tracking-widest uppercase text-sm">Discover Our Range</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative h-[500px] overflow-hidden border border-white/5">
                                <Image
                                    src={collection.image}
                                    alt={collection.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-antique-gold text-xs tracking-[0.2em] uppercase block mb-2">{collection.type}</span>
                                    <h3 className="text-2xl font-serif text-white mb-4">{collection.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {collection.description}
                                    </p>
                                    <div className="mt-6 flex items-center text-white text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        <span>VIEW DETAILS</span>
                                        <span className="ml-2 w-8 h-[1px] bg-antique-gold" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
