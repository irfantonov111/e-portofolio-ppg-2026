import React from 'react';
import { BookOpen, AlertCircle, Lightbulb, CheckCircle2, RefreshCcw, FileText } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { PdfPreviewCard } from '../components/PdfPreviewCard';

export const AnalisisArtefak = ({ key }: { key?: React.Key }) => {
  return (
    <PageTransition>
      <SectionHeading title="Analisis Artefak Pembelajaran" subtitle="Refleksi mendalam terhadap produk rencana dan perangkat pembelajaran yang disusun" icon={BookOpen} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Kendala Penyusunan", content: "Menyesuaikan materi teknis dengan perbedaan kecepatan belajar antar siswa serta keterbatasan alat praktik di laboratorium.", icon: AlertCircle, accent: "border-rose-200 bg-rose-50/30", iconColor: "text-rose-500" },
          { title: "Teori Pedagogi", content: "Mengadopsi pendekatan Konstruktivisme dan Model Project-Based Learning (PjBL) untuk mendorong kemandirian berpikir kritis.", icon: Lightbulb, accent: "border-amber-200 bg-amber-50/30", iconColor: "text-amber-500" },
          { title: "Faktor Keberhasilan", content: "Pemanfaatan media interaktif Canva & Quizizz yang meningkatkan antusiasme siswa hingga 85% selama sesi pembelajaran.", icon: CheckCircle2, accent: "border-emerald-200 bg-emerald-50/30", iconColor: "text-emerald-500" },
          { title: "Rencana Perubahan", content: "Modifikasi pada durasi waktu demonstrasi mandiri dan penambahan modul suplemen bagi kelompok dengan literasi rendah.", icon: RefreshCcw, accent: "border-blue-200 bg-blue-50/30", iconColor: "text-blue-500" }
        ].map((item, idx) => (
          <GlassCard key={idx} className={`p-8 rounded-[2rem] border-2 shadow-lg ${item.accent} hover:shadow-2xl transition-all h-full`}>
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6"><item.icon className={`w-6 h-6 ${item.iconColor}`} /></div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h4>
            <p className="text-slate-600 leading-relaxed text-sm">{item.content}</p>
          </GlassCard>
        ))}
      </div>

      <div className="pt-12 mt-12 border-t border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 px-2">
          <FileText className="w-5 h-5 text-indigo-500" /> Preview Artefak Pembelajaran PDF
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <PdfPreviewCard 
            title="LKPD" 
            description="Dokumen rencana dan perangkat pembelajaran yang telah disusun selama siklus PPL." 
            colorClass="border-indigo-100" 
            pdfUrl="src\img\lkpd.pdf" 
          />
          <PdfPreviewCard 
            title="Modul Ajar" 
            description="Rincian modul ajar yang diterapkan pada kelas XI TKJ SMK N 2 Salatiga." 
            colorClass="border-blue-100" 
            pdfUrl="src\img\modul-ajar.pdf" 
          />
          <PdfPreviewCard 
            title="Media Ajar" 
            description="Materi pendukung pembelajaran interaktif yang dikembangkan secara mandiri." 
            colorClass="border-emerald-100" 
            pdfUrl="src\img\media-ajar.pdf" 
          />
          
        </div>
      </div>
      
    </PageTransition>
  );
};
