import React from 'react';

const AboutHeader = () => {
    return (
        // Container Utama (Relatif untuk menampung gambar dan teks)
        <div className="relative w-full h-[70vh] bg-gray-900">
            
            {/* Gambar Latar Belakang (Contoh: Tim sedang bekerja atau foto studio) */}
            <div className="absolute inset-0">
                <img
                    src="/porto/porto24.jpg" // Ganti dengan path gambar hero About Anda
                    alt="Tim Doni Studio Bekerja"
                    className="w-full h-full object-cover"
                />
                
                {/* Overlay Gelap (untuk memastikan teks terbaca) */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Konten Teks di Tengah (Absolut) */}
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-4">
                <div className="max-w-4xl mx-auto space-y-4">
                
                    {/* Sub Judul */}
                    <p className="text-sm font-light uppercase tracking-widest text-gray-300">
                        OUR STORY
                    </p>

                    {/* Judul Utama */}
                    <h1 className="text-4xl font-light text-white leading-tight tracking-wide">
                        More Than Just A Studio.
                    </h1>
                    
                    {/* Deskripsi */}
                    <p className="text-base font-light text-gray-200 max-w-3xl mx-auto">
                        Kami adalah tim kreator yang hadir dari passion untuk mengubah setiap momen berharga menjadi karya visual sinematik yang abadi.
                    </p>

                </div>
            </div>

            {/* Elemen Dekorasi (opsional) */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
                {/* Anda bisa tambahkan ArrowDown di sini */}
            </div>
        </div>
    );
};

export default AboutHeader;