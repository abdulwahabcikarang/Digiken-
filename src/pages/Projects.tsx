import { motion } from "motion/react";
import { ArrowRight, Book, CheckSquare, Calendar, Wrench, Wallet, Construction } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Buku Kenangan Digital",
    icon: <Book size={32} />,
    problem: "Sulit mengelola dan mencari koleksi buku pribadi.",
    solution: "Aplikasi katalog buku digital untuk pencatatan, pencarian, dan pengarsipan koleksi buku.",
    tags: ["React", "Tailwind", "Local Storage"],
  },
  {
    id: 2,
    title: "Checklist Berangkat",
    icon: <CheckSquare size={32} />,
    problem: "Sering lupa membawa barang penting saat bepergian.",
    solution: "Checklist perjalanan dengan template dan itinerary yang dapat digunakan berulang kali.",
    tags: ["PWA", "React", "State Management"],
  },
  {
    id: 3,
    title: "Penyelamat Anggaran",
    icon: <Wallet size={32} />,
    problem: "Sulit mengontrol pengeluaran harian.",
    solution: "Aplikasi pencatatan dan pemantauan keuangan sederhana.",
    tags: ["Dashboard", "Charts", "Database"],
  },
  {
    id: 4,
    title: "Motor Care",
    icon: <Wrench size={32} />,
    problem: "Sering lupa jadwal servis dan perawatan kendaraan.",
    solution: "Aplikasi pengingat perawatan kendaraan pribadi.",
    tags: ["Notifications", "CRUD", "Mobile-first"],
  },
  {
    id: 5,
    title: "Digital Kalender",
    icon: <Calendar size={32} />,
    problem: "Aktivitas dan rencana mudah terlupakan.",
    solution: "Kalender digital untuk membantu mengelola kegiatan harian.",
    tags: ["Scheduling", "UI/UX", "Interactive"],
  },
];

export function Projects() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <div className="mb-12 cursor-default">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Proyek Digital</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Eksplorasi solusi digital yang dibangun untuk memecahkan masalah sehari-hari dengan antarmuka yang bersih dan mudah digunakan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-all hover:border-primary/30"
          >
            <div className="p-6 bg-muted/30 border-b border-border text-primary flex items-center justify-center aspect-video group-hover:bg-primary/5 transition-colors">
              {project.icon}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <div className="space-y-3 mb-6 flex-1">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Masalah</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Solusi</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto">
                Lihat Detail <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: PROJECTS.length * 0.1 }}
          className="flex flex-col items-center justify-center text-center p-8 bg-muted/30 border border-dashed border-border rounded-2xl min-h-[400px]"
        >
          <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-4 text-muted-foreground text-opacity-50">
            <Construction size={24} />
          </div>
          <h3 className="font-medium text-foreground mb-2">Proyek Berikutnya</h3>
          <p className="text-sm text-muted-foreground max-w-[200px]">Sedang dalam tahap pengembangan...</p>
        </motion.div>
      </div>
    </div>
  );
}
