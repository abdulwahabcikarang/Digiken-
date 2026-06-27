import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { PROJECTS } from "../data/projects";

export function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/proyek" replace />;
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12">
      <Helmet>
        <title>{project.title} | Portofolio Digiken</title>
        <meta name="description" content={project.solution} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/proyek"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Kembali ke Proyek
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* 1. Hero (Judul + Mockup) */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-center md:text-left">
          {project.title}
        </h1>

        {project.mockupImage && (
          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-muted/30 mb-16 border border-border shadow-sm">
            <img
              src={project.mockupImage}
              alt={`Mockup ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-16">
          {/* 2. Tentang Project & 3. Demo Link */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Tentang Project</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {project.about || project.solution}
              </p>
            </div>
            {project.demoLink && (
              <div className="flex flex-col justify-start md:items-end">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-sm w-full md:w-auto"
                >
                  <ExternalLink size={20} />
                  Kunjungi Aplikasi
                </a>
              </div>
            )}
          </section>

          {/* 4. Screenshot / Mockup */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Screenshot / Mockup</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm">
                    <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Fitur Utama & 6. Teknologi yang Digunakan */}
          <section className="grid md:grid-cols-2 gap-12">
            {project.features && project.features.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Fitur Utama</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <span className="font-semibold block text-foreground mb-1">
                          {feature.title}
                        </span>
                        <span className="text-muted-foreground leading-relaxed text-sm">
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Teknologi yang Digunakan</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-xl border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Tantangan & Solusi */}
          <section className="bg-muted/30 p-8 rounded-3xl border border-border">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Tantangan & Solusi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-destructive">Tantangan</h3>
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  {project.problem}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary">Solusi</h3>
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  {project.solution}
                </p>
              </div>
            </div>
          </section>

          {/* 8. Hasil / Pencapaian */}
          {project.results && project.results.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Hasil / Pencapaian</h2>
              <div className="grid gap-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="bg-primary/10 text-primary p-2 rounded-full shrink-0 mt-1">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-foreground/90 leading-relaxed">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </motion.div>
    </div>
  );
}
