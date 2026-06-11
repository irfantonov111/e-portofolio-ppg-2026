import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Quote as QuoteIcon, Sparkles, Award, Lightbulb, BookOpen, CheckCircle2, Cpu, Users, Layers } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Filosofi = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: "Inklusivitas & Potensi",
      subtitle: "Menghargai Keunikan Individu",
      desc: "Mengajar adalah memfasilitasi anak untuk menemukan versi terbaik dirinya. Menghargai keberagaman kecepatan belajar serta memberikan kesempatan setara bagi semua siswa untuk berkembang.",
      icon: Users,
      bgColor: "bg-indigo-50/20",
      borderColor: "border-indigo-100",
      textColor: "text-indigo-600",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Menuntun Kodrat Anak",
      subtitle: "Pilar Ki Hajar Dewantara (KHD)",
      desc: "Pendidikan harus melayani anak sesuai kodrat alam dan kodrat zamannya agar mereka meniti kebahagiaan setinggi-tingginya. Pendidik hadir sebagai pemandu yang tulus, penuntun, dan role-model luhur.",
      icon: BookOpen,
      bgColor: "bg-emerald-50/20",
      borderColor: "border-emerald-100",
      textColor: "text-emerald-600",
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      title: "Kompetensi Abad ke-21",
      subtitle: "Navigasi Masa Depan Informatika",
      desc: "Sebagai pendidik teknologi, membekali murid berupa Computational Thinking, keterampilan kolaborasi, literasi digital etis, komunikasi, serta problem-solving adaptif yang aplikatif di era modern.",
      icon: Cpu,
      bgColor: "bg-amber-50/20",
      borderColor: "border-amber-100",
      textColor: "text-amber-600",
      badgeColor: "bg-amber-100 text-amber-800"
    }
  ];

  return (
    <PageTransition>
      <SectionHeading 
        title="Filosofi Mengajar" 
        subtitle="Sudut pandang mendalam tentang peran pendidik, esensi menuntun kodrat, serta masa depan pembelajaran teknologi" 
        icon={Target} 
      />

      {/* Hero Quote Block */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative py-12 px-8 md:px-16 glass rounded-[3rem] border-2 border-brand-primary/20 overflow-hidden text-center bg-white/70 shadow-xl"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-indigo-500 to-brand-secondary"></div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 text-slate-100/30 -z-10"><QuoteIcon size={180} /></div>
        <div className="absolute -bottom-10 -right-10 text-slate-100/30 -z-10 rotate-180"><QuoteIcon size={180} /></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <Sparkles size={12} className="animate-pulse" /> Semboyan Pembelajaran
          </div>
          
          <blockquote className="text-2xl md:text-3.5xl font-serif italic text-slate-800 leading-relaxed font-semibold mb-6">
            "Setiap peserta didik memiliki potensi untuk berkembang apabila diberikan kesempatan, dukungan, dan lingkungan belajar yang tepat."
          </blockquote>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-slate-200"></div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Komitmen Pendidikan</span>
            <div className="h-px w-8 bg-slate-200"></div>
          </div>
        </div>
      </motion.div>

      {/* Main Philosophy Narrative */}
      <div className="grid lg:grid-cols-12 gap-8 mb-16 items-start">
        
        {/* Paragraph Narrative text */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard className="p-8 md:p-10 border-slate-100 bg-white/75 relative">
            <h3 className="text-2xl font-bold font-serif text-slate-800 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-primary" /> Visi Pedagogis Luhur
            </h3>
            
            <div className="space-y-6 text-slate-600 text-sm leading-relaxed text-justify">
              <p>
                Bagi saya, mengajar bukan sekadar menyampaikan pengetahuan, melainkan proses memfasilitasi peserta didik agar mampu menemukan, memahami, dan mengembangkan potensi terbaik yang dimilikinya. Saya meyakini bahwa setiap siswa memiliki kemampuan untuk belajar dan berkembang dengan kecepatan yang berbeda. Oleh karena itu, guru perlu menciptakan pembelajaran yang inklusif, menghargai keberagaman, dan memberikan kesempatan yang setara kepada seluruh peserta didik untuk mencapai keberhasilan.
              </p>
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 relative my-6">
                <div className="absolute top-4 right-4 text-slate-100"><Layers size={40} /></div>
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">Asas Trikon & Pembelajaran Bermakna</h4>
                <p className="text-xs text-slate-500 mb-0">
                  Melaraskan konsep kontinuitas, konvergensitas, dan konsentrisitas dalam memfasilitasi ilmu pengetahuan modern di ruang kelas demi kemandirian berpikir seutuhnya.
                </p>
              </div>

              <p>
                Filosofi mengajar saya juga berlandaskan pada pemikiran <strong>Ki Hajar Dewantara</strong> bahwa pendidikan harus menuntun segala kodrat yang ada pada anak agar mereka dapat mencapai keselamatan dan kebahagiaan setinggi-tingginya. Dalam praktik pembelajaran, saya berupaya hadir sebagai fasilitator yang membimbing, memberi teladan, serta mendorong siswa untuk berpikir kritis, kreatif, dan mandiri. Saya percaya bahwa pembelajaran yang bermakna terjadi ketika siswa terlibat aktif dalam proses menemukan pengetahuan, bukan hanya menerima informasi secara pasif.
              </p>
              
              <p>
                Sebagai calon guru Informatika, saya meyakini bahwa pendidikan harus mempersiapkan peserta didik menghadapi tantangan abad ke-21. Oleh karena itu, saya berkomitmen untuk mengintegrasikan keterampilan berpikir komputasional, kolaborasi, komunikasi, kreativitas, dan pemecahan masalah dalam pembelajaran. Saya akan terus belajar, melakukan refleksi, dan mengembangkan kompetensi profesional agar dapat menjadi guru yang adaptif, inovatif, dan mampu memberikan dampak positif bagi perkembangan peserta didik serta lingkungan pendidikan secara luas.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Supporting Interactivity Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Portrait/Illustration of Philosophy */}
          <div className="glass rounded-[2rem] overflow-hidden border border-brand-primary/10 relative shadow-md">
            <div className="h-64 relative">
              <img 
                src="src\img\filosofi.jpeg" 
                alt="CS Lab" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary block mb-0.5">Praktik Nyata</span>
                  <p className="text-sm font-semibold text-white">Guru Informatika Masa Depan berkelas Dunia</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white/60">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Tiga Semboyan KHD yang Dipraktikkan:</h4>
              <div className="space-y-2.5">
                {[
                  { text: "Ing Ngarsa Sung Tulada", detail: "Di depan memberikan keteladan karakter mulia baik sikap maupun tutur kata." },
                  { text: "Ing Madya Mangun Karsa", detail: "Di tengah senantiasa membangun kemauan serta mendampingi perjuangan belajar." },
                  { text: "Tut Wuri Handayani", detail: "Di belakang setia mendorong dorongan moral, kemandirian maupun daya cipta siswa." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-xs leading-relaxed text-slate-600 justify-start items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <p><strong>{item.text}:</strong> {item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Pillars Card Selector */}
          <GlassCard className="p-6 border-slate-100 bg-white/60">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" /> Pilar Kepercayaan Mengajar
            </h4>

            <div className="flex gap-2 mb-4">
              {pillars.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all border ${activePillar === idx ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 border-transparent text-slate-700'}`}
                >
                  Pilar {idx + 1}
                </button>
              ))}
            </div>

            <div className={`p-5 rounded-2xl border ${pillars[activePillar].borderColor} ${pillars[activePillar].bgColor} transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-2.5">
                <div className={`p-2 rounded-xl bg-white shadow-sm shrink-0 ${pillars[activePillar].textColor}`}>
                  {React.createElement(pillars[activePillar].icon, { size: 20 })}
                </div>
                <div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${pillars[activePillar].badgeColor}`}>
                    {pillars[activePillar].subtitle}
                  </span>
                  <h5 className="font-bold text-slate-800 text-sm mt-0.5">{pillars[activePillar].title}</h5>
                </div>
              </div>
              <p className="text-xs text-slate-600 text-justify leading-relaxed">
                {pillars[activePillar].desc}
              </p>
            </div>
          </GlassCard>

        </div>
      </div>
    </PageTransition>
  );
};
