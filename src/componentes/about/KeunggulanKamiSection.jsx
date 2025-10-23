import React from 'react';
import { Camera, Users, Zap, Award } from 'lucide-react'; 

// Data Keunggulan
const keunggulanData = [
    {
        icon: Users, // Mengganti ikon
        title: "Tim Ramah & Profesional",
        description: "Kami memastikan setiap klien merasa nyaman dan mendapat pelayanan terbaik."
    },
    {
        icon: Camera, // Mengganti ikon
        title: "Berpengalaman",
        description: "Tim fotografer dan videografer profesional dan bepengalaman."
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
        // Ganti Latar Belakang menjadi Abu Muda (bg-gray-100/200) & Text menjadi Gelap (text-gray-800)
        <section className="bg-gray-400 text-gray-800 py-16 md:py-24 px-4 sm:px-6 lg:px-36"> 
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Header Section */}
                {/* Ganti warna teks header menjadi abu gelap pekat */}
                <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-2"> 
                    Keunggulan Kami
                </h2>
                {/* Ganti warna teks deskripsi menjadi abu-abu sedang */}
                <p className="text-base font-light text-white mb-16"> 
                    Mengapa memilih DoniStudio?
                </p>

                {/* Grid Keunggulan (4 Kolom) - INI YANG HARUS DIPERBAIKI */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {keunggulanData.map((item, index) => ( // <--- KODE MAPPING INI HILANG
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
            
            {/* Ikon: Ganti Latar Belakang menjadi Putih/Abu muda (bg-white) */}
            <div className="p-5 mb-6 rounded-full bg-white border-2 border-gray-300 shadow-xl transition duration-300 hover:bg-gray-50">
                {Icon ? <Icon className="w-8 h-8 text-gray-600" /> : null} {/* Ubah aksen emas jadi yellow-600 */}
            </div>

            {/* Judul: Ganti warna teks menjadi Abu Gelap Pekat */}
            <h3 className="text-xl font-normal text-white mb-3"> 
                {title}
            </h3>

            {/* Deskripsi: Ganti warna teks menjadi Abu Sedang */}
            <p className="text-sm font-light text-gray-200 leading-relaxed"> 
                {description}
            </p>
        </div>
    );
};

export default KeunggulanKamiSection;