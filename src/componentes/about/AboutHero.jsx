import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react'; 

const statsData = [
    { value: "15+", label: "Years in Business" },
    { value: "500+", label: "Happy Clients" },
    { value: "10+", label: "Photography Awards" },
    { value: "05+", label: "International Shoots" },
    { value: "90%", label: "Client Retention Rate" },
];

const AboutHero = () => {
    // Scroll function untuk meniru "SCROLL DOWN TO SEE MY JOURNEY"
    const handleScrollToBio = () => {
        const el = document.getElementById('biography-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    // Count-up animation
    const containerRef = useRef(null);
    const animatedRef = useRef(false);
    const rafIdsRef = useRef([]);
    const [displayed, setDisplayed] = useState(statsData.map(() => '0'));

    useEffect(() => {
        const duration = 1200; // ms per item
        const stagger = 120; // ms delay between items

        const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

        const parseNumberAndSuffix = (str) => {
            const m = str.match(/(\d+(\.\d+)?)/);
            const num = m ? Number(m[0]) : 0;
            const suffix = str.replace(m ? m[0] : '', '');
            return { num, suffix };
        };

        const animateValue = (index, from, to, suffix, startDelay = 0) => {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const t = Math.min(1, elapsed / duration);
                const eased = easeOutQuad(t);
                const current = Math.floor(from + (to - from) * eased);
                setDisplayed(prev => {
                    const next = [...prev];
                    next[index] = `${current}${suffix}`;
                    return next;
                });
                if (t < 1) {
                    rafIdsRef.current[index] = requestAnimationFrame(step);
                } else {
                    setDisplayed(prev => {
                        const next = [...prev];
                        next[index] = statsData[index].value; // final exact string
                        return next;
                    });
                }
            };

            // start after delay to create stagger
            const timer = setTimeout(() => {
                rafIdsRef.current[index] = requestAnimationFrame(step);
            }, startDelay);

            // store timer id so we can cleanup if needed
            rafIdsRef.current[index] = { timerId: timer, rafId: rafIdsRef.current[index] };
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animatedRef.current) {
                    animatedRef.current = true;
                    statsData.forEach((stat, i) => {
                        const { num, suffix } = parseNumberAndSuffix(stat.value);
                        animateValue(i, 0, num, suffix, i * stagger);
                    });
                }
            });
        }, { threshold: 0.25 });

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
            // cleanup any pending rafs/timeouts
            rafIdsRef.current.forEach((item) => {
                if (item == null) return;
                if (typeof item === 'object') {
                    if (item.timerId) clearTimeout(item.timerId);
                    if (item.rafId) cancelAnimationFrame(item.rafId);
                } else {
                    cancelAnimationFrame(item);
                }
            });
            rafIdsRef.current = [];
        };
    }, []);

    return (
        // Latar belakang Putih, Teks Hitam
        <section className="bg-white text-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-36">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* 1. HEADER & JUDUL UTAMA */}
                <div className="mb-12 md:mb-16 mt-10">
                    <p className="text-sm font-light uppercase tracking-widest text-gray-600">ABOUT</p>
                    <h1 className="text-5xl md:text-7xl font-light text-gray-900 mt-1">
                        ABOUT DONI STUDIO
                    </h1>
                </div>

                {/* 2. STATISTIK (kotak kini center) */}
              

                {/* 3. FOTO PROFIL & SCROLL HINT */}
                <div className="relative mb-2 md:mb-2">
                    {/* Kotak Abu-abu Besar di Kanan Atas (Placeholder untuk gambar header) */}
                    <div className="absolute top-0 right-0 w-1/2 h-32 bg-gray-200 rounded-tl-lg rounded-br-lg hidden lg:block"></div>

                    <div className="relative w-full h-[550px] overflow-hidden rounded-xl shadow-2xl">
                        <img 
                            src="/porto/porto23.jpg" 
                            alt="Doni Studio Profile"
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Decorative icons - subtle accents */}
                        <svg className="absolute left-8 top-6 w-8 h-8 text-yellow-400 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M4.2 5.8l1.4 1.4M18.4 17.6l1.4 1.4M3 12h2m14 0h2M4.2 18.2l1.4-1.4M18.4 6.4l1.4-1.4" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>

                        <svg className="absolute right-10 top-10 w-6 h-6 text-pink-400 opacity-85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-4.35-8.5-7.5A5.5 5.5 0 0112 3a5.5 5.5 0 018.5 10.5C18 16.65 12 21 12 21z" />
                        </svg>

                        {/* Scroll Down Hint */}
                        <div 
                            className="absolute right-6 bottom-6 flex flex-col items-center cursor-pointer p-3 bg-white bg-opacity-80 rounded-lg hover:bg-opacity-100 transition duration-300"
                            onClick={handleScrollToBio}
                        >
                            <p className="text-xs font-light uppercase tracking-wider text-gray-900 mb-1">
                                Scroll Down to See
                            </p>
                            <p className="text-sm font-normal uppercase tracking-wider text-gray-900">
                                MY JOURNEY
                            </p>
                            <ArrowDown className="w-4 h-4 text-gray-900 mt-2 animate-bounce" />
                        </div>

                        {/* Lingkaran Navigasi/Arah Kiri (Hanya dekorasi) */}
                        <div className="absolute left-6 bottom-6 w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm">
                            {/* Decorative camera icon inside circle */}
                            <svg className="w-7 h-7 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                                <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
                                <path d="M8 7l1.5-3h5L16 7" />
                                <circle cx="12" cy="13.5" r="3" />
                            </svg>
                        </div>

                        {/* Additional small decorative dots */}
                        <div className="absolute left-4 top-28 flex flex-col gap-2">
                            <span className="block w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                            <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
                            <span className="block w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    );
};

export default AboutHero;