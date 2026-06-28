import { motion } from "motion/react";
import { ArrowRight, Book, CheckSquare, Calendar, Wrench, Wallet, Construction, Library, Factory } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

const iconMap: Record<string, React.ReactNode> = {
  Library: <Library size={32} />,
  CheckSquare: <CheckSquare size={32} />,
  Calendar: <Calendar size={32} />,
  Wallet: <Wallet size={32} />,
  Wrench: <Wrench size={32} />,
  Construction: <Construction size={32} />,
  Book: <Book size={32} />,
  Factory: <Factory size={32} />
};

export function Projects() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <Helmet>
        <title>Proyek Digital | Digiken</title>
        <meta name="description" content="Eksplorasi portofolio dan proyek digital dari Digiken. Aplikasi web, alat produktivitas, dan solusi teknologi yang dibangun." />
        <meta property="og:title" content="Proyek Digital | Digiken" />
        <meta property="og:description" content="Eksplorasi portofolio dan proyek digital dari Digiken. Aplikasi web, alat produktivitas, dan solusi teknologi yang dibangun." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={`${window.location.origin}/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Proyek Digital | Digiken" />
        <meta name="twitter:description" content="Eksplorasi portofolio dan proyek digital dari Digiken. Aplikasi web, alat produktivitas, dan solusi teknologi yang dibangun." />
        <meta name="twitter:image" content={`${window.location.origin}/logo.png`} />
      </Helmet>
      <div className="mb-12 cursor-default">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Proyek Digital</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Eksplorasi solusi digital yang dibangun untuk memecahkan masalah sehari-hari dengan antarmuka yang bersih dan mudah digunakan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => {
          if (project.id === "coming-soon") {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center text-center p-8 bg-muted/30 border border-dashed border-border rounded-2xl min-h-[400px]"
              >
                <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-4 text-muted-foreground text-opacity-50">
                  {iconMap[project.iconName]}
                </div>
                <h3 className="font-medium text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">Sedang dalam tahap eksplorasi dan riset.</p>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-all hover:border-primary/30 h-full"
            >
              {project.mockupImage ? (
                <div className="bg-muted/30 border-b border-border aspect-video overflow-hidden">
                  <img src={project.mockupImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="p-6 bg-muted/30 border-b border-border text-primary flex items-center justify-center aspect-video group-hover:bg-primary/5 transition-colors">
                  {iconMap[project.iconName]}
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">{project.title}</h3>
                <div className="space-y-3 mb-6 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Masalah</p>
                    <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">{project.problem}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <Link to={`/proyek/${project.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto w-fit">
                  Lihat Detail <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
