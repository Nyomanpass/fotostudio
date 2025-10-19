import React from 'react';

const VisionMissionSection = () => {
    return (
        // Latar belakang Putih, Teks Hitam/Abu-abu Gelap
        <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Judul Utama */}
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 text-center mb-16 border-b border-gray-200 pb-4">
                    Our Core Philosophy
                </h2>

                {/* --- 1. PASSION KAMI --- */}
                <div className="mb-16">
                    <h3 className="text-3xl font-light text-gray-900 mb-6">
                        Passion Kami
                    </h3>
                    
                    <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
                        DoniStudio hadir dari passion untuk mengabadikan momen berharga dengan rasa dan keindahan sinematik. Kami percaya bahwa setiap momen memiliki cerita unik yang pantas diabadikan dengan sempurna.
                    </p>
                    
                    <p className="text-base font-light text-gray-700 leading-relaxed mb-4">
                        Berawal dari kecintaan terhadap fotografi dan videografi, kami telah membantu ratusan klien mengabadikan momen-momen penting dalam hidup mereka - dari pernikahan yang sakral, prewedding yang romantis, hingga acara corporate yang profesional.
                    </p>
                    
                    <p className="text-base font-light text-gray-700 leading-relaxed">
                        Dengan tim yang berpengalaman dan peralatan terkini, kami berkomitmen memberikan hasil terbaik yang tidak hanya memenuhi ekspektasi, namun melampaui harapan Anda. Setiap frame yang kami tangkap adalah karya seni yang menceritakan emosi dan keindahan momen tersebut.
                    </p>
                </div>

                {/* --- 2. VISI & KOMITMEN --- */}
                <div className="pt-8 border-t border-gray-100">
                    <h3 className="text-3xl font-light text-gray-900 mb-6">
                        Visi & Komitmen
                    </h3>
                    
                    <div className="p-6 bg-gray-50 border-l-4 border-gray-900 shadow-md">
                         <p className="text-xl font-normal text-gray-900 italic leading-snug">
                            "Kami percaya setiap momen berharga pantas diabadikan dengan sempurna. Komitmen kami adalah menghadirkan dokumentasi visual yang tidak hanya indah dipandang, tetapi juga mampu membangkitkan kembali emosi dan kenangan setiap kali Anda melihatnya."
                        </p>
                    </div>
                    
                    <p className="mt-4 text-base font-light text-gray-700">
                        Pernyataan ini menjadi pondasi bagi setiap interaksi dan proyek yang kami tangani, memastikan bahwa kami selalu memberikan nilai sentimental tertinggi melalui karya kami.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default VisionMissionSection;