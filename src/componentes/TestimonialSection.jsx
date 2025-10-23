import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Data Contoh Ulasan (Ikon sosial media dihapus)
const testimonialData = [
    {
        name: "Emily Johnson",
        location: "USA, California",
        review: "Doni Studio's photography doesn't just capture moments; it captures emotions. Their work is simply mesmerizing.",
        rating: 5,
    },
    {
        name: "John Smith",
        location: "USA, California",
        review: "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves. The team is highly recommended.",
        rating: 5,
    },
    {
        name: "Samantha Davis",
        location: "USA, California",
        review: "I was blown away by Doni Studio's ability to capture the essence of our wedding day. Their photographs are our cherished memories.",
        rating: 5,
    },
];


const TestimonialSection = () => {
    return (
        // Latar belakang Hitam/Abu-abu gelap pekat, Teks Putih
        <section className="bg-gray-400 py-16 md:py-24 px-4 sm:px-6 lg:px-36 text-white">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
                    <div>
                        <p className="text-sm font-light uppercase tracking-widest text-white">TESTIMONIALS</p>
                        <h2 className="text-4xl md:text-4xl font-light text-white mt-1 mb-4">
                            WHAT MY CLIENTS SAY
                        </h2>
                        
                    </div>

                    {/* Navigasi Carousel & View All */}
                    <div className="flex items-center space-x-4 mt-8 sm:mt-0">
                        <a 
                            href="/testimonials" 
                            className="flex items-center space-x-2 bg-white text-gray-800 px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-sm font-light"
                        >
                            <span>View All Testimonials</span>
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>

                {/* Grid Ulasan (3 Kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                    {testimonialData.slice(0, 3).map((item, index) => (
                        <TestimonialCard 
                            key={index}
                            name={item.name} 
                            location={item.location} 
                            review={item.review} 
                            rating={item.rating}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

// Komponen Kartu Ulasan (Direvisi: Menghapus Sosial Media)
const TestimonialCard = ({ name, location, review, rating }) => {
    // Fungsi untuk menampilkan bintang berdasarkan rating
    const renderStars = (count) => {
        return Array(count).fill(0).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
        ));
    };

    return (
        // Kartu dengan Latar Belakang Abu-abu Gelap, Border, dan Shadow
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
            
            {/* Header Nama & Lokasi (Tidak ada lagi slot untuk ikon sosial media di kanan) */}
            <div className="text-left mb-4">
                <h3 className="text-lg font-normal text-gray-800 mb-0.5">
                    {name}
                </h3>
                <p className="text-xs font-light text-gray-500">
                    {location}
                </p>
            </div>

            {/* Bintang Rating */}
            <div className="flex space-x-0.5 mb-4">
                {renderStars(rating)}
            </div>

            {/* Isi Ulasan */}
            <p className="text-base font-light text-gray-500 leading-relaxed">
                {review}
            </p>
        </div>
    );
};

export default TestimonialSection;