import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
const Footer = () => {
    return (
        // Latar belakang Hitam/Abu-abu gelap pekat, Teks Putih
        <footer className="bg-gray-900 text-gray-400 py-12 md:py-16 px-4 sm:px-6 lg:px-14">
            <div className="max-w-7xl mx-auto">
                
                {/* Bagian Atas Footer (Logo, Navigasi & Kontak) */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-10 mb-8">
                    
                    {/* Kolom 1: Logo & Deskripsi */}
                    <div className="col-span-2 md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-light text-white tracking-widest">
                            DONISTUDIO
                        </h3>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                            Mengabadikan setiap kisah dengan kualitas sinematik dan sentuhan emosi. Kami adalah mitra visual Anda.
                        </p>
                        
                        {/* Informasi Kontak Singkat */}
                        <div className="pt-4 space-y-2">
                            <div className="flex items-center space-x-2 text-sm font-light hover:text-white transition duration-300">
                                <Mail className="w-4 h-4 text-gray-200" />
                                <a href="mailto:support@donistudio.com" className='text-gray-300'>support@donistudio.com</a>
                            </div>
                            <div className="flex items-center space-x-2 text-sm font-light hover:text-white transition duration-300">
                                <Phone className="w-4 h-4 text-gray-200" />
                                <a href="https://wa.me/6281234567890" className='text-gray-300'>+62 812-3456-7890</a>
                            </div>
                        </div>
                    </div>

                    {/* Kolom 2: Navigasi Cepat (Discover) */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-base font-normal uppercase tracking-wider text-white mb-4">
                            Discover
                        </h4>
                        <ul className="space-y-2 text-sm font-light text-gray-300">
                            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                            <li><a href="/services" className="hover:text-white transition">Our Services</a></li>
                            <li><a href="/portofolio" className="hover:text-white transition">Portfolio</a></li>
                            <li><a href="/#faq" className="hover:text-white transition">FAQ</a></li>
                        </ul>
                    </div>
                    
                    {/* Kolom 3: Navigasi Legal & Resources */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-base font-normal uppercase tracking-wider text-white mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-sm font-light text-gray-300">
                            <li><a href="#pricelist" className="hover:text-white transition">Pricelist</a></li>
                            <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#terms" className="hover:text-white transition">Terms & Conditions</a></li>
                            <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    {/* Kolom 4: Media Sosial */}
                   <div className="col-span-1 space-y-6"> {/* Menambah space-y agar lebih lega */}
    <h4 className="text-lg font-semibold uppercase tracking-wider text-white mb-4"> {/* Ukuran font lebih besar, lebih bold */}
        Stay Connected!
    </h4>
    <p className="text-gray-300 text-sm mb-4">
        Jangan lewatkan update terbaru kami di media sosial.
    </p>
    <div className="flex space-x-5 justify-center sm:justify-start"> {/* Space antar ikon lebih besar */}
        
        {/* Instagram */}
        <a 
            href="https://instagram.com/donistudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-pink-500 transition-all transform hover:scale-125 hover:shadow-lg rounded-full p-1" // Efek hover dan rounded-full
            title="Follow us on Instagram"
        >
            <Instagram size={24} /> {/* Ukuran ikon lebih besar */}
        </a>

        {/* Facebook */}
        <a 
            href="https://facebook.com/donistudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-500 transition-all transform hover:scale-125 hover:shadow-lg rounded-full p-1" // Efek hover dan rounded-full
            title="Like us on Facebook"
        >
            <FaTiktok size={24} /> {/* Ukuran ikon lebih besar */}
        </a>

        {/* TikTok - Menggunakan ikon Phone sebagai placeholder, jika ada ikon TikTok, gunakan itu */}
        <a 
            href="https://tiktok.com/@donistudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-gray-100 transition-all transform hover:scale-125 hover:shadow-lg rounded-full p-1" // Ganti warna hover jika Anda tahu warna brand TikTok
            title="Follow us on TikTok"
        >
            <Phone size={24} /> {/* Atau <FaTiktok size={24} /> jika menggunakan react-icons */}
        </a>

        {/* YouTube - Jika Anda memiliki kanal YouTube */}
        <a 
            href="https://youtube.com/donistudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-red-600 transition-all transform hover:scale-125 hover:shadow-lg rounded-full p-1"
            title="Subscribe to our YouTube Channel"
        >
            <Youtube size={24} /> {/* Atau <FaYoutube size={24} /> jika menggunakan react-icons */}
        </a>
        
    </div>
</div>

                </div>

                {/* Bagian Bawah Footer (Copyright) */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm font-light text-gray-600 pt-4">
                    <p className='text-gray-300'>
                        &copy; {new Date().getFullYear()} Doni Studio. All rights reserved.
                    </p>
                    <p className="mt-2 md:mt-0 text-gray-300">
                        Designed & Developed with Passion.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;