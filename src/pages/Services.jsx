import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Heart, Camera, Video, Briefcase, Box, PenTool } from 'lucide-react'; 

// Import header yang baru dibuat (Asumsikan sudah dimodifikasi untuk bg-white)
import ServiceHeader from '../componentes/services/ServiceHeader';
import Navbar from '../componentes/Navbar';
import FaqSection from '../componentes/FaqSection';
import Footer from '../componentes/Footer';
import CtaSection from '../componentes/CtaSection';

// Data layanan
const servicesData = [
    {
        icon: Heart,
        title: "Wedding Photography",
        description: "Abadikan momen sakral pernikahan Anda dengan detail sempurna dan penuh emosi.",
        highlights: [
            "Coverage penuh dari tim berpengalaman.",
            "Album eksklusif dengan desain premium.",
            "Konsultasi konsep foto sebelum hari-H.",
            "Pengiriman hasil cepat untuk momen penting."
        ],
        image: '/porto/porto33.jpg', 
    },
    {
        icon: Camera,
        title: "Prewedding Photoshoot",
        description: "Sesi foto romantis di lokasi pilihan Anda dengan konsep yang unik, menceritakan kisah cinta Anda.",
        highlights: [
            "Pilihan lokasi Indoor & Outdoor.",
            "Gratis sesi konsultasi wardrobe.",
            "Tim profesional yang mengarahkan pose.",
            "Hasil foto beresolusi tinggi siap cetak."
        ],
        image: '/porto/porto20.jpg', 
    },
    {
        icon: Video,
        title: "Engagement / Lamaran",
        description: "Dokumentasi video cinematic untuk momen lamaran yang berkesan.",
        highlights: [
            "Video cinematic 4K.",
            "Tim videografer spesialis lamaran.",
            "Sound recording berkualitas tinggi.",
            "Durasi video custom sesuai permintaan."
        ],
        image: '/porto/porto34.jpg', 
    },
     {
        icon: Briefcase,
        title: "Event Coverage",
        description: "Liputan lengkap untuk ulang tahun, wisuda, hingga acara corporate.",
        highlights: [
            "Coverage untuk Parties, Corporate Functions, dan More.",
            "Fotografer & Videografer berpengalaman.",
            "Hasil dokumentasi siap publikasi.",
            "Turnaround cepat untuk highlights hari itu."
        ],
        image: '/porto/porto36.jpg', 
    },
    {
        icon: Box,
        title: "Product Photography",
        description: "Foto produk profesional untuk meningkatkan branding bisnis Anda.",
        highlights: [
            "Foto katalog dan E-commerce.",
            "Konsep dan styling produk terarah.",
            "Foto 360 derajat (opsional).",
            "Lisensi penggunaan komersial penuh."
        ],
        image: '/porto/porto38.jpg', 
    },
    {
        icon: PenTool,
        title: "Video Editing",
        description: "Layanan editing video profesional untuk hasil yang memukau.",
        highlights: [
            "Editing untuk keperluan komersial, event, atau pribadi.",
            "Koreksi warna (Color Grading) profesional.",
            "Penambahan musik dan sound effect.",
            "Revisi tak terbatas sampai puas (syarat & ketentuan berlaku)."
        ],
       image: '/porto/porto37.jpg', 
    },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];

    return (
        <>
            <Navbar/>
            <ServiceHeader /> 

            {/* Bagian 2: Detail Layanan Interaktif (LATAR BELAKANG PUTIH) */}
            <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-36 text-gray-900">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Judul Sub-Section */}
                    <h2 className="text-4xl font-light text-center mb-12">
                        Pilih Kebutuhan Visual Anda
                    </h2>

                    {/* Daftar Pilihan Layanan di Atas Detail */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {servicesData.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`px-6 py-3 rounded-lg text-base font-normal transition duration-300 shadow-md ${
                                    index === activeIndex 
                                    ? 'bg-gray-800 text-white' // Highlight Hitam
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-200' // Teks Abu-abu
                                }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>


                    {/* Konten Detail Layanan Aktif */}
                    <div className="flex flex-col lg:flex-row gap-12 p-8 bg-gray-50 rounded-xl shadow-xl">
                        
                        {/* Kolom Kiri: Detail Teks (Diubah posisi agar lebih menonjol) */}
                        <div className="lg:w-1/2 space-y-8 p-6 transition-all duration-500">
                            
                            {/* Judul Layanan Aktif */}
                            <h3 className="text-4xl font-normal text-gray-900 border-b border-gray-200 pb-4">
                                {activeService.title}
                            </h3>

                            {/* Deskripsi */}
                            <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
                                {activeService.description}
                            </p>

                            {/* Service Highlights */}
                            <div className="space-y-4 pt-4">
                                <p className="text-sm font-medium uppercase tracking-wider text-gray-600">Detail Yang Anda Dapatkan</p>
                                {activeService.highlights.map((highlight, i) => (
                                    <div key={i} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                                        <p className="text-base font-light text-gray-700">{highlight}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tombol CTA di Bawah Detail */}
                             <a 
                                href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo, saya tertarik dengan paket ${activeService.title}. Bisa kirimkan detail & pricelist?`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                 className="inline-flex items-center space-x-2 mt-8 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition duration-300 text-base font-medium shadow-xl"
                             >
                                 <span>Get Pricelist & Book Now</span>
                                 <ArrowRight size={18} />
                             </a>
                        </div>
                        
                        {/* Kolom Kanan: Gambar Layanan Aktif */}
                        <div className="lg:w-1/2 relative">
                            <img 
                                key={activeService.image} 
                                src={activeService.image} 
                                alt={activeService.title}
                                className="w-full h-full object-cover rounded-xl shadow-2xl transition-opacity duration-500 opacity-100"
                                style={{ minHeight: '450px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Bagian 3: Section Ringkasan Semua Layanan (Melengkapi Halaman) */}
            <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-36 text-gray-900 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-light text-center mb-12">
                        Seluruh Layanan DoniStudio
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceGridCard 
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Bagian 4: Final CTA (Ajakan Penutup) */}
            <section className="bg-gray-400 py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl md:text-5xl font-light mb-6">
                        Punya Proyek Unik?
                    </h3>
                    <p className="text-lg font-light text-white mb-8 px-10">
                        Jika layanan di atas belum sesuai dengan kebutuhan spesifik Anda, jangan ragu untuk berdiskusi dengan kami.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center space-x-3 bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-200 transition duration-300 text-base font-medium shadow-xl"
                    >
                        <span>Mulai Konsultasi Gratis</span>
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>
            <CtaSection/>
            <Footer/>
        </>
    );
};

// Komponen Kartu Grid Layanan
const ServiceGridCard = ({ icon, title, description }) => {
    const Icon = icon;
    return (
        <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-xl hover:border-gray-300">
            <div className="flex items-center space-x-3 mb-4">
                {Icon ? <Icon className="w-6 h-6 text-gray-900" /> : <span className="w-6 h-6 inline-block" />}
                <h4 className="text-xl font-normal text-gray-900">
                    {title}
                </h4>
            </div>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};


export default Services;