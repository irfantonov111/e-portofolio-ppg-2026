import React from 'react';
import { motion } from 'motion/react';
import { User, CheckCircle2, Target, GraduationCap, MapPin, Sparkles, Quote } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Profil = ({ key }: { key?: React.Key }) => {
  return (
    <PageTransition>
      {/* Identity Card Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="glass rounded-[3rem] p-8 md:p-12 relative overflow-hidden border-brand-primary/20 bg-white/70 group">
          {/* Single Background Logo with Gradient Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-50">
            <div className="w-full h-full p-12 md:p-24 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2">
              <img 
                src="https://www.uksw.edu/wp-content/uploads/2023/06/USER120200827143745-300x300.png" 
                alt="UKSW Logo Background" 
                className="w-full h-full object-contain opacity-40" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-white/70 to-brand-secondary/10"></div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
            {/* Portrait Photo Wrapper */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
              <div className="w-48 h-56 md:w-56 md:h-64 rounded-[2.5rem] bg-indigo-100 overflow-hidden relative border-4 border-white shadow-2xl">
                <img 
                  src="src\img\foto-formal.jpg" 
                  alt="Profile Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100">
                <div className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary">
                  <CheckCircle2 size={24} />
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                <Target size={12} /> Mahasiswa PPG Prajabatan 2024
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 font-serif leading-tight">Irfan Hananto</h2>
              <p className="text-xl md:text-2xl text-brand-primary font-bold mb-6 italic opacity-90">Bidang Studi: Informatika</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/40 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Institusi</p>
                    <p className="text-xs font-bold text-slate-700">UKSW Salatiga</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/40 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Penempatan</p>
                    <p className="text-xs font-bold text-slate-700">SMK N 2 Salatiga</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/40 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Asal</p>
                    <p className="text-xs font-bold text-slate-700">Purbalingga, Jawa Tengah</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/40 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Karakter</p>
                    <p className="text-xs font-bold text-slate-700">Mandiri, Inovatif, Adaptif</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <SectionHeading title="Narasi Profil Mahasiswa" subtitle="Mengenal lebih dekat perjalanan pendidikan dan visi profesionalisme" icon={User} />
      
      <div className="grid md:grid-cols-1 gap-12">
        {/* Personal Bio */}
        <div className="glass p-10 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-10 right-10 text-slate-100/30 -z-10"><Quote size={200} /></div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 font-serif italic text-center md:text-left">Perjalanan Hidup & Inspirasi</h3>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6 text-justify">
            <p>
              Saya adalah <strong>Irfan Hananto</strong>, seorang putra daerah asal <strong>Purbalingga</strong>—sebuah kabupaten di Jawa Tengah yang dikenal dengan spirit "Perwira"-nya. Nilai-nilai kegigihan dan kerja keras dari kota asal ini menjadi akar karakter yang saya bawa dalam menempuh dunia pendidikan.
            </p>
            <p>
              Inspirasi saya menjadi guru profesional berawal dari keinginan untuk melahirkan generasi muda yang tidak hanya kompeten secara teknis, tetapi juga memiliki integritas karakter yang kuat. Bagi saya, pengajaran adalah seni menyentuh masa depan melalui hati dan pikiran para siswa.
            </p>
          </div>
        </div>

        {/* PPG Quote Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative py-12 px-8 glass rounded-[2.5rem] border-2 border-indigo-100/30 overflow-hidden text-center group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="absolute -top-10 -left-10 text-slate-100/20"><Quote size={150} /></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider mb-6">
              <Sparkles size={12} /> Refleksi PPG Prajabatan
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-relaxed mb-6">
              "Pendidikan Profesi Guru (PPG) bukan sekadar tentang mendapatkan sertifikasi, melainkan perjalanan transformasi untuk menjadi pendidik yang mampu menuntun kodrat anak menuju keselamatan dan kebahagiaan setinggi-tingginya."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-slate-300"></div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Visi Guru Masa Depan</span>
              <div className="h-px w-8 bg-slate-300"></div>
            </div>
          </div>
        </motion.div>

        {/* Campus & Placement Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* UKSW Salatiga */}
          <GlassCard className="p-0 overflow-hidden border-2 border-indigo-100/50 flex flex-col h-full">
            <div className="h-48 relative shrink-0">
              <img src="content\foto-uksw.jpg" className="w-full h-full object-cover" alt="UKSW" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <h4 className="text-2xl font-bold text-white">Universitas Kristen Satya Wacana</h4>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600"><GraduationCap size={24} /></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kampus Terpilih</span>
              </div>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-justify flex-1">
                <p><strong>Filosofi Campus:</strong> UKSW Salatiga dikenal sebagai <em>"The Creative Minority"</em>, sebuah lingkungan akademik yang inklusif dan beragam yang telah berdiri sejak 1956. Kampus ini membina mahasiswa untuk menjadi pemimpin yang berintegritas tinggi.</p>
                <p><strong>Program PPG:</strong> Sebagai mahasiswa <strong>PPG Informatika</strong> Prajabatan di UKSW, saya dibekali dengan kompetensi teknologi mutakhir dan pedagogi modern. Program ini memberikan penekanan khusus pada pengembangan karakter guru yang mandiri, adaptif, dan inovatif sesuai dengan tantangan kurikulum Merdeka.</p>
                <ul className="grid grid-cols-2 gap-2 pt-2 text-left">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Akreditasi Unggul</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Kurikulum Modern</li>
                </ul>
              </div>
              
              {/* Google Maps Embed for UKSW */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shrink-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5147401314643!2d110.4998053!3d-7.3332467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a79e4963e6e8d%3A0xe54d852cb7b667cc!2sSatya%20Wacana%20Christian%20University!5e0!3m2!1sen!2sid!4v1715328400000!5m2!1sen!2sid" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi UKSW Salatiga"
                ></iframe>
              </div>
            </div>
          </GlassCard>

          {/* SMK N 2 Salatiga */}
          <GlassCard className="p-0 overflow-hidden border-2 border-emerald-100/50 flex flex-col h-full">
            <div className="h-48 relative shrink-0">
              <img src="content\foto-smk.jpg" className="w-full h-full object-cover" alt="SMKN 2" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <h4 className="text-2xl font-bold text-white">SMK Negeri 2 Salatiga</h4>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600"><MapPin size={24} /></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lokasi Penempatan</span>
              </div>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-justify flex-1">
                <p><strong>Profil Sekolah:</strong> SMK N 2 Salatiga merupakan sekolah vokasi unggulan yang menerapkan kurikulum link and match dengan industri. Fokus pada kesiapan kerja (BMW: Bekerja, Melanjutkan, Wirausaha).</p>
                <p><strong>Jurusan & Fasilitas:</strong> Memiliki berbagai kompetensi keahlian unggulan seperti <strong>TKJ (Teknik Komputer & Jaringan)</strong>, <strong>TBKR (Teknik Bodi Kendaraan Ringan)</strong>, <strong>TKR (Teknik Kendaraan Ringan)</strong>, DKV/Multimedia, Teknik Pemesinan, dan Bangunan dengan fasilitas bengkel/lab standar industri modern.</p>
                <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 italic text-emerald-700">
                  "Budaya disiplin, jujur, dan berprestasi menjadi fondasi utama interaksi di lingkungan sekolah ini."
                </div>
              </div>

              {/* Google Maps Embed for SMK N 2 Salatiga */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shrink-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.6267888126867!2d110.4925488!3d-7.320147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a783669147e09%3A0x7d023b3f273574c8!2sSMK%20Negeri%202%20Salatiga!5e0!3m2!1sen!2sid!4v1715328450000!5m2!1sen!2sid" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi SMK N 2 Salatiga"
                ></iframe>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};
