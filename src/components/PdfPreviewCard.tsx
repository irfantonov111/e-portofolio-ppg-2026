import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const PdfPreviewCard = ({ title, description, colorClass, pdfUrl }: { title: string; description: string; colorClass: string; pdfUrl: string }) => {
  return (
    <GlassCard className={`group relative overflow-hidden border-2 ${colorClass} bg-white/40 flex flex-col h-full`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-2xl bg-white shadow-sm shrink-0">
          <FileText className="w-6 h-6 text-slate-700" />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{title}</h4>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
      
      <div className="flex-1 min-h-[300px] mb-4 overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-800 relative">
        <iframe 
          src={pdfUrl} 
          className="w-full h-full absolute inset-0 border-none bg-slate-100"
          title={`Preview ${title}`}
        />
      </div>

      <a 
        href={pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 bg-slate-800 text-white rounded-xl shadow-lg hover:bg-slate-700 transition-all no-underline"
      >
        <ExternalLink className="w-3.5 h-3.5" /> Buka Dokumen Penuh
      </a>
    </GlassCard>
  );
};
