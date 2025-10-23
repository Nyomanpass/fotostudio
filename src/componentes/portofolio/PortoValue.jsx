import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react'; 
import { Camera, Calendar } from 'lucide-react';
import Footer from '../Footer';

// Data Dummy Portofolio (Data tidak berubah)
const portfolioData = [
    { id: 1, title: "Prewedding, Amanda & Rizky", category: "Prewedding", image: "/headertiga.jpg" },
    { id: 2, title: "Wedding, Sarah & Bima", category: "Graduation", image: "/porto/porto1.jpg" },
    { id: 3, title: "Product Elegance", category: "Product", image: "/porto/porto2.jpg" },
    { id: 4, title: "Annual Corporate Gala", category: "Event", image: "/porto/porto3.jpg" },
    { id: 5, title: "Prewedding, Di Pantai", category: "Prewedding", image: "/porto/porto4.jpg" },
    { id: 6, title: "Akad Nikah Intimate", category: "Graduation", image: "/porto/porto6.jpg" },
    { id: 7, title: "Produk Skincare", category: "Product", image: "/porto/porto7.jpg" },
    { id: 8, title: "Birthday Party 25th", category: "Event", image: "/porto/porto8.jpg" },
    { id: 9, title: "Prewedding, Bagus & Desak", category: "Prewedding", image: "/porto/porto9.jpg" },
];

const categories = ["Semua", "Graduation", "Prewedding", "Engagement", "Event", "Product"];

const PortoValue = () => {
    const [activeFilter, setActiveFilter] = useState("Semua");
    // State baru untuk Lightbox: menyimpan URL gambar yang dipilih
    const [selectedImage, setSelectedImage] = useState(null); 

    // Fungsi untuk membuka modal
    const openModal = (imageURL) => {
        setSelectedImage(imageURL);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setSelectedImage(null);
    };
    
    // Filter Data Berdasarkan Kategori Aktif
    const filteredPortfolio = portfolioData.filter(item => 
        activeFilter === "Semua" || item.category === activeFilter
    );

    return (
        // Latar Belakang Putih Diterapkan
        <>
            <div className="bg-white min-h-screen text-gray-900">

            {/* Bagian 2: Filter dan Grid Galeri */}
            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-36">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Judul Sekunder */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">Karya Terbaru Kami</h2>
                        <p className="text-lg font-light text-gray-600 mt-2">Jelajahi portofolio berdasarkan kategori.</p>
                    </div>

                    {/* Filter Kategori */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition duration-300 shadow-sm uppercase tracking-wider ${
                                    category === activeFilter 
                                    ? 'bg-gray-800 text-white shadow-lg' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-200' 
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid Galeri */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPortfolio.map((item) => (
                            <PortfolioCard 
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                category={item.category}
                                // Meneruskan fungsi openModal ke setiap kartu
                                onClick={() => openModal(item.image)} 
                            />
                        ))}
                    </div>

                    {/* Jika Tidak Ada Data */}
                    {filteredPortfolio.length === 0 && (
                        <p className="text-center text-gray-500 text-lg mt-12">
                            Maaf, belum ada karya untuk kategori **{activeFilter}** saat ini.
                        </p>
                    )}

                </div>
            </section>
            
            {/* Lightbox Modal (Ditampilkan jika selectedImage berisi URL) */}
            {selectedImage && (
                <LightboxModal imageUrl={selectedImage} onClose={closeModal} />
            )}

        </div>

        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Ikon Penarik Perhatian */}
                <Camera className="w-12 h-12 text-gray-900 mx-auto mb-6" />

                {/* Judul CTA (Revisi Ukuran Font) */}
                <h2 className="text-3xl md:text-4xl font-light leading-snug mb-4 text-gray-900">
                    Saatnya Kami Mendokumentasikan Cerita Spesial Anda.
                </h2>
                
                {/* Sub-judul/Deskripsi (Revisi Ukuran Font) */}
                <p className="text-base md:text-lg font-light text-gray-600 mb-10 max-w-2xl mx-auto">
                    Anda telah melihat dedikasi dan kualitas visual kami. Mari ciptakan frame abadi yang akan menceritakan kisah Anda dengan keindahan dan emosi yang sesungguhnya.
                </p>

                {/* Tombol Aksi Utama */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    
                    {/* Tombol Utama: Cepat dan Langsung */}
                    <a 
                        href="#booking-form" 
                        className="inline-flex items-center justify-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition duration-300 text-base font-medium shadow-xl uppercase tracking-wider"
                    >
                        <Calendar size={20} />
                        <span>Cek Ketersediaan & Booking</span>
                    </a>
                    
                    {/* Tombol Sekunder: Informasi Lanjut */}
                    <a 
                        href="#contact-us" 
                        className="inline-flex items-center justify-center space-x-3 border border-gray-300 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 text-base font-medium"
                    >
                        <span>Atau Konsultasi Konsep</span>
                        <ArrowRight size={20} />
                    </a>
                </div>

            </div>
        </section>
        <Footer/>
        </>
    );
};

// --- Komponen Kartu Portofolio (Direvisi untuk menerima onClick) ---
const PortfolioCard = ({ image, title, category, onClick }) => {
    return (
        // Menambahkan onClick handler ke div utama
        <div 
            className="relative overflow-hidden rounded-lg group cursor-pointer shadow-xl bg-white border border-gray-100"
            onClick={onClick}
        >
            
            {/* Gambar */}
            <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                style={{ aspectRatio: '4/3' }}
            />

            {/* Overlay Gradient Teks */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

            {/* Teks Detail */}
            <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-0 group-hover:-translate-y-0 transition duration-500">
                <p className="text-sm font-light uppercase tracking-wider text-yellow-300 mb-1"> 
                    {category}
                </p>
                <h3 className="text-xl font-normal">
                    {title}
                </h3>
            </div>
            
            {/* Ikon View/Detail */}
            <div className="absolute top-4 right-4 p-2 bg-gray-800 bg-opacity-20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
            </div>

        </div>
    );
};


// --- Komponen Lightbox Modal Baru ---
const LightboxModal = ({ imageUrl, onClose }) => {
    return (
        // Overlay Gelap Penuh Layar
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose} // Menutup saat mengklik area di luar gambar
        >
            
            {/* Tombol Tutup */}
            <button
                className="absolute top-6 right-6 p-3 rounded-full bg-gray-800 bg-opacity-20 hover:bg-opacity-40 transition duration-300 z-50"
                onClick={onClose}
            >
                <X className="w-6 h-6 text-white" />
            </button>

            {/* Kontainer Gambar */}
            <div 
                className="max-w-4xl max-h-5/6 w-11/12 h-auto rounded-lg overflow-hidden shadow-2xl"
                // Mencegah penutupan modal saat mengklik gambar itu sendiri
                onClick={(e) => e.stopPropagation()} 
            >
                <img 
                    src={imageUrl} 
                    alt="Portofolio Zoom"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};


export default PortoValue;