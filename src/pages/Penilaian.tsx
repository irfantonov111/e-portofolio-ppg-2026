import React from 'react';
import { ClipboardCheck, FileText } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { AssessmentTable } from '../components/AssessmentTable';
import { PdfPreviewCard } from '../components/PdfPreviewCard';
import { PageTransition } from '../components/PageTransition';
import { AssessmentItem } from '../types';

export const Penilaian = ({ key }: { key?: React.Key }) => {
  const assessmentLampiran7: AssessmentItem[] = [
    { no: 1, aspek: "Kejelasan tujuan pembelajaran", skor: 90, keterangan: "Tujuan sangat jelas dan mencakup ranah kognitif, afektif, dan psikomotor." },
    { no: 2, aspek: "Pemilihan materi ajar", skor: 90, keterangan: "Materi relevan dengan kebutuhan industri di SMK N 2 Salatiga." },
    { no: 3, aspek: "Strategi pembelajaran", skor: 92, keterangan: "Pendekatan student-centered sangat efektif meningkatkan keaktifan siswa." },
    { no: 4, aspek: "Pemanfaatan TIK", skor: 90, keterangan: "Penggunaan media interaktif dinilai sangat inovatif." }
  ];

  const assessmentLampiran8: AssessmentItem[] = [
    { no: 1, aspek: "Keterampilan membuka pelajaran", skor: 88, keterangan: "Apersepsi yang diberikan menarik minat siswa sejak awal." },
    { no: 2, aspek: "Penguasaan materi pembelajaran", skor: 90, keterangan: "Materi disampaikan dengan sangat fasih dan mudah dipahami." },
    { no: 3, aspek: "Pengelolaan kelas", skor: 90, keterangan: "Interaksi dengan siswa terjalin sangat kondusif." },
    { no: 4, aspek: "Keterampilan menutup pelajaran", skor: 90, keterangan: "Kesimpulan dan refleksi ditarik secara komprehensif." }
  ];

  return (
    <PageTransition>
      <SectionHeading title="Instrumen Penilaian" subtitle="Evaluasi komprehensif dari guru pamong selama 3 siklus praktik mengajar" icon={ClipboardCheck} />
      <div className="space-y-12">
        <AssessmentTable title="Lampiran 7: Penyusunan Perangkat Pembelajaran" data={assessmentLampiran7} />
        <AssessmentTable title="Lampiran 8: Praktik Mengajar" data={assessmentLampiran8} />
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2 px-2"><FileText className="w-5 h-5 text-indigo-500" /> Arsip Dokumen Penilaian PDF</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <PdfPreviewCard title="Lampiran 7" description="Instrumen Penilaian Penyusunan RPP" colorClass="border-blue-100" pdfUrl="src\img\lampiran-7.pdf" />
            <PdfPreviewCard title="Lampiran 8" description="Instrumen Penilaian Praktik Mengajar" colorClass="border-emerald-100" pdfUrl="src\img\lampiran-8.pdf" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
