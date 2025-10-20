import React from 'react';
import { MessageSquare, Calendar, Camera, Send } from 'lucide-react';

// Data Alur Kerja (4 Langkah)
const processData = [
    {
        step: 1,
        icon: MessageSquare,
        title: "Konsultasi Konsep & Kebutuhan",
        description: "Kita mulai dengan sesi diskusi mendalam untuk memahami visi, anggaran, dan semua detail proyek Anda."
    },
    {
        step: 2,
        icon: Calendar,
        title: "Perencanaan dan Penjadwalan",
        description: "Tim kami menyusun rencana pemotretan/video, mengatur lokasi, jadwal, dan menyiapkan semua peralatan yang dibutuhkan."
    },
    {
        step: 3,
        icon: Camera,
        title: "Sesi Produksi yang Profesional",
        description: "Pelaksanaan di hari-H yang dilakukan oleh tim berpengalaman untuk menangkap setiap momen dengan kualitas terbaik."
    },
    {
        step: 4,
        icon: Send,
        title: "Pasca-Produksi & Pengiriman",
        description: "Proses editing, color grading, dan retouching yang teliti. Hasil akhir siap kami kirimkan dalam format digital beresolusi tinggi."
    },
];

const OurProcessSection = () => {
    return (
        // Latar belakang Putih, Teks Hitam
        <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-sm font-light uppercase tracking-widest text-gray-600 mb-2">OUR PROCESS</p>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                        Alur Kerja Sederhana Kami
                    </h2>
                    <p className="text-base font-light text-gray-700 mt-4 max-w-2xl mx-auto">
                        Kami menjamin proses yang transparan, efisien, dan menyenangkan dari awal hingga akhir proyek Anda.
                    </p>
                </div>

                {/* Grid Alur Kerja (4 Kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processData.map((item, index) => (
                        <ProcessCard 
                            key={index}
                            step={item.step}
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

// Komponen Kartu Proses
const ProcessCard = ({ step, icon, title, description }) => {
    const Icon = icon;
    return (
        <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl bg-gray-50 shadow-sm hover:shadow-lg transition duration-300">
            
            {/* Nomor Langkah */}
            <div className="relative mb-6">
                <span className="text-6xl font-extralight text-gray-200 block leading-none">0{step}</span>
                {/* Ikon di Tengah Nomor */}
                <div className="absolute inset-0 flex items-center justify-center p-2 rounded-full">
                    <Icon className="w-6 h-6 text-gray-900" />
                </div>
            </div>
            
            {/* Judul */}
            <h3 className="text-lg font-normal text-gray-900 mb-3">
                {title}
            </h3>

            {/* Deskripsi */}
            <p className="text-sm font-light text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default OurProcessSection;