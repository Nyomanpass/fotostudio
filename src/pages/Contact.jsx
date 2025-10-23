import React from 'react';
// PERBAIKAN: Tambahkan MapPin ke dalam impor Lucide React
import { Mail, Phone, Clock, MessageSquare, MapPin } from 'lucide-react'; 
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import ContactHeader from '../componentes/contact/ContactHeader';

// --- KOMPONEN PEMBANTU (Diletakkan di dalam file yang sama) ---

// 1. Komponen Detail Kontak
const ContactDetail = ({ Icon, title, value, link }) => (
    <div className="flex items-start space-x-4">
        <Icon className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" />
        <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-800">{title}</p>
            {link ? (
                <a href={link} className="text-md font-light text-gray-700 mt-2 hover:text-yellow-500 transition duration-200">
                    {value}
                </a>
            ) : (
                <p className="text-md font-light text-gray-700">{value}</p>
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
            <ContactHeader/>
            <div className="bg-white min-h-screen">
               
            <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
               
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                    
                    {/* Kolom Kiri: Informasi Kontak Alternatif (EFEK DARK MODE) */}
                    <div className="order-2 lg:order-1 space-y-8 p-10 bg-gray-200 text-white rounded-xl shadow-2xl h-min"> 
                        
                        <h3 className="text-4xl font-light mb-8 border-b border-gray-800 text-gray-800 pb-4">
                            Detail Kontak
                        </h3>
                        
                        <div className="space-y-8">
                            <ContactDetail Icon={Phone} title="Telepon & WhatsApp" value="+62 812-3456-7890" link="tel:+6281234567890" />
                            <ContactDetail Icon={Mail} title="Email Bisnis" value="halo@donistudio.com" link="mailto:halo@donistudio.com" />
                            {/* MapPin sekarang sudah diimpor */}
                            <ContactDetail Icon={MapPin} title="Kantor Virtual" value="Layanan Administrasi & Chat Aktif" /> 
                            <ContactDetail Icon={Clock} title="Jam Respon Cepat" value="Senin - Jumat, 09:00 - 17:00 WIB" />
                        </div>
                        
                        {/* CTA Kecil */}
                        <div className="pt-6 border-t border-gray-700">
                            <p className="text-sm font-light text-gray-400">Kami menjamin respon terbaik dan tercepat untuk setiap proyek.</p>
                        </div>
                    </div>

                    {/* Kolom Kanan: Formulir Kontak */}
                    <div className="order-1 lg:order-2 p-10 bg-white rounded-xl shadow-xl border border-gray-100 h-min"> 
                        <h3 className="text-4xl font-light text-gray-900 mb-8 border-b border-gray-100 pb-4">
                            Kirim Pesan
                        </h3>
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