export default function Footer() {
    return (
        <footer className="bg-black text-white/40 py-12 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="font-serif text-2xl text-antique-gold/60 mb-2">Alwaaniyan</p>
                    <p className="text-xs tracking-widest uppercase">The Heritage of Kashmir</p>
                </div>

                <div className="flex space-x-6 text-xs uppercase tracking-widest">
                    <a href="#" className="hover:text-antique-gold transition-colors">Legal</a>
                    <a href="#" className="hover:text-antique-gold transition-colors">Press</a>
                    <a href="#" className="hover:text-antique-gold transition-colors">Sitemap</a>
                </div>

                <div className="text-xs tracking-widest">
                    © {new Date().getFullYear()} Alwaaniyan. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
