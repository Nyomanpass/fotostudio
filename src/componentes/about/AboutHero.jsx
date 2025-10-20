import React from 'react';
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
        document.getElementById('biography-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        // Latar belakang Putih, Teks Hitam
        <section className="bg-white text-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. HEADER & JUDUL UTAMA */}
                <div className="mb-12 md:mb-16 mt-10">
                    <p className="text-sm font-light uppercase tracking-widest text-gray-600">ABOUT</p>
                    <h1 className="text-5xl md:text-7xl font-light text-gray-900 mt-1">
                        ABOUT DONI STUDIO
                    </h1>
                </div>

                {/* 2. STATISTIK (Kotak Hitam di Atas Latar Putih) */}
                <div className="flex flex-wrap justify-start gap-4 md:gap-8 mb-16 md:mb-24">
                    {statsData.map((stat, index) => (
                        <div 
                            key={index} 
                            // Mempertahankan desain kotak gelap dari referensi, tetapi dengan border dan shadow di atas latar putih
                            className="p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md flex-shrink-0"
                            style={{ minWidth: '150px' }}
                        >
                            <p className="text-3xl md:text-4xl font-light text-gray-900 mb-1">
                                {stat.value}
                            </p>
                            <p className="text-sm font-light text-gray-600">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. FOTO PROFIL & SCROLL HINT */}
                <div className="relative mb-20 md:mb-32">
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