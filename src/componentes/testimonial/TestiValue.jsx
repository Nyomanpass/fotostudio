import React from 'react';
import { Star } from 'lucide-react';

// Data Dummy Testimonial (6 Data)
const testimonialsData = [
    {
        id: 1,
        quote: "Hasil prewedding kami benar-benar melebihi ekspektasi. Tim sangat profesional dan mampu menangkap chemistry kami dengan sempurna. Sangat direkomendasikan!",
        name: "Amanda & Rizky",
        service: "Prewedding Photoshoot",
        rating: 5,
        avatar: "/avatars/avatars1.jpg" // Ganti dengan path foto klien
    },
    {
        id: 2,
        quote: "Video cinematic pernikahan kami terasa seperti film. Emosinya kuat, editingnya mulus. Kami menangis terharu setiap kali menontonnya. Terima kasih Doni Studio!",
        name: "Sarah & Bima",
        service: "Wedding Videography",
        rating: 5,
        avatar: "/avatars/avatars3.jpg"
    },
    {
        id: 3,
        quote: "Fotografi produk untuk katalog baru kami sangat membantu meningkatkan penjualan di e-commerce. Kualitas foto sangat jernih dan profesional.",
        name: "Marketing Manager, PT Jaya Abadi",
        service: "Product Photography",
        rating: 4,
        avatar: "/avatars/avatars5.jpg"
    },
    {
        id: 4,
        quote: "Liputan event corporate kami berjalan lancar. Tim bekerja tanpa mengganggu acara dan hasilnya sangat cepat serta beresolusi tinggi. Kualitas terbaik!",
        name: "Rudi Santoso",
        service: "Corporate Event Coverage",
        rating: 5,
        avatar: "/avatars/avatars6.jpg"
    },
    {
        id: 5,
        quote: "Meskipun kami meminta konsep yang unik, tim Doni Studio dapat merealisasikannya dengan sangat baik. Pengalaman yang menyenangkan dan hasilnya memuaskan.",
        name: "Dinda Pratama",
        service: "Engagement Photoshoot",
        rating: 5,
        avatar: "/avatars/avatars2.jpg"
    },
    {
        id: 6,
        quote: "Proses editing video lamaran kami sangat komunikatif. Mereka mendengarkan setiap revisi dengan sabar hingga hasilnya sempurna. Kami puas sekali!",
        name: "Keluarga Handoko",
        service: "Video Editing",
        rating: 5,
        avatar: "/avatars/avatars4.jpg"
    },
];

// Helper Component untuk Rating Bintang
const StarRating = ({ rating }) => {
    return (
        <div className="flex space-x-0.5">
            {Array.from({ length: 5 }, (_, index) => (
                <Star
                    key={index}
                    className={`w-4 h-4 fill-current ${
                        index < rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                />
            ))}
        </div>
    );
};


const TestiValue = () => {
    return (
        // Latar Belakang Putih, Teks Gelap
        <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-sm font-light uppercase tracking-widest text-gray-600 mb-2">BUKTI KUALITAS KAMI</p>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                        Apa Kata Klien Kami
                    </h2>
                </div>

                {/* Grid Testimonial (3 Kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((item) => (
                        <TestimonialCard 
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

// Komponen Kartu Testimonial
const TestimonialCard = ({ quote, name, service, rating, avatar }) => {
    return (
        <div className="p-8 bg-gray-50 border border-gray-100 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:bg-white flex flex-col h-full">
            
            {/* Rating Bintang */}
            <div className="mb-4">
                <StarRating rating={rating} />
            </div>

            {/* Quote / Kutipan Testimonial */}
            <p className="text-base font-normal italic text-gray-700 leading-relaxed flex-grow">
                "{quote}"
            </p>

            {/* Divider */}
            <hr className="my-6 border-gray-200" />

            {/* Informasi Klien (Footer Card) */}
            <div className="flex items-center space-x-4 mt-auto">
                {/* Avatar (Jika tersedia) */}
                <img 
                    src={avatar} 
                    alt={name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                
                <div>
                    {/* Nama Klien */}
                    <p className="text-lg font-medium text-gray-900">
                        {name}
                    </p>
                    {/* Layanan yang Diambil */}
                    <p className="text-sm font-light text-gray-500">
                        {service}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestiValue;