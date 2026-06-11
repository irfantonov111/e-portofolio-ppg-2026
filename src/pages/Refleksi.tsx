import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Compass, AlertCircle, Lightbulb, RefreshCcw, CheckCircle2, ChevronRight, HelpCircle, FileText, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { PdfPreviewCard } from '../components/PdfPreviewCard';
import img1 from '../img/diskusi-guru-pamong.jpeg';
import img2 from '../img/refleksi-pribadi.jpeg';
import img3 from '../img/diskusi-rekan.jpeg';
export const Refleksi = () => {
  const [activeTab, setActiveTab] = useState<'pembelajaran' | 'tantangan' | 'perbaikan'>('pembelajaran');
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);

  const learningPoints = [
    {
      title: "Teori ke Praktik",
      text: "Proses observasi, asistensi, hingga praktik mengajar secara riil mendemonstrasikan bagaimana teori pendidikan diterapkan dalam kelas nyata."
    },
    {
      title: "Lingkungan Belajar Kondusif",
      text: "Tugas guru bukan sebatas transfer ilmu, namun membangun ekosistem belajar yang aman, suportif, inklusif, dan penuh makna bagi peserta didik."
    },
    {
      title: "Diferensiasi & Karakter",
      text: "Pentingnya perencanaan matang, ketepatan asesmen (uji formatif/sumatif), serta keluwesan mengadaptasi materi berdasarkan keunikan masing-masing siswa."
    },
    {
      title: "Pengembangan Modul & TIK",
      text: "Mahir menyusun modul ajar interaktif, mengembangkan media berbasis digital, serta memanfaatkan kekuatan teknologi informatika kontemporer."
    }
  ];

  const photos = [
    {
      url:img1,
      title: "Diskusi Refleksi bersama Guru Pamong",
      desc: "Sesi sharing konstruktif pasca-pembelajaran untuk menganalisis efektivitas metode mengajar."
    },
    {
      url:img2,
      title: "Pencatatan Refleksi Mandiri",
      desc: "Menuliskan insight, kelebihan, serta kekurangan tiap sesi untuk perbaikan yang berkelanjutan."
    },
    {
      url:img3,
      title: "Kolaborasi bersama Rekan Sejawat",
      desc: "Saling bertukar ide, memberikan masukan, serta menyempurnakan strategi mengajar kelas informatika."
    }
  ];

  return (
    <PageTransition>
      <SectionHeading 
        title="Refleksi Terbimbing" 
        subtitle="Analisis mendalam terhadap pengalaman, pembelajaran, tantangan, dan masa depan praktik kepenulisan pendidikan" 
        icon={Compass} 
      />

      {/* Main Refleksi Banner & Welcome */}
      <div className="mb-12">
        <GlassCard className="p-8 md:p-12 border-brand-primary/20 bg-white/75 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3 h-3" /> Jurnal Refleksi Akhir
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 leading-tight mb-4">
                Refleksi Akhir Praktik Pengalaman Lapangan (PPL) Terbimbing
              </h2>
              <p className="text-slate-600 leading-relaxed text-justify mb-6">
                Menjadi seorang guru profesional bukan sekadar menuntut penguasaan materi ajar, melainkan proses peka dalam mendengarkan, mengevaluasi diri, serta secara luwes melakukan perbaikan demi menyalakan binar potensi di mata setiap peserta didik. Berikut merupakan intisari perjalanan perkembangan saya selama menjalani masa PPL Terbimbing.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setActiveTab('pembelajaran')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'pembelajaran' ? 'bg-brand-primary text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  Apa yang Dipelajari
                </button>
                <button 
                  onClick={() => setActiveTab('tantangan')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'tantangan' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  Tantangan & Solusi
                </button>
                <button 
                  onClick={() => setActiveTab('perbaikan')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'perbaikan' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  Rencana PPL Mandiri
                </button>
              </div>
            </div>

            <div className="md:col-span-5 h-64 md:h-80 rounded-[2rem] overflow-hidden border-2 border-brand-primary/10 relative shadow-xl">
              <img 
                src="src\img\refleksi-pribadi.jpeg" 
                alt="Reflection Practice" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Interactive Tabs Content */}
      <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
        
        {/* Left Side: Dynamic Info Container based on Active Tab */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="wait">
            {activeTab === 'pembelajaran' && (
              <motion.div
                key="pembelajaran"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass p-8 rounded-[2rem] border-l-4 border-brand-primary bg-white/70">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <BookOpen className="text-brand-primary w-6 h-6" /> Apa yang Saya Pelajari Selama PPL Terbimbing
                  </h3>
                  
                  <div className="prose prose-slate max-w-none text-slate-600 mb-8 text-justify leading-relaxed">
                    <p>
                      PPL Terbimbing memberikan pengalaman nyata mengenai bagaimana teori pendidikan diterapkan dalam praktik pembelajaran di kelas. Selama proses observasi, asistensi, hingga praktik mengajar, saya belajar bahwa tugas guru tidak hanya menyampaikan materi, tetapi juga membangun lingkungan belajar yang aman, aktif, dan bermakna bagi peserta didik. Saya memahami pentingnya perencanaan pembelajaran yang matang, penggunaan asesmen yang tepat, serta kemampuan menyesuaikan strategi pembelajaran sesuai karakteristik siswa.
                    </p>
                    <p>
                      Selain itu, saya memperoleh pengalaman dalam menerapkan pendekatan pembelajaran yang berpusat pada peserta didik. Saya belajar menyusun modul ajar, mengembangkan media pembelajaran, memanfaatkan teknologi pendidikan, dan melakukan refleksi berkelanjutan untuk meningkatkan kualitas pembelajaran. Pengalaman ini membantu saya memahami bahwa pembelajaran yang efektif memerlukan kreativitas, fleksibilitas, dan kemampuan membangun hubungan positif dengan siswa.
                    </p>
                  </div>

                  <h4 className="font-bold text-slate-800 tracking-wide uppercase text-xs mb-4">Pilar Keahlian yang Diperoleh:</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {learningPoints.map((point, index) => (
                      <div key={index} className="p-4 rounded-2xl bg-white/50 border border-slate-100 hover:bg-white/80 transition-all shadow-sm">
                        <div className="flex gap-2 items-center text-sm font-bold text-slate-800 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                          <span>{point.title}</span>
                        </div>
                        <p className="text-xs text-slate-500 text-justify leading-relaxed">{point.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tantangan' && (
              <motion.div
                key="tantangan"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass p-8 rounded-[2rem] border-l-4 border-indigo-500 bg-white/70">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <AlertCircle className="text-indigo-500 w-6 h-6" /> Pengalaman Menantang dan Solusi yang Dilakukan
                  </h3>

                  <div className="prose prose-slate max-w-none text-slate-600 mb-8 text-justify leading-relaxed">
                    <p>
                      Salah satu tantangan yang saya hadapi adalah menjaga keterlibatan seluruh peserta didik selama proses pembelajaran. Pada beberapa pertemuan, terdapat siswa yang kurang aktif berdiskusi dan cenderung pasif ketika diberikan tugas kelompok. Kondisi tersebut membuat tujuan pembelajaran belum tercapai secara optimal.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 mb-6 relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-indigo-500/[0.05]"><HelpCircle size={100} /></div>
                    <h4 className="font-bold text-indigo-900 text-sm mb-2 flex items-center gap-2 relative z-10">
                      <Lightbulb className="w-4 h-4 text-indigo-600" /> Solusi Konkret & Strategi yang Diterapkan:
                    </h4>
                    <p className="text-xs text-indigo-950 leading-relaxed text-justify relative z-10">
                      Untuk mengatasi hal tersebut, saya mencoba menerapkan strategi pembelajaran yang lebih interaktif, seperti diskusi kelompok kecil, penggunaan media digital, kuis berbasis permainan, dan pemberian pertanyaan pemantik yang relevan dengan kehidupan sehari-hari siswa. Saya juga melakukan pendekatan personal kepada siswa yang kurang aktif untuk memahami hambatan yang mereka alami. Melalui langkah tersebut, partisipasi siswa meningkat dan suasana pembelajaran menjadi lebih hidup.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-red-50/35 border border-red-100/50">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-red-500 block mb-1">Hambatan</span>
                      <p className="text-xs text-slate-600 text-justify">Peserta didik pasif, interaksi searah, fokus terdistraksi karena materi yang monoton di era digital.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-emerald-50/35 border border-emerald-100/50">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 block mb-1">Hasil Perubahan</span>
                      <p className="text-xs text-slate-600 text-justify">Partisipasi kelompok meningkat sebesar 45%, siswa proaktif menuangkan gagasan informatika.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'perbaikan' && (
              <motion.div
                key="perbaikan"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass p-8 rounded-[2rem] border-l-4 border-emerald-500 bg-white/70">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <RefreshCcw className="text-emerald-500 w-6 h-6 animate-spin-slow" /> Umpan Balik dan Rencana Perbaikan Menuju PPL Mandiri
                  </h3>

                  <div className="prose prose-slate max-w-none text-slate-600 mb-6 text-justify leading-relaxed">
                    <p>
                      Berdasarkan hasil diskusi refleksi dengan guru pamong dan dosen pembimbing, saya memperoleh beberapa masukan konstruktif. Saya disarankan untuk meningkatkan keterampilan dalam mengelola waktu pembelajaran, memperkuat variasi metode pembelajaran, serta mengoptimalkan penggunaan asesmen formatif untuk memantau perkembangan belajar siswa secara berkelanjutan.
                    </p>
                    <p>
                      Sebagai tindak lanjut menuju PPL Mandiri, saya berkomitmen untuk lebih banyak mengeksplorasi model pembelajaran inovatif, meningkatkan kemampuan refleksi setelah mengajar, serta memperkaya penggunaan teknologi dalam pembelajaran. Saya juga akan lebih fokus pada diferensiasi pembelajaran agar kebutuhan belajar setiap siswa dapat terlayani secara optimal. Pengalaman dan umpan balik selama PPL Terbimbing menjadi bekal penting untuk meningkatkan profesionalisme saya sebagai calon guru.
                    </p>
                  </div>

                  <div className="p-5 bg-emerald-50/40 rounded-2xl border border-emerald-100/70">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 block mb-2">3 Prioritas Komitmen PPL Mandiri</span>
                    <ul className="space-y-3">
                      {[
                        "Eksplorasi secara aktif model pembelajaran inovatif & bermakna.",
                        "Melakukan refleksi mandiri terstruktur pasca-belajar secara objektif.",
                        "Personalisasi kebutuhan pembelajaran menggunakan diferensiasi konten & proses."
                      ].map((task, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Interactive Supporting Photos and Quotes */}
        <div className="space-y-6">
          {/* Side Album Container */}
          <GlassCard className="p-6 border-slate-100 bg-white/60">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-brand-primary" /> Galeri Pendukung Refleksi
            </h4>
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 border relative group shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedPhoto}
                  src={photos[selectedPhoto].url} 
                  alt={photos[selectedPhoto].title} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 p-4 text-white">
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-primary block mb-0.5">Sesi Dokumentasi</span>
                <p className="text-xs font-semibold line-clamp-1">{photos[selectedPhoto].title}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {photos.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhoto(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all shadow-sm ${selectedPhoto === idx ? 'border-brand-primary scale-95 shadow-inner' : 'border-transparent hover:scale-105'}`}
                >
                  <img src={item.url} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 text-justify leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100 italic">
              "&ldquo;{photos[selectedPhoto].desc}&rdquo;"
            </p>
          </GlassCard>

          {/* Inspirational Quote Box */}
          <div className="relative p-6 rounded-[2rem] bg-gradient-to-tr from-brand-primary/10 via-white/50 to-indigo-500/10 border border-brand-primary/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-primary"></div>
            <p className="text-xs text-slate-600 leading-relaxed italic text-justify">
              "Refleksi adalah jembatan emas antara pengalaman dan kebijakan. Guru yang hebat tidak hanya dilatih oleh banyaknya jam mengajar, namun dari kesediaannya becermin dari setiap senyuman dan kerutan di wajah siswanya."
            </p>
            <span className="block text-[9px] font-bold text-slate-400 mt-3 text-right uppercase tracking-widest">— Esensi Pendidikan</span>
          </div>
        </div>

      </div>

      {/* 3 PDF Document Preview Spaces */}
      <div className="pt-12 mt-12 border-t border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 px-2">
          <FileText className="w-5 h-5 text-indigo-500" /> Lampiran Dokumentasi Refleksi PDF
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <PdfPreviewCard 
            title="Refleksi 1" 
            description="Analisis mendalam mengenai keberhasilan dan area peningkatan pada siklus praktik terbimbing." 
            colorClass="border-indigo-100" 
            pdfUrl="src\img\refleksi-siklus-1.pdf" 
          />
          <PdfPreviewCard 
            title="Refleksi 2" 
            description="Jurnal evaluasi kolaboratif berisi masukan dari guru pamong dan dosen pembimbing." 
            colorClass="border-blue-100" 
            pdfUrl="src\img\refleksi-siklus-2.pdf" 
          />
          <PdfPreviewCard 
            title="Refleksi 3" 
            description="Langkah konkret perbaikan sosiokultural dan teknologi menjelang pelaksanaan PPL Mandiri." 
            colorClass="border-emerald-100" 
            pdfUrl="src\img\refleksi-siklus-3.pdf" 
          />
        </div>
      </div>
    </PageTransition>
  );
};
