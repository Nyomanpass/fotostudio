import React from 'react';
import { ArrowDown } from 'lucide-react'; 

// Data Statistik
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
                            src="/headertiga.jpg" // Ganti dengan path foto profil Doni Studio
                            alt="Doni Studio Profile"
                            className="w-full h-full object-cover"
                        />
                        
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
                        <div className="absolute left-6 bottom-6 w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center">
                            {/* Bisa ditambahkan ikon navigasi jika diperlukan */}
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    );
};

export default AboutHero;