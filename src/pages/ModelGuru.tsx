import React, { useState } from 'react';
import { Target, Star, Sparkles, BookOpen, Users, Compass, Award, CheckCircle2, Cpu, GraduationCap, Heart, ShieldAlert, ChevronRight, CheckSquare } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

interface CompetencyDetail {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  desc: string;
  points: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  badgeBg: string;
}

export const ModelGuru = () => {
  const [activeTab, setActiveTab] = useState<'4pilar' | 'tpack' | 'readiness'>('4pilar');
  const [selectedCompetency, setSelectedCompetency] = useState<number>(0);
  
  // State for interactive teacher readiness checklist
  const [readinessChecked, setReadinessChecked] = useState<boolean[]>([
    true, true, true, true, false, false, false
  ]);

  const toggleReadiness = (index: number) => {
    const updated = [...readinessChecked];
    updated[index] = !updated[index];
    setReadinessChecked(updated);
  };

  const calculatePercentage = () => {
    const checkedCount = readinessChecked.filter(Boolean).length;
    return Math.round((checkedCount / readinessChecked.length) * 100);
  };

  const competencies: CompetencyDetail[] = [
    {
      title: "Kompetensi Pedagogik",
      subtitle: "Seni Mengelola Pembelajaran Efektif",
      icon: BookOpen,
      desc: "Kemampuan guru dalam memahami karakteristik mendalam dari peserta didik secara psikologis fisik, emosional, kecerdasan batin, merancang desain pembelajaran inklusif, mengembangkan potensi anak seutuhnya, serta melakukan evaluasi hasil belajar yang komprehensif (Asesmen Otentik).",
      points: [
        "Memahami gaya belajar, minat, latar belakang kognitif, keunikan sosio-kultural peserta didik.",
        "Merancang pembelajaran berdiferensiasi (Content, Process, Product) didasari kurikulum nasional.",
        "Menerapkan evaluasi diagnostik, formatif nyata, dan sumatif bernilai konstruktif.",
        "Mengaktualisasikan berbagai potensi peserta didik agar tumbuh dengan merdeka belajar."
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50/20",
      borderColor: "border-indigo-100",
      badgeBg: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Kompetensi Profesional",
      subtitle: "Penguasaan Keilmuan & Informatika Mendalam",
      icon: Cpu,
      desc: "Kemampuan guru dalam menguasai secara komprehensif materi pelajaran, struktur keilmuan, konsep mendasar, metode penelitian ilmiah, serta implementasinya secara kontekstual di dunia nyata, khususnya pada bidang teknologi, informatika, dan computational thinking.",
      points: [
        "Menguasai materi bidang Informatika (Sistem Komputer, Jaringan, Analisis Data, Algoritma, Dampak Sosial).",
        "Menerapkan pengajaran Computational Thinking secara kontinu dalam pemecahan masalah.",
        "Terus meningkatkan kapabilitas diri melalui riset teknologi, publikasi ilmiah, dan seminar.",
        "Menghubungkan materi ajar sekolah dengan standar kompetensi industri informatika global modern."
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50/20",
      borderColor: "border-emerald-100",
      badgeBg: "bg-emerald-100 text-emerald-800"
    },
    {
      title: "Kompetensi Kepribadian",
      subtitle: "Pancaran Integritas, Etika, dan Teladan Nyata",
      icon: Heart,
      desc: "Karakteristik kepribadian guru yang mantap, stabil, berwibawa, dewasa, arif bijaksana, serta menunjukkan akhlak mulia seutuhnya guna menjadi inspirasi moralitas positif yang melandasi peradaban bagi seluruh generasi didik.",
      points: [
        "Menampilkan pribadi yang tangguh, konsisten, beretika luhur, berintegritas tinggi.",
        "Menghargai keragaman, bersikap arif, arsitek harmoni sosial di sekolah dan luar sekolah.",
        "Bekerja berlandaskan komitmen tulus pengabdian, berwibawa, dan memiliki loyalitas mendidik.",
        "Menampilkan keteladanan prima dalam tutur kata, busana, etika kerja, dan pengambilan keputusan."
      ],
      color: "text-amber-600",
      bgColor: "bg-amber-50/20",
      borderColor: "border-amber-100",
      badgeBg: "bg-amber-100 text-amber-800"
    },
    {
      title: "Kompetensi Sosial",
      subtitle: "Kecerdasan Kolaborasi & Jaringan Komunikasi",
      icon: Users,
      desc: "Kemampuan interaksi profesional guru guna berkomunikasi dan berkolaborasi secara santun, empatik, efektif, objektif dengan peserta didik, rekan sejawat, staf sekolah, wali murid, komunitas profesi, serta masyarakat luas.",
      points: [
        "Berkomunikasi secara lisan dan tertulis secara santun, bersahaja, lugas, mengayomi, humanis.",
        "Mampu berkolaborasi aktif menyelesasikan masalah pendidikan bersama sejawat, sekolah, wali siswa.",
        "Terbuka terhadap masukan konstruktif demi kemajuan kolektif kualitas pembelajaran.",
        "Beradaptasi secara dinamis di berbagai lingkungan penugasan sosio-kultural yang sarat keberagaman."
      ],
      color: "text-rose-600",
      bgColor: "bg-rose-50/20",
      borderColor: "border-rose-100",
      badgeBg: "bg-rose-100 text-rose-800"
    }
  ];

  const readinessAttributes = [
    { text: "Memiliki Rencana Pelaksanaan Pembelajaran (RPP/Modul Ajar) yang matang, interaktif, inklusif", category: "Pedagogis" },
    { text: "Menguasai dasar materi ajar Informatika (coding, computational thinking, keamanan data, dsb.)", category: "Profesional" },
    { text: "Menerapkan pendekatan pengajaran Ki Hajar Dewantara secara humanis & merdeka belajar", category: "Filosofis" },
    { text: "Mampu menggunakan teknologi pendidikan (LMS, kuis berbasis gim, media digital) secara adaptif", category: "Teknologis" },
    { text: "Mempunyai komitmen untuk selalu melakukan refleksi jujur secara berkala sesudah sesi mengajar", category: "Kepribadian" },
    { text: "Aktif membangun hubungan interpersonal yang sopan, solutif, kolaboratif dengan guru pamong & dosen", category: "Sosial" },
    { text: "Menyiapkan asesmen performa komprehensif, rubrik penilaian objektif, serta rencana remedial konkrit", category: "Asesmen" }
  ];

  return (
    <PageTransition>
      <SectionHeading 
        title="Model Guru Masa Depan" 
        subtitle="Sintesis holistik kompetensi unggul, pendekatan pedagogis inovatif, dan integrasi kerangka TPACK untuk mengawal transformasi pendidikan" 
        icon={GraduationCap} 
      />

      {/* Philosophy Jargon and Core Vision Showcase */}
      <div className="mb-12">
        <GlassCard className="p-8 md:p-12 border-brand-primary/20 bg-white/75 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -ml-24 -mb-24"></div>
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3 h-3 animate-ping" /> Kerangka Pendidik Profesional
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 leading-tight mb-4">
                Merefleksikan Visi Guru Profesional Abad ke-21
              </h2>
              <p className="text-slate-600 leading-relaxed text-justify mb-6">
                Pendidikan modern tidak hanya menuntut guru melimpahkan fakta-fakta keilmuan secara pasif (rote learning). Pendidik masa depan dituntut menavigasi disrupsi teknologi melalui ketajaman merancang interaksi bermakna, menanamkan nilai-nilai luhur Pancasila, serta membangun lingkungan eksplorasi digital yang beradab dan berdaya saing global.
              </p>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2.5">
                <button 
                  onClick={() => setActiveTab('4pilar')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === '4pilar' ? 'bg-brand-primary text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  <Award className="w-4 h-4" /> 4 Pilar Kompetensi Guru
                </button>
                <button 
                  onClick={() => setActiveTab('tpack')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'tpack' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  <Cpu className="w-4 h-4" /> Integrasi Kerangka TPACK
                </button>
                <button 
                  onClick={() => setActiveTab('readiness')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'readiness' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  <CheckSquare className="w-4 h-4" /> Matriks Kesiapan Mengajar
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 h-72 md:h-80 rounded-[2rem] overflow-hidden border-2 border-brand-primary/15 relative shadow-xl">
              <img 
                src="src\img\model-guru-impian.jpeg" 
                alt="Teacher explaining computer science" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent flex items-end p-6">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-indigo-300 block mb-0.5">Praktik Lapangan</span>
                  <p className="text-xs font-medium text-white italic">"Menuntun tumbuh kembang anak didik agar selamat dan bahagia."</p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Dynamic Tab Contents */}
      <div className="mb-16">
        {activeTab === '4pilar' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side checklist selectors */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl mb-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Standar Nasional Pendidikan</h4>
                <p className="text-xs text-slate-600">Pilih salah satu pilar untuk mengeksplorasi deskripsi dan implementasi di kelas:</p>
              </div>
              
              {competencies.map((comp, index) => {
                const IconComponent = comp.icon;
                const isSelected = selectedCompetency === index;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedCompetency(index)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4 ${isSelected ? `bg-white ${comp.borderColor} shadow-md scale-[1.02]` : 'bg-white/60 hover:bg-white border-slate-100'}`}
                  >
                    <div className={`p-3 rounded-xl bg-white shadow-sm shrink-0 ${comp.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-slate-800 text-sm truncate">{comp.title}</h5>
                      <p className="text-xs text-slate-500 truncate">{comp.subtitle}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? 'rotate-90 text-slate-800' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Right side core details of chosen competency */}
            <div className="lg:col-span-7">
              <GlassCard className={`p-8 border-2 ${competencies[selectedCompetency].borderColor} ${competencies[selectedCompetency].bgColor}`}>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/50">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl bg-white shadow-md ${competencies[selectedCompetency].color}`}>
                      {React.createElement(competencies[selectedCompetency].icon, { size: 28 })}
                    </div>
                    <div>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${competencies[selectedCompetency].badgeBg}`}>
                        Pilar {selectedCompetency + 1} Sesuai UU Guru & Dosen
                      </span>
                      <h3 className="text-2xl font-bold text-slate-800 mt-1 font-serif">{competencies[selectedCompetency].title}</h3>
                    </div>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none text-slate-600 mb-8 text-sm leading-relaxed text-justify">
                  <p>{competencies[selectedCompetency].desc}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Implementasi & Kompetensi Indikator:
                  </h4>
                  <ul className="space-y-3">
                    {competencies[selectedCompetency].points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-xs leading-relaxed text-slate-600 items-start justify-start">
                        <span className={`w-1.5 h-1.5 rounded-full ${competencies[selectedCompetency].color} shrink-0 mt-2`}></span>
                        <p className="text-justify">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
            
          </div>
        )}

        {activeTab === 'tpack' && (
          <div className="space-y-8">
            <GlassCard className="p-8 md:p-10 border-indigo-100 bg-indigo-50/5">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <Cpu className="text-indigo-600" /> Kerangka Kerja TPACK (Technological Pedagogical Content Knowledge)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify mb-8">
                <strong>TPACK</strong> merupakan sebuah kerangka pengetahuan integratif yang secara komprehensif mengintegrasikan tiga pilar pengetahuan utama guru: <strong>Teknologi (Technology)</strong>, <strong>Pedagogi (Pedagogy)</strong>, dan <strong>Materi Ajar (Content)</strong>. Sebagai guru Informatika kelas XI TKJ SMK N 2 Salatiga, menguasai irisan-irisan ini menghasilkan pendekatan pembelajaran revolusioner yang tidak sekadar menggunakan perangkat keras, tapi mentransformasi cara berpikir murid.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Technological Knowledge (TK)",
                    desc: "Pemahaman mendalam guru dalam pengoperasian alat, simulator jaringan Cisco Packet Tracer, LMS, perangkat keras router, server, dan literasi keamanan siber tingkat lanjut.",
                    accent: "border-indigo-150 bg-indigo-50/10",
                    badge: "Pilar Teknologi"
                  },
                  {
                    title: "Pedagogical Knowledge (PK)",
                    desc: "Kemampuan memahami metodologi pengajaran berbasis projek (PjBL), Pembelajaran Penemuan (Discovery Learning), strategi diskusi, pembelajaran reflektif, serta diferensiasi bimbingan.",
                    accent: "border-emerald-150 bg-emerald-50/10",
                    badge: "Pilar Pedagogi"
                  },
                  {
                    title: "Content Knowledge (CK)",
                    desc: "Penguasaan kurikulum dan materi riil Informatika (TKJ): Alamat IP (Subnetting), topologi nirkabel, pemasangan router, administrasi jaringan, troubleshooting perangkat keras.",
                    accent: "border-amber-150 bg-amber-50/10",
                    badge: "Pilar Konten Keilmuan"
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border-2 ${item.accent} transition-all hover:shadow-md`}>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">{item.badge}</span>
                    <h4 className="font-bold text-slate-800 text-sm mb-3">{item.title}</h4>
                    <p className="text-xs text-slate-600 text-justify leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Central Synthesis: The Magic Intersection */}
              <div className="mt-8 p-6 bg-gradient-to-tr from-brand-primary/10 to-indigo-50/50 rounded-2xl border border-brand-primary/15 relative">
                <h4 className="font-bold text-brand-primary text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-spin-slow" /> Irisan Termulia: TPACK di Kelas Informatika
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed text-justify">
                  Sintesis metodis terjadi saat guru menyajikan materi <strong>Topologi dan Protokol Jaringan (Content)</strong>, diajarkan menggunakan strategi <strong>Project-Based Learning berkelompok (Pedagogis)</strong>, dan dioptimalisasikan lewat media <strong>Simulasi visual interaktif dan live router config (Teknologi)</strong>. Melalui model ini, siswa tidak hanya menghafal prosedur namun mengembangkan kecerdasan analisis jaringan yang aplikatif untuk standar kerja industri abad modern.
                </p>
              </div>
            </GlassCard>
          </div>
        )}

        {activeTab === 'readiness' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive checkable matrices */}
            <div className="lg:col-span-7">
              <GlassCard className="p-8 border-emerald-100 bg-white/70">
                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <CheckSquare className="text-emerald-600" /> Lembar Evaluasi Diri Guru Profesional
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Gunakan poin di bawah ini sebagai tolak ukur pemantapan kompetensi Anda.</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {readinessAttributes.map((attr, idx) => (
                    <div 
                      key={idx}
                      onClick={() => toggleReadiness(idx)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex gap-3.5 items-start justify-start ${readinessChecked[idx] ? 'bg-emerald-50/30 border-emerald-200' : 'bg-white hover:bg-slate-50/80 border-slate-100'}`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${readinessChecked[idx] ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-350 bg-white text-transparent'}`}>
                        <CheckCircle2 size={14} className="stroke-[3]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${readinessChecked[idx] ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                            {attr.category}
                          </span>
                        </div>
                        <p className={`text-xs text-justify ${readinessChecked[idx] ? 'font-medium text-slate-800' : 'text-slate-600'}`}>
                          {attr.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Live Meter / Progress visual indicator */}
            <div className="lg:col-span-5 space-y-6">
              <GlassCard className="p-6 border-slate-150 bg-white/60 text-center">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Indikator Kesiapan (Readiness Meter)</h4>
                
                <div className="relative w-44 h-44 mx-auto mb-6 flex items-center justify-center">
                  {/* Decorative background circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="88" cy="88" r="76" className="stroke-slate-100" strokeWidth="12" fill="transparent" />
                    <circle cx="88" cy="88" r="76" className="stroke-emerald-500 transition-all duration-1000 ease-out" strokeWidth="12" fill="transparent"
                      strokeDasharray={2 * Math.PI * 76}
                      strokeDashoffset={2 * Math.PI * 76 * (1 - calculatePercentage() / 100)}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-extrabold text-slate-800">{calculatePercentage()}%</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Siap Mengajar</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100 text-left mb-2">
                  <span className="text-[9.5px] font-bold text-emerald-800 block mb-1 uppercase tracking-widest">
                    {calculatePercentage() >= 80 ? '🎖️ SANGAT SIAP DAN KONDUSIF' : calculatePercentage() >= 40 ? '📈 TAHAP PERKEMBANGAN MANDIRI' : '⚠️ BUTUH PENDAMPINGAN INTENSIF'}
                  </span>
                  <p className="text-[11px] text-slate-600 text-justify leading-relaxed">
                    {calculatePercentage() >= 80 
                      ? 'Nilai kematangan model guru telah tercapai optimal. Anda siap melangkah menuntun peserta didik dalam menyongsong tantangan peradaban digital.' 
                      : calculatePercentage() >= 40 
                      ? 'Sistem kematangan guru berada pada level yang baik. Lakukan eksplorasi tambahan berkelanjutan untuk menyempurnakan aspek instrumen evaluasi.' 
                      : 'Lakukan pemantapan modul, konsultasi mentor guru pamong, dan perdalam pemahaman computational thinking sebelum memulai pembelajaran.'}
                  </p>
                </div>
              </GlassCard>

              {/* Inspirational Quote de KHD */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-150 text-justify">
                <h4 className="text-[10px] font-bold text-slate-500 block uppercase tracking-widest mb-2">Semboyan Klasik Abadi</h4>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "Anak-anak hidup dan tumbuh sesuai kodratnya sendiri. Pendidik hanya dapat merawat dan menuntun tumbuhnya kodrat itu. Pendidikan bukan mencetak bentuk porselen, melainkan menumbuhkan bibit unggul kehidupan."
                </p>
                <span className="block text-[9px] text-right font-semibold text-slate-400 uppercase tracking-widest mt-3">— Ki Hajar Dewantara</span>
              </div>
            </div>

          </div>
        )}
      </div>
    </PageTransition>
  );
};
