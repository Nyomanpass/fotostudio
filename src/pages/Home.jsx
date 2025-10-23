import React, { useState, useEffect } from 'react';
import Navbar from "../componentes/Navbar";
import ServiceSection from '../componentes/ServicesSection';
import AboutSection from '../componentes/AboutSection';
import PortfolioSection from '../componentes/PortfolioSection';
import FaqSection from '../componentes/FaqSection';
import TestimonialSection from '../componentes/TestimonialSection';
import CtaSection from '../componentes/CtaSection';
import Footer from '../componentes/Footer';

// Definisikan data untuk setiap slide
const slidesData = [
    {
        id: 1,
        image: '/porto/porto37.jpg', // Ganti dengan path gambar pertama Anda
        pTitle: 'PLAYBACK VIDEOS',
        hTitle: 'BUSINESS TALK WITH HIERØS',
        subText: 'Intimate Sharing Session w/ Hieros Photography (Zoom Record)',
        // Tambahan deskripsi Anda
        descServices: 'Wedding • Prewedding • Event • Product Shoot • Video Editing',
        descStats: 'Lebih dari 500+ momen sudah kami dokumentasikan dengan penuh rasa dan detail.'
    },
    {
        id: 2,
        image: '/porto/porto19.jpg', // Ganti dengan path gambar kedua Anda
        pTitle: 'PRE-WEDDING & WEDDING',
        hTitle: 'CINTA ABADI DALAM FOTO',
        subText: 'Jadikan momen sekali seumur hidup tak terlupakan.',
        // Tambahan deskripsi Anda
        descServices: 'Outdoor • Indoor • Cinematic Video',
        descStats: 'Ratusan pasangan bahagia telah memilih kami.'
    },
    {
        id: 3,
        image: '/porto/porto38.jpg', // Ganti dengan path gambar ketiga Anda
        pTitle: 'PRODUCT & COMMERCIAL',
        hTitle: 'TINGKATKAN BRAND VALUE',
        subText: 'Foto produk berkualitas untuk penjualan yang lebih tinggi.',
        // Tambahan deskripsi Anda
        descServices: 'Catalog • E-commerce • Food & Beverages',
        descStats: 'Klien bisnis besar dan UMKM telah merasakan dampaknya.'
    }
];

function Home(){
    // State untuk melacak slide yang sedang aktif
    const [currentSlide, setCurrentSlide] = useState(0);
    const currentData = slidesData[currentSlide];

    // Fungsi untuk pindah ke slide berikutnya secara otomatis
    useEffect(() => {
        const interval = setInterval(() => {
            // Pindah ke slide berikutnya, kembali ke 0 jika sudah mencapai slide terakhir
            setCurrentSlide((prevSlide) => 
                (prevSlide + 1) % slidesData.length
            );
        }, 8000); // Ganti setiap 8 detik (8000 ms)

        // Membersihkan interval saat komponen dilepas
        return () => clearInterval(interval);
    }, []); // Array dependensi kosong agar hanya berjalan sekali saat mount

    // Fungsi untuk navigasi manual (opsional, bisa digunakan untuk dot indicator)
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };


    return(
        <>
            <Navbar/>
           <section 
                className="relative h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${currentData.image})` }}
            >
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                {/* Konten Utama Section */}
                {/* Menambahkan key unik untuk memaksa re-render konten teks saat slide berubah, 
                    sehingga transisi lebih halus jika ditambahkan animasi CSS. 
                    Saat ini, tanpa key, teks akan berganti secara instan.
                */}
                <div key={currentData.id} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4 transition-opacity duration-500">
                    
                    {/* Sub-judul/Deskripsi Awal (Sangat Mirip Gambar) */}
                    <p className="text-base md:text-lg mb-2 tracking-widest uppercase font-normal">
                        {currentData.pTitle}
                    </p>

                    {/* Judul Utama (Sangat Mirip Gambar) */}
                    <h1 className="text-3xl md:text-5xl font-normal tracking-wide mb-2">
                        {currentData.hTitle}
                    </h1>
                    
                    {/* Sub-deskripsi (Sangat Mirip Gambar) */}
                    

               

                    {/* Konten Tambahan Berdasarkan Deskripsi dari Permintaan Anda */}
                    <div className="pt-8 mt-8 border-t border-white border-opacity-20 max-w-2xl mx-auto">
                        <p className="text-xl md:text-2xl font-light mb-4">
                            {currentData.descTitle}
                        </p>
                        <p className="text-base md:text-lg font-extralight mb-3">
                            {currentData.descServices}
                        </p>
                        <p className="text-sm md:text-base mb-6 italic font-light">
                            {currentData.descStats}
                        </p>

                        {/* Tombol Call-to-Action */}
                        <div className="flex flex-wrap justify-center space-x-3 sm:space-x-6">
                            <a
                                href="/portofolio" 
                                className="bg-white text-gray-800 text-sm font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-200 transition duration-300 tracking-wider mb-2"
                            >
                                Lihat Portofolio
                            </a>
                            <a
                                href="https://wa.me/081234567890" // Ganti dengan nomor WhatsApp Anda
                                className="border border-white text-white text-sm font-semibold py-2 px-6 rounded-md shadow-md hover:bg-white hover:text-gray-800 transition duration-300 tracking-wider mb-2"
                            >
                                Chat Konsultasi
                            </a>
                        </div>
                    </div>
                </div>

                {/* Dot Indicators untuk Navigasi */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {slidesData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                index === currentSlide ? 'bg-white w-6' : 'bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

            </section>
    
            <AboutSection/>
            <ServiceSection/>
            <PortfolioSection/>
            <TestimonialSection/>
            <CtaSection/>
            <Footer/>
        </>
    )
}

export default Home;