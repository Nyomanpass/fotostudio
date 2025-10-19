import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 

// Data FAQ
const faqData = [
    {
        question: "What type of photography do you specialize in?",
        answer: "Kami berspesialisasi dalam [Portrait, Landscape, Event, dll.] photography, menangkap momen yang menceritakan kisah unik. Kami fokus pada kualitas sinematik dan detail emosional."
    },
    {
        question: "How can I book a photography session with you?",
        answer: "Anda dapat melakukan pemesanan melalui halaman 'Kontak' kami, atau langsung chat melalui WhatsApp. Kami akan menjadwalkan konsultasi untuk memahami kebutuhan dan konsep Anda secara mendalam."
    },
    {
        question: "What equipment do you use for your photography?",
        answer: "Kami menggunakan peralatan profesional kelas atas, termasuk kamera mirrorless full-frame, lensa prime berkualitas tinggi, dan pencahayaan studio/lapangan yang canggih untuk memastikan hasil terbaik."
    },
    {
        question: "What is your editing process like?",
        answer: "Proses editing kami mencakup koreksi warna yang teliti (color grading), retouching yang natural, dan penyesuaian komposisi. Kami bertujuan untuk menyempurnakan setiap foto tanpa menghilangkan keaslian momen."
    },
    {
        question: "Are digital files included in your photography packages?",
        answer: "Ya, semua paket fotografi kami mencakup file digital beresolusi tinggi, siap cetak dan siap digunakan untuk media sosial."
    },
    {
        question: "How long does it take to receive the edited photos after a session?",
        answer: "Waktu pengiriman standar untuk hasil editing adalah 4-6 minggu setelah sesi foto, tergantung paket yang diambil. Kami selalu berusaha untuk mengirimkan *preview* atau *highlight* lebih cepat."
    },
];

const FaqSection = () => {
    // State untuk melacak indeks pertanyaan yang sedang terbuka
    const [openIndex, setOpenIndex] = useState(null);

    // Fungsi untuk mengubah status buka/tutup
    const toggleFaq = (index) => {
        // Jika indeks yang sama diklik lagi, tutup. Jika indeks berbeda, buka yang baru.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        // Latar belakang Putih, Teks Hitam/Abu-abu Gelap
        <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section (Gaya Font Tipis) */}
                <div className="text-left mb-12 md:mb-16">
                    <p className="text-sm font-light uppercase tracking-widest text-gray-600">FAQ's</p>
                    <h2 className="text-4xl md:text-4xl font-light text-gray-900 mt-1">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Grid Pertanyaan (Dua Kolom) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem 
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

// Komponen Item FAQ
const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div 
            className={`border-b border-gray-200 transition-all duration-300 cursor-pointer ${
                isOpen ? 'bg-gray-50' : 'hover:bg-gray-50' // Latar belakang ringan saat terbuka/hover
            }`}
        >
            {/* Bagian Pertanyaan/Judul (Selalu terlihat) */}
            <div 
                className="flex justify-between items-center p-4"
                onClick={onClick}
            >
                {/* Pertanyaan menggunakan teks normal, tidak semua huruf besar */}
                <h3 className="text-lg font-normal text-gray-900 pr-4">
                    {question}
                </h3>
                {/* Ikon Panah */}
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
            </div>

            {/* Bagian Jawaban (Conditional, hanya muncul jika isOpen=true) */}
            <div 
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 p-4 pt-0' : 'max-h-0 opacity-0 p-0'
                }`}
            >
                <p className="text-base font-light text-gray-600 pb-4">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default FaqSection;