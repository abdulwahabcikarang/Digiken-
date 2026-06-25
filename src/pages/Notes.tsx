import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Notes() {
  const dummyNotes = [
    {
      title: "Pentingnya Validasi Masalah Sebelum Coding",
      date: "12 Okt 2023",
      excerpt: "Seringkali kita terlalu bersemangat menulis kode sebelum benar-benar mengerti apakah masalah yang dipecahkan itu nyata.",
    },
    {
      title: "Membangun UX yang Intuitive untuk Pengguna Awam",
      date: "28 Sep 2023",
      excerpt: "Desain yang bagus adalah desain yang tidak membuat pengguna berpikir. Pelajaran dari iterasi aplikasi Checklist Berangkat.",
    },
    {
      title: "Eksperimen dengan Framework Baru: Kapan Harus Pindah?",
      date: "05 Sep 2023",
      excerpt: "Shiny object syndrome selalu mengintai developer. Berikut framework evaluasi sebelum memutuskan ganti teknologi.",
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-3xl py-12">
      <Helmet>
        <title>Catatan & Pembelajaran | Digiken</title>
        <meta name="description" content="Baca catatan, eksplorasi teknologi, dan pelajaran yang didapat selama perjalanan membangun produk digital di Digiken." />
      </Helmet>
      <div className="mb-12 cursor-default">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Catatan & Pembelajaran</h1>
        <p className="text-lg text-muted-foreground">
          Tempat berbagi proses membangun produk digital, eksperimen teknologi, dan pelajaran yang didapat selama perjalanan membangun Digiken.
        </p>
      </div>

      <div className="space-y-8">
        {dummyNotes.map((note, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group block cursor-pointer"
          >
            <article className="p-6 rounded-2xl bg-card border border-transparent hover:border-border hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                <Clock size={16} />
                <span>{note.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {note.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {note.excerpt}
              </p>
            </article>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
