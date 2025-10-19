import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Camera, Video, Briefcase, Box, PenTool, CheckCircle } from 'lucide-react'; 

// Data layanan yang akan ditampilkan di sidebar (6 services)
const servicesData = [
    {
        icon: Heart,
        title: "Wedding Photography",
        description: "Abadikan momen sakral pernikahan Anda dengan detail sempurna dan penuh emosi, mencakup persiapan hingga resepsi.",
        highlights: [
            "Coverage penuh dari tim berpengalaman.",
            "Album eksklusif dengan desain premium.",
            "Konsultasi konsep foto sebelum hari-H.",
            "Pengiriman hasil cepat untuk momen penting."
        ],
        // Ganti dengan URL gambar yang relevan untuk layanan ini
        image: '/fotostudio.jpg', 
    },
    {
        icon: Camera,
        title: "Prewedding Photoshoot",
        description: "Sesi foto romantis di lokasi pilihan Anda dengan konsep yang unik, menceritakan kisah cinta Anda secara visual.",
        highlights: [
            "Pilihan lokasi Indoor & Outdoor.",
            "Gratis sesi konsultasi wardrobe.",
            "Tim profesional yang mengarahkan pose.",
            "Hasil foto beresolusi tinggi siap cetak."
        ],
        image: '/fotostudio.jpg', 
    },
    {
        icon: Video,
        title: "Engagement / Lamaran",
        description: "Dokumentasi video cinematic untuk momen lamaran yang berkesan, menangkap setiap janji dan kebahagiaan.",
        highlights: [
            "Video cinematic 4K.",
            "Tim videografer spesialis lamaran.",
            "Sound recording berkualitas tinggi.",
            "Durasi video custom sesuai permintaan."
        ],
        image: '/fotostudio.jpg', 
    },
    {
        icon: Briefcase,
        title: "Event Coverage",
        description: "Liputan lengkap untuk ulang tahun, wisuda, hingga acara corporate, memastikan tidak ada momen yang terlewat.",
        highlights: [
            "Coverage untuk Parties, Corporate Functions, dan More.",
            "Fotografer & Videografer berpengalaman.",
            "Hasil dokumentasi siap publikasi.",
            "Turnaround cepat untuk highlights hari itu."
        ],
        image: '/fotostudio.jpg', 
    },
    {
        icon: Box,
        title: "Product Photography",
        description: "Foto produk profesional untuk meningkatkan branding bisnis Anda dan daya tarik di platform e-commerce.",
        highlights: [
            "Foto katalog dan E-commerce.",
            "Konsep dan styling produk terarah.",
            "Foto 360 derajat (opsional).",
            "Lisensi penggunaan komersial penuh."
        ],
        image: '/fotostudio.jpg', 
    },
    {
        icon: PenTool,
        title: "Video Editing",
        description: "Layanan editing video profesional untuk hasil yang memukau, mengubah rekaman mentah menjadi karya sinematik.",
        highlights: [
            "Editing untuk keperluan komersial, event, atau pribadi.",
            "Koreksi warna (Color Grading) profesional.",
            "Penambahan musik dan sound effect.",
            "Revisi tak terbatas sampai puas (syarat & ketentuan berlaku)."
        ],
       image: '/fotostudio.jpg', 
    },
];

const ServiceDetailSection = () => {
    // State untuk melacak layanan mana yang sedang aktif (default: layanan pertama)
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];

    // Fungsi untuk navigasi carousel
    const handleNavigation = (direction) => {
        let newIndex = activeIndex;
        if (direction === 'prev') {
            newIndex = (activeIndex - 1 + servicesData.length) % servicesData.length;
        } else {
            newIndex = (activeIndex + 1) % servicesData.length;
        }
        setActiveIndex(newIndex);
    };

    return (
        // Latar belakang gelap (Dark Mode)
        <section className="bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section (Mirip Desain Gambar) */}
                <div className="flex justify-between items-center mb-12 md:mb-16">
                    <div>
                        <p className="text-sm font-light uppercase tracking-widest text-gray-400">SERVICES</p>
                        <h2 className="text-4xl md:text-4xl font-light text-white mt-1">
                            MY PHOTOGRAPHY SERVICES
                        </h2>
                    </div>

                    {/* Navigasi Carousel & View All */}
                    <div className="flex items-center space-x-4">
                        {/* Tombol Navigasi */}
                        <div className="hidden sm:flex space-x-2">
                            <button 
                                onClick={() => handleNavigation('prev')}
                                className="p-3 rounded-full border border-gray-700 hover:bg-gray-800 transition duration-300"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-400" />
                            </button>
                            <button 
                                onClick={() => handleNavigation('next')}
                                className="p-3 rounded-full bg-white hover:bg-gray-200 transition duration-300"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-900" />
                            </button>
                        </div>
                        
                        {/* Tombol View All Services */}
                        <a 
                            href="#all-services" 
                            className="flex items-center space-x-2 bg-gray-800 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-sm font-light"
                        >
                            <span>View All Services</span>
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>

                {/* Konten Utama Layanan (Dua Kolom: Teks Kiri, Gambar Kanan) */}
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Kolom Kiri: Detail Teks (Interaktif) */}
                    <div className="lg:w-1/2 space-y-8 p-6 bg-gray-800 rounded-xl shadow-2xl transition-all duration-500">
                        
                        {/* Judul Layanan Aktif */}
                        <div className="flex items-center space-x-4 mb-6">
                            
                            <h3 className="text-3xl font-light text-white">{activeService.title}</h3>
                        </div>

                        {/* Deskripsi */}
                        <p className="text-base font-light text-gray-300 leading-relaxed mb-8">
                            {activeService.description}
                        </p>

                        {/* Service Highlights */}
                        <div className="space-y-4">
                            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Service Highlights</p>
                            {activeService.highlights.map((highlight, i) => (
                                <div key={i} className="flex items-start space-x-3 p-4 bg-gray-700 rounded-lg shadow-md">
                                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                    <p className="text-base font-light text-gray-200">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Kolom Kanan: Gambar Layanan Aktif */}
                    <div className="lg:w-1/2 relative">
                        {/* Gambar */}
                        <img 
                            key={activeService.image} // Key untuk memaksa re-render (animasi)
                            src={activeService.image} 
                            alt={activeService.title}
                            className="w-full h-full object-cover rounded-xl shadow-xl transition-opacity duration-500 opacity-100"
                            style={{ minHeight: '400px' }}
                        />
                    </div>
                </div>

                {/* Indikator Pilihan Layanan di Bawah (Opsional) */}
                <div className="mt-16 flex flex-wrap justify-center gap-4">
                    {servicesData.map((service, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                                index === activeIndex 
                                ? 'bg-white text-gray-900 shadow-lg' 
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceDetailSection;