import React from 'react';
import { motion } from 'motion/react';

export const SectionHeading = ({ title, subtitle, icon: Icon }: { title: string; subtitle: string; icon: any }) => (
  <div className="mb-12 text-center">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-brand-primary/10 shadow-sm"
    >
      <Icon className="w-6 h-6 text-brand-primary" />
    </motion.div>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">{title}</h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);
