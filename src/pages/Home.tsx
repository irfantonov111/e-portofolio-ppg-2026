import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Target } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { PageTransition } from '../components/PageTransition';

interface HomeProps {
  onNavigate: (tab: string) => void;
  key?: React.Key;
}

export const Home = ({ onNavigate }: HomeProps) => {
  return (
    <PageTransition>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold mb-6 tracking-widest uppercase">
            <Sparkles className="w-3 h-3" /> E-Portfolio Digital
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-[1.1] mb-6 text-slate-800">
            Membangun Karakter <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary italic">
              Guru Profesional.
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-justify">
            Refleksi awal sebagai fondasi dasar pengembangan karakter mahasiswa 
            PPG Prajabatan di Universitas Kristen Satya Wacana.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => onNavigate('profil')} className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group">
              Eksplorasi Profil <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => onNavigate('analisis')} className="px-8 py-4 bg-white text-brand-primary rounded-2xl font-bold border border-brand-primary/20 hover:bg-brand-primary/5 transition-all">
              Analisis Artefak
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full -z-10"></div>
          <GlassCard className="aspect-square max-w-md mx-auto p-4 rotate-3 hover:rotate-0 transition-transform duration-500 border-brand-primary/20">
            <img src="src\img\foto-formal.jpg" alt="Profile" className="w-full h-full object-cover rounded-2xl shadow-inner mb-4" />
            <div className="flex justify-between items-center px-2">
              <div>
                <h4 className="font-bold text-slate-800">Irfan Hananto</h4>
                <p className="text-xs text-brand-primary uppercase tracking-widest font-bold">Informatics Educator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center"><Target size={20} className="text-brand-primary" /></div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageTransition>
  );
};
