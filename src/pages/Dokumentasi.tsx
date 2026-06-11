import React from 'react';
import { Users, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';


import siklus1 from '../img/siklus-1.jpg';
import siklus2 from '../img/siklus-2.jpeg';
import siklus3 from '../img/siklus-3.jpeg';
export const Dokumentasi = () => {
  return (
    <PageTransition>
      <SectionHeading title="Dokumentasi Kegiatan PPL" subtitle="Arsip visual dan naratif pelaksanaan Praktik Pengalaman Lapangan di SMK Negeri 2 Salatiga" icon={Users} />
      
      <div className="space-y-16">
        {/* Observasi Peserta Didik */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3 border-l-4 border-brand-primary pl-4">
            <Users className="text-brand-primary" /> Observasi Peserta Didik
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <GlassCard className="p-0 overflow-hidden border-2 border-brand-primary/20 aspect-video group">
              <div className="w-full h-full bg-slate-200 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for Photo */}
                <img 
                  src="src\img\foto-observasi-peserta-didik.jpeg" 
                  alt="Observasi Peserta Didik" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 border border-white/50 shadow-sm">
                  Dokumentasi Observasi
                </div>
              </div>
            </GlassCard>
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed text-justify">
                Melakukan pengamatan mendalam terhadap karakteristik, gaya belajar, dan perkembangan sosial-emosional peserta didik di kelas XI TKJ. Pengamatan ini mencakup aspek kognitif, motivasi belajar, serta latar belakang sosial untuk merancang modul ajar yang lebih personal dan berdampak.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                  <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" /> Identifikasi Gaya Belajar Visual & Kinestetik
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                  <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" /> Pemetaan Kompetensi Awal Siswa
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pelaksanaan Pembelajaran */}
        <div className="pt-16 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3 border-l-4 border-indigo-500 pl-4">
            <BookOpen className="text-indigo-500" /> Pelaksanaan Pembelajaran
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Siklus 1", description: "Dokumentasi pelaksanaan pembelajaran pada siklus pertama, berfokus pada pengenalan konsep dasar dan adaptasi lingkungan kelas.", imgSrc:siklus1 },
              { title: "Siklus 2", description: "Pelaksanaan pembelajaran siklus kedua menekankan pada peningkatan interaksi aktif siswa melalui metode diskusi kelompok.", imgSrc:siklus2 },
              { title: "Siklus 3", description: "Siklus ketiga merupakan tahap pemantapan dimana siswa mampu mengaplikasikan proyek mandiri dengan pendampingan intensif.", imgSrc:siklus3 }
            ].map((cycle, idx) => (
              <GlassCard key={idx} className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60 group">
                <div className="h-32 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={cycle.imgSrc} 
                    alt={cycle.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    {cycle.title}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-slate-500 leading-relaxed text-justify">
                    {cycle.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Budaya Sekolah Section */}
        <div className="pt-16 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-12 flex items-center gap-3 border-l-4 border-brand-secondary pl-4">
            <Sparkles className="text-brand-secondary" /> Budaya & Lingkungan Sekolah
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Apel Pagi TKJ */}
            <GlassCard className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60">
              <div className="h-48 bg-slate-200 relative group overflow-hidden">
                <img 
                  src="src\img\apel-pagi.jpeg" 
                  alt="Apel Pagi TKJ" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Setiap Kamis</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-800 mb-3">Apel Pagi Jurusan TKJ</h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify mb-4 flex-1">
                  Dilaksanakan secara rutin setiap hari Kamis khusus untuk siswa jurusan TKJ. Kegiatan ini bertujuan untuk menanamkan kedisiplinan, memberikan motivasi industri, serta mengecek kesiapan atribut praktik siswa.
                </p>
              </div>
            </GlassCard>

            {/* Penyambutan Peserta Didik */}
            <GlassCard className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60">
              <div className="h-48 bg-slate-200 relative group overflow-hidden">
                <img 
                  src="src\img\menyambut-siswa.jpeg" 
                  alt="Kegiatan Penyambutan Peserta Didik" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-brand-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Setiap Pagi</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-800 mb-3">Penyambutan Siswa</h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify mb-4 flex-1">
                  Guru menyambut kedatangan siswa di gerbang sekolah dengan penuh kehangatan. Budaya ini membangun kedekatan emosional antara guru dan siswa serta menularkan energi positif sebelum memulai pembelajaran.
                </p>
              </div>
            </GlassCard>

            {/* Budaya 5S */}
            <GlassCard className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60">
              <div className="h-48 bg-slate-200 relative group overflow-hidden">
                <img 
                  src="src\img\kegiatan-5s.jpeg" 
                  alt="Budaya 5S" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Etika</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-800 mb-3">Budaya 5S</h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify mb-4 flex-1">
                  Penerapan Senyum, Sapa, Salam, Sopan, dan Santun di seluruh lingkungan SMK N 2 Salatiga. Budaya ini menjadi pilar pembentukan karakter religius dan etika profesional yang dibutuhkan di dunia kerja.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Operational Cultures: 5R & K3 */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <GlassCard className="p-8 border-emerald-100 bg-emerald-50/20 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-40 h-32 rounded-2xl overflow-hidden shadow-md shrink-0 bg-emerald-100">
                   <img 
                    src="src\img\budaya-5r.jpeg" 
                    alt="Budaya 5R" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Budaya 5R (Ringkas, Rapi, Resik, Rawat, Rajin)</h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Pemeliharaan laboratorium komputer TKJ dengan standar 5R untuk menciptakan lingkungan kerja yang teratur dan nyaman. Siswa dibiasakan untuk menjaga kebersihan lab setelah praktik selesai.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 border-orange-100 bg-orange-50/20 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-40 h-32 rounded-2xl overflow-hidden shadow-md shrink-0 bg-orange-100">
                   <img 
                    src="src\img\budaya-k3.jpeg" 
                    alt="Budaya K3" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Budaya K3 (Keselamatan & Kesehatan Kerja)</h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Implementasi standar K3 di lab komputer untuk memastikan keselamatan seluruh civitas akademika. Meliputi pengaturan kelistrikan yang aman, posisi duduk ergonomis, dan SOP penggunaan perangkat.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
