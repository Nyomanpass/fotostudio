import React from 'react';
import { Camera, Users, Zap, Award } from 'lucide-react'; 

// Data Keunggulan
const keunggulanData = [
    {
        icon: Users, // Mengganti ikon
        title: "Tim Ramah & Profesional",
        description: "Kami memastikan setiap klien merasa nyaman dan mendapat pelayanan terbaik dari tim ahli yang berpengalaman."
    },
    {
        icon: Camera, // Mengganti ikon
        title: "Berpengalaman",
        description: "Tim fotografer dan videografer profesional dengan pengalaman bertahun-tahun di berbagai jenis acara."
    },
    {
        icon: Zap,
        title: "Proses Cepat",
        description: "Hasil foto dan video siap dalam waktu yang telah disepakati tanpa mengurangi kualitas dan detail."
    },
    {
        icon: Award,
        title: "Peralatan Lengkap",
        description: "Menggunakan kamera dan equipment terkini, terbaru, dan terbaik untuk menghasilkan visual yang maksimal."
    },
];

const KeunggulanKamiSection = () => {
    return (
        // Latar belakang Hitam/Abu-abu gelap pekat, Teks Putih
        <section className="bg-gray-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Header Section */}
                <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-2">
                    Keunggulan Kami
                </h2>
                <p className="text-base font-light text-gray-400 mb-16">
                    Mengapa memilih DoniStudio?
                </p>

                {/* Grid Keunggulan (4 Kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {keunggulanData.map((item, index) => (
                        <KeunggulanCard 
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

// Komponen Kartu Keunggulan
const KeunggulanCard = ({ icon, title, description }) => {
    const Icon = icon;
    return (
        <div className="flex flex-col items-center text-center">
            
            {/* Ikon dengan Latar Belakang Gelap dan Aksen Emas */}
            <div className="p-5 mb-6 rounded-full bg-gray-800 border-2 border-yellow-700 shadow-xl transition duration-300 hover:bg-gray-700">
                {Icon ? <Icon className="w-8 h-8 text-yellow-500" /> : null}
            </div>

            {/* Judul */}
            <h3 className="text-xl font-normal text-white mb-3">
                {title}
            </h3>

            {/* Deskripsi */}
            <p className="text-sm font-light text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default KeunggulanKamiSection;