import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Briefcase } from 'lucide-react'; 
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'; // Untuk ikon sosial media

const AboutSection = () => {
    // Ganti dengan path foto profil Doni Studio atau perwakilan
    const PROFILE_IMAGE = '/porto/porto2.jpg'; 

    return (
        <section id="about" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section (Sesuai gaya gambar) */}
                <div className="flex justify-between items-center mb-12 md:mb-16">
                    <div>
                        <p className="text-sm font-light uppercase tracking-widest text-gray-600">ABOUT</p>
                        <h2 className="text-4xl md:text-4xl font-light text-gray-900 mt-1">
                            WE ARE DONI STUDIO
                        </h2>
                    </div>
                    
                    {/* Tombol Know More */}
                    <a 
                        href="/about"
                        className="flex items-center space-x-2 bg-gray-900 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-sm font-light"
                    >
                        <span>Know More</span>
                        <ArrowRight size={16} />
                    </a>
                </div>

                {/* Konten Utama (Dua Kolom) */}
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Kolom Kiri: Gambar Profil */}
                    <div className="lg:w-1/2 relative">
                        {/* Gambar dengan efek sudut melengkung/terpotong (Complex Border) */}
                        <div className="relative w-full h-96 md:h-[500px]">
                            <img 
                                src={PROFILE_IMAGE} 
                                alt="Doni Studio Profile"
                                className="w-full h-full object-cover rounded-xl shadow-xl"
                                // Kelas ini meniru desain kurva/potongan sudut di gambar
                                style={{ 
                                    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' 
                                }}
                            />
                        </div>
                    </div>

                    {/* Kolom Kanan: Teks & Info Kontak */}
                    <div className="lg:w-1/2 space-y-8">
                        
                        {/* 1. Introduction Card */}
                        <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
                            <h3 className="flex items-center text-2xl font-light text-gray-900 mb-4">
                                <Briefcase size={20} className="mr-3 text-gray-600"/> Introduction
                            </h3>
                            <p className="text-base font-light text-gray-700 leading-relaxed">
                                Doni Studio adalah tim fotografer profesional yang bersemangat mengabadikan keindahan momen. Perjalanan kami adalah tentang membekukan emosi, dari pernikahan mewah hingga foto produk yang meningkatkan *brand value*. Kami percaya setiap bidikan menceritakan kisah, dan setiap *frame* adalah bagian dari hati kami.
                            </p>
                        </div>

                        {/* 2. Contact Information Card */}
                        <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
                            <h3 className="flex items-center text-2xl font-light text-gray-900 mb-4">
                                <Phone size={20} className="mr-3 text-gray-600"/> Contact Information
                            </h3>
                            
                            {/* Info Kontak dalam Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light text-gray-700">
                                <div>
                                    <p className="font-medium text-gray-800">Email</p>
                                    <p>support@donystudio.com</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">Phone Number</p>
                                    <p>+62 812-3456-7890</p>
                                </div>
                            </div>
                            
                            {/* Tombol Call to Action & Sosial Media */}
                            <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                                <button
                                    onClick={() => {
                                        const el = document.getElementById('cta-section');
                                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition duration-300 w-full sm:w-auto"
                                >
                                    Let's Work
                                </button>
                                <button className="border border-gray-300 text-gray-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
                                    Download Price List
                                </button>
                                
                                {/* Ikon Sosial Media */}
                                <div className="flex space-x-3 mt-4 sm:mt-0">
                                    <a href="#" className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"><Instagram size={16}/></a>
                                    <a href="#" className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"><Facebook size={16}/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;