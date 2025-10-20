import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'; 

// Data contoh Portofolio (6 items)
const portfolioData = [
    {
        title: "Faces of Resilience",
        date: "March 2024",
        image: "/porto/porto1.jpg", 
        link: "#project-1"
    },
    {
        title: "A Wedding Tale",
        date: "January 2024",
        image: "/porto/porto2.jpg",
        link: "#project-7"
    },
    {
        title: "Product Elegance",
        date: "November 2023",
        image: "/porto/porto3.jpg",
        link: "#project-3"
    },
     {
        title: "Corporate Event",
        date: "October 2023",
        image: "/porto/porto4.jpg",
        link: "#project-4"
    },
    {
        title: "Street Style",
        date: "September 2023",
        image: "/porto/porto5.jpg",
        link: "#project-5"
    },
    {
        title: "Food & Beverage",
        date: "August 2023",
        image: "/porto/porto6.jpg",
        link: "#project-6"
    },
];

const ITEMS_PER_PAGE = 3; 
const TOTAL_ITEMS = portfolioData.length;

const PortfolioSection = () => {
    const [startIndex, setStartIndex] = useState(0);

    // --- LOGIKA INFINITE LOOP TELAH DIREVISI DI SINI ---
    const handleNavigation = (direction) => {
        setStartIndex(prevStartIndex => {
            let newIndex;
            
            if (direction === 'next') {
                // Maju satu slot. Jika sudah mencapai batas akhir, kembali ke 0.
                // Batas akhir tercapai ketika indeks saat ini + 1 item yang ditampilkan sama dengan total item
                if (prevStartIndex + ITEMS_PER_PAGE >= TOTAL_ITEMS) {
                    newIndex = 0; // Kembali ke awal
                } else {
                    newIndex = prevStartIndex + 1; // Geser satu kartu ke kanan
                }
            } else { // direction === 'prev'
                // Mundur satu slot. Jika sudah mencapai 0, pindah ke posisi yang menampilkan 3 item terakhir.
                if (prevStartIndex === 0) {
                    // Hitung indeks yang akan menampilkan 3 item terakhir. 
                    // TOTAL_ITEMS - ITEMS_PER_PAGE = indeks di mana slice terakhir dimulai.
                    newIndex = TOTAL_ITEMS - ITEMS_PER_PAGE; 
                } else {
                    newIndex = prevStartIndex - 1; // Geser satu kartu ke kiri
                }
            }
            return newIndex;
        });
    };
    // ----------------------------------------------------

    // Logika slicing tetap sama
    const displayedItems = portfolioData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <section id="portfolio" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 border-b border-gray-200 pb-6">
                    <div>
                        <p className="text-sm font-light uppercase tracking-widest text-gray-600">PORTFOLIO</p>
                        <h2 className="text-4xl md:text-4xl font-light text-gray-900 mt-1">
                            EXPLORE MY PHOTOGRAPHY WORK.
                        </h2>
                    </div>

                    {/* Navigasi Carousel & View All */}
                    <div className="flex items-center space-x-4 mt-6 sm:mt-0">
                        {/* Tombol Navigasi (Selalu Aktif) */}
                        <div className="flex space-x-2">
                            {/* Tombol Prev */}
                            <button 
                                onClick={() => handleNavigation('prev')}
                                className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            {/* Tombol Next */}
                            <button 
                                onClick={() => handleNavigation('next')}
                                className="p-3 rounded-full bg-gray-900 hover:bg-gray-700 transition duration-300"
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                        
                        {/* Tombol View All Works (Hitam Solid) */}
                        <a 
                            href="/portfolio" 
                            className="flex items-center space-x-2 bg-gray-900 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-sm font-light"
                        >
                            <span>View All Works</span>
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>

                {/* Grid Portofolio */}
                {/* Catatan: Untuk transisi slide yang bagus, Anda mungkin perlu library carousel (seperti Swiper) atau menambahkan CSS/Tailwind animation di sini. */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {displayedItems.map((item, index) => (
                        <PortfolioCard 
                            key={item.title + startIndex + index} // Key yang berubah saat slide bergeser
                            title={item.title} 
                            date={item.date} 
                            image={item.image} 
                            link={item.link}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

// Komponen Kartu Portofolio (Tidak Berubah)
const PortfolioCard = ({ title, date, image, link }) => {
    return (
        <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
            <div className="relative h-96 overflow-hidden">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                />
            </div>
            <div className="p-4 flex justify-between items-end border-t border-gray-100">
                <div className="text-left">
                    <h3 className="text-lg font-normal text-gray-900 group-hover:text-gray-700 transition duration-150">
                        {title}
                    </h3>
                    <p className="text-xs font-light text-gray-600 mt-1">
                        {date}
                    </p>
                </div>
                <a 
                    href={link} 
                    className="flex items-center space-x-1 text-xs font-medium uppercase tracking-wider text-gray-900 hover:text-gray-600 transition duration-150"
                >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default PortfolioSection;