import React from 'react';
import { Mail, Phone, Clock, MessageSquare } from 'lucide-react'; // Menggunakan MessageSquare untuk kontak non-fisik
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';

// --- KOMPONEN PEMBANTU (Diletakkan di dalam file yang sama) ---

// 1. Komponen Detail Kontak
const ContactDetail = ({ Icon, title, value, link }) => (
    <div className="flex items-start space-x-4">
        <Icon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
        <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">{title}</p>
            {link ? (
                <a href={link} className="text-lg font-light hover:text-yellow-500 transition duration-200">
                    {value}
                </a>
            ) : (
                <p className="text-lg font-light">{value}</p>
            )}
        </div>
    </div>
);


// 2. Komponen Formulir Kontak
const ContactForm = () => {
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <input 
                    type="text" 
                    placeholder="Nama Lengkap Anda"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900 transition"
                    required
                />
                {/* Email */}
                <input 
                    type="email" 
                    placeholder="Alamat Email Aktif"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900 transition"
                    required
                />
            </div>
            
            {/* Subjek / Layanan yang Diminati */}
            <input 
                type="text" 
                placeholder="Subjek / Layanan yang Diminati (cth: Wedding, Produk)"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900 transition"
                required
            />
            
            {/* Pesan */}
            <textarea 
                placeholder="Pesan, detail konsep, atau pertanyaan Anda"
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900 transition"
                required
            ></textarea>
            
            {/* Tombol Kirim */}
            <button 
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-10 py-4 rounded-lg hover:bg-gray-700 transition duration-300 text-base font-medium shadow-xl uppercase tracking-wider"
            >
                Kirim Pesan Sekarang
            </button>
        </form>
    );
};


// --- KOMPONEN UTAMA HALAMAN KONTAK ---
const Contact = () => {
    return (
        <>
            <Navbar/>
            <div className="bg-white min-h-screen">

                {/* Bagian 1: Header Halaman Kontak (Lebih Ringkas) */}
                <section className="bg-gray-50 pt-36 pb-12 md:pb-16 px-4 text-center border-b border-gray-100">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">HUBUNGI KAMI</p>
                        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                            Wujudkan Visi Anda Bersama Kami
                        </h1>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            Mari kita mulai percakapan. Tim profesional kami siap melayani kebutuhan visual Anda.
                        </p>
                    </div>
                </section>

                {/* Bagian 2: Formulir dan Detail Kontak (Dua Kolom Fokus) */}
                <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                    {/* Menggunakan max-w-5xl agar konten lebih terpusat */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        
                        {/* Kolom Kiri: Informasi Kontak Alternatif (Dibuat lebih menonjol) */}
                        <div className="order-2 lg:order-1 space-y-8 p-8 bg-gray-900 text-white rounded-xl shadow-2xl h-min">
                            <h3 className="text-3xl font-light mb-6">Detail Kontak</h3>
                            
                            <ContactDetail Icon={Phone} title="Telepon & WhatsApp" value="+62 812-3456-7890" link="tel:+6281234567890" />
                            <ContactDetail Icon={Mail} title="Email Bisnis" value="halo@donistudio.com" link="mailto:halo@donistudio.com" />
                            <ContactDetail Icon={MessageSquare} title="Virtual Office" value="Layanan Administrasi & Chat Aktif" />
                            <ContactDetail Icon={Clock} title="Jam Respon Cepat" value="Senin - Jumat, 09:00 - 17:00 WIB" />
                            
                            {/* CTA Kecil */}
                            <div className="pt-4">
                                <p className="text-sm font-light text-gray-400">Kami menjamin respon terbaik dan tercepat untuk setiap proyek.</p>
                            </div>
                        </div>

                        {/* Kolom Kanan: Formulir Kontak (Lebih Besar) */}
                        <div className="order-1 lg:order-2 p-0 bg-white rounded-xl h-min">
                            <h3 className="text-3xl font-light text-gray-900 mb-8 border-b border-gray-100 pb-4">Kirim Pesan</h3>
                            <ContactForm />
                        </div>
                        
                    </div>
                </section>
                
            </div>
            <Footer/>
        </>
    );
};

export default Contact;