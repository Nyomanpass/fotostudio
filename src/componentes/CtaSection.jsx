import React from 'react';
import { ArrowRight, Mail, Phone, Instagram, Facebook } from 'lucide-react'; 

const CtaSection = () => {
    return (
        // Latar belakang Putih, Teks Hitam
        <section id="cta-section" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Sub Judul/Pemanis - UKURAN FONT DIKECILKAN */}
                <p className="text-sm md:text-base font-light uppercase tracking-widest text-gray-600 mb-4">
                    The Next Step
                </p>

                {/* Judul Utama (Ajakan) - UKURAN FONT DIKECILKAN */}
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
                    Ready to Capture Your Story?
                    {/* Baris kedua dikecilkan dari 6xl menjadi 5xl pada layar besar */}
                    <span className="block text-4xl md:text-5xl font-light text-gray-900 mt-2"> 
                        Let's Work Together.
                    </span>
                </h2>
                
                {/* Deskripsi Singkat - UKURAN FONT DIKECILKAN PADA LAYAR BESAR */}
                <p className="text-base font-light text-gray-700 max-w-2xl mx-auto mb-10">
                    Kami siap mengubah visi Anda menjadi karya fotografi dan videografi yang memukau. Hubungi kami melalui tombol di bawah atau saluran favorit Anda.
                </p>

                {/* Tombol Call-to-Action Ganda - Tidak berubah, ukurannya sudah baik */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                    
                    {/* Tombol Utama (Pesan Sekarang / Chat WA) */}
                    <a
                        href="https://wa.me/6281234567890" 
                        className="flex items-center justify-center space-x-3 bg-gray-900 text-white text-base font-medium py-3 px-8 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300 tracking-wider"
                    >
                        <Phone size={20} /> 
                        <span>Chat WhatsApp Sekarang</span>
                    </a>

                    {/* Tombol Sekunder (Lihat Harga) */}
                    <a
                        href="#pricelist" 
                        className="flex items-center justify-center space-x-3 border border-gray-300 text-gray-900 text-base font-medium py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 tracking-wider"
                    >
                        <span>Lihat Semua Paket Harga</span>
                        <ArrowRight size={20} />
                    </a>
                </div>

                {/* --- INFORMASI KONTAK & SOSIAL MEDIA --- */}
                <div className="pt-8 border-t border-gray-200">
                    <p className="text-sm font-normal uppercase tracking-wider text-gray-600 mb-6">
                        Or Connect With Us Directly
                    </p>
                    
                    {/* Teks kontak dan sosmed sudah menggunakan ukuran 'text-base', yang sudah bagus */}
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        
                        {/* Email */}
                        <a href="mailto:support@donystudio.com" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300 text-base font-light">
                            <Mail size={18} />
                            <span>support@donystudio.com</span>
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com/donystudio" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300 text-base font-light">
                            <Instagram size={18} />
                            <span>@donystudio_ig</span>
                        </a>
                        
                        {/* TikTok */}
                        <a href="https://tiktok.com/@donystudio" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-300 text-base font-light">
                            <Phone size={18} /> 
                            <span>@donystudio_tiktok</span>
                        </a>

                        {/* WhatsApp (Nomor di sini) */}
                        <span className="flex items-center space-x-2 text-gray-700 text-base font-light">
                            <Phone size={18} />
                            <span>+62 812-3456-7890</span>
                        </span>
                        
                    </div>
                </div>
                {/* -------------------------------------- */}

            </div>
        </section>
    );
};

export default CtaSection;