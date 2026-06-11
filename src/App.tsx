import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  User, 
  BookOpen, 
  ClipboardCheck, 
  Target, 
  Users, 
  Sparkles,
  Menu,
  X,
  MapPin,
  FileText,
  Compass,
  Award
} from 'lucide-react';

// Import Pages
import { Home } from './pages/Home';
import { Profil } from './pages/Profil';
import { AnalisisArtefak } from './pages/AnalisisArtefak';
import { Penilaian } from './pages/Penilaian';
import { ModelGuru } from './pages/ModelGuru';
import { Dokumentasi } from './pages/Dokumentasi';
import { Refleksi } from './pages/Refleksi';
import { Filosofi } from './pages/Filosofi';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home', icon: Sparkles },
    { id: 'profil', name: 'Profil', icon: User },
    { id: 'analisis', name: 'Analisis Artefak', icon: BookOpen },
    { id: 'penilaian', name: 'Penilaian', icon: ClipboardCheck },
    { id: 'model', name: 'Model Guru', icon: Target },
    { id: 'dokumentasi', name: 'Dokumentasi', icon: Users },
    { id: 'refleksi', name: 'Refleksi', icon: Compass },
    { id: 'filosofi', name: 'Filosofi Mengajar', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh font-sans text-slate-800 overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto px-6">
          <div className={`glass px-6 py-3 rounded-2xl flex items-center justify-between border-white/40 shadow-xl transition-all ${isScrolled ? 'bg-white/90 shadow-brand-primary/10' : 'bg-white/50'}`}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold shadow-lg shadow-brand-primary/30">IH</div>
              <span className="font-bold text-lg text-slate-800 hidden sm:block">Irfan Hananto</span>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => setActiveTab(link.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                    activeTab === link.id ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </button>
              ))}
            </div>

            <button className="lg:hidden p-2 text-brand-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-6 right-6 lg:hidden z-40"
            >
              <div className="glass p-6 rounded-3xl flex flex-col gap-3 shadow-2xl">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => { setActiveTab(link.id); setMobileMenuOpen(false); }}
                    className={`flex items-center gap-3 p-4 rounded-xl font-bold transition-all ${
                      activeTab === link.id ? 'bg-brand-primary text-white' : 'hover:bg-brand-primary/10 text-slate-700'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Content Area */}
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <Home key="home" onNavigate={setActiveTab} />}
          {activeTab === 'profil' && <Profil key="profil" />}
          {activeTab === 'analisis' && <AnalisisArtefak key="analisis" />}
          {activeTab === 'penilaian' && <Penilaian key="penilaian" />}
          {activeTab === 'model' && <ModelGuru key="model" />}
          {activeTab === 'dokumentasi' && <Dokumentasi key="dokumentasi" />}
          {activeTab === 'refleksi' && <Refleksi key="refleksi" />}
          {activeTab === 'filosofi' && <Filosofi key="filosofi" />}
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <footer className="bg-[#052c29] text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {/* Decorative background glow */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-secondary/10 blur-[100px] rounded-full"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-left">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-xl shadow-brand-primary/20 border border-white/10">IH</div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold font-serif tracking-tight leading-none mb-1">Irfan Hananto</h4>
                  <p className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em]">Informatics Educator</p>
                </div>
              </div>
              <p className="text-slate-300 mb-8 max-w-md text-justify leading-relaxed text-sm">
                Mendedikasikan diri untuk kemajuan pendidikan Indonesia melalui inovasi teknologi dan pendekatan pembelajaran yang berpusat pada siswa di era digital. Terus bertumbuh sebagai agen perubahan yang religius, berintegritas, dan inovatif.
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              <h5 className="font-bold text-brand-primary uppercase text-[10px] tracking-[0.2em] border-l-2 border-brand-primary pl-3">Navigasi</h5>
              <ul className="space-y-4 text-slate-300 text-sm">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button onClick={() => setActiveTab(link.id)} className="hover:text-brand-primary transition-all flex items-center gap-2 group text-left">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform shrink-0"></div>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h5 className="font-bold text-brand-accent uppercase text-[10px] tracking-[0.2em] border-l-2 border-brand-accent pl-3">Hubungi Saya</h5>
              <ul className="space-y-5 text-slate-300 text-sm">
              
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-brand-primary shrink-0">
                    <FileText size={18} />
                  </div>
                  <span className="truncate">irfantonov111@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
            <p className="text-slate-500 text-[10px] md:text-xs tracking-wide text-center md:text-left order-2 md:order-1">
              &copy; {new Date().getFullYear()} Irfan Hananto. All rights reserved.
            </p>
            <div className="flex items-center gap-6 order-1 md:order-2">
              <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/5">PPG Prajabatan UKSW</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
