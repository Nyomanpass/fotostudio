import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // State baru: untuk melacak apakah halaman sudah di-scroll ke bawah
  const [isScrolled, setIsScrolled] = useState(false); 

  // LOGIKA SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      // Tentukan apakah posisi scroll vertikal (window.scrollY) lebih dari 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen dilepas (cleanup)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array dependensi kosong agar hanya berjalan sekali saat mount

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portofolio' },
    { name: 'Testimonial', href: '/testimonial' },
    { name: 'Contact', href: '/contact' },
  ];

  // Gunakan className untuk mengontrol tampilan top bar
  const topBarClass = isScrolled 
    ? 'max-h-0 opacity-0 overflow-hidden py-0' // Sembunyikan jika di-scroll
    : 'max-h-20 opacity-100 py-2';           // Tampilkan jika di atas

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50 backdrop-blur-sm transition-all duration-300">
        
        {/* TOP BAR YANG BISA HILANG */}
      
        {/* AKHIR TOP BAR */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wrapper Flex */}
          <div className="flex justify-between items-center h-16 relative">
            {/* Mobile: Hamburger Kiri */}
            <div className="flex lg:hidden absolute left-0 top-1/2 -translate-y-1/2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* ✅ Desktop: Semua Menu + Logo di Tengah */}
            <div className="hidden lg:flex w-full justify-center items-center space-x-6">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  {/* Logo muncul di tengah */}
                  {index === 3 && (
                    <a href="/" className="text-xl font-serif px-14 tracking-widest text-gray-800 mx-4 text-center">
                      DONY
                      <span className="block text-xs font-sans tracking-normal text-gray-500">
                        BE PRO EXPERTS
                      </span>
                    </a>
                  )}
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition duration-150"
                  >
                    {link.name}
                  </a>
                </React.Fragment>
              ))}
            </div>

            {/* Mobile: Login Kanan */}
            <div className="flex lg:hidden absolute right-0 top-1/2 -translate-y-1/2">
              <a href="#" className="bg-gray-800 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-900">
                Login
              </a>
            </div>

          </div>
        </div>

        {/* ✅ Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#" 
                className="block bg-gray-800 text-white text-center px-4 py-2 mt-2 rounded-md text-base font-medium hover:bg-gray-900"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;