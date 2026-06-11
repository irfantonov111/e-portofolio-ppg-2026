import React from 'react';
import { motion } from 'motion/react';

export const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string; key?: React.Key }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass rounded-3xl p-6 shadow-sm border border-white/50 ${className}`}
  >
    {children}
  </motion.div>
);
