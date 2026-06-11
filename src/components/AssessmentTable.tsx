import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { AssessmentItem } from '../types';

export const AssessmentTable = ({ title, data }: { title: string; data: AssessmentItem[] }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 px-2">
        <Sparkles className="w-5 h-5 text-amber-500" />
        {title}
      </h3>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-3xl border border-white/40 shadow-xl shadow-brand-primary/5">
        <table className="w-full text-left">
          <thead className="bg-brand-primary text-white">
            <tr>
              <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider">No</th>
              <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider">Aspek Penilaian</th>
              <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider">Skor</th>
              <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-primary/5">
            {data.map((item, idx) => (
              <tr key={idx} className="bg-white/60 hover:bg-white/80 transition-colors">
                <td className="px-6 py-4 text-sm text-slate-500 font-medium">{item.no}</td>
                <td className="px-6 py-4 text-sm text-slate-800 font-bold">{item.aspek}</td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary font-bold">{item.skor}</span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 leading-relaxed italic">{item.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {data.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-5 rounded-2xl relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Aspek {item.no}</span>
              <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Skor: {item.skor}</span>
            </div>
            <h4 className="font-bold text-slate-800 mb-2 leading-snug">{item.aspek}</h4>
            <div className="p-3 bg-white/20 rounded-xl border border-white/20 italic text-sm text-slate-600">
              <span className="font-semibold block mb-1">Keterangan:</span>
              "{item.keterangan}"
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
