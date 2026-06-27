import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Blocks, Lightbulb, Link as LinkIcon, Sprout } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-20">
      <Helmet>
        <title>Digiken - Digital Kenangan | Solusi Web & Aplikasi</title>
        <meta name="description" content="Digiken (Digital Kenangan) membangun aplikasi web, website, alat produktivitas, dan berbagai solusi digital untuk memecahkan masalah nyata." />
      </Helmet>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-24 cursor-default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <div>
            <h2 className="text-primary font-medium tracking-wide text-sm mb-2 uppercase">
              Digital Kenangan
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              DIGIKEN
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-light">
              Solusi digital yang lahir dari masalah nyata.
            </p>
          </div>

          <p className="text-base text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
            Digiken adalah ruang untuk membangun aplikasi, alat produktivitas,
            dan eksperimen digital yang membantu menyelesaikan masalah sehari-hari
            melalui teknologi.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <Link
              to="/proyek"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Jelajahi Proyek
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/tentang"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              Tentang Digiken
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="size-48 md:size-64 rounded-2xl bg-muted border border-border overflow-hidden shadow-sm flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-zinc-900">
             <img src="/profil.jpg" alt="Abdul Wahab" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">Abdul Wahab</h3>
            <p className="text-sm text-muted-foreground">Founder of Digiken</p>
          </div>
        </motion.div>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {[
          { icon: <Blocks size={24} />, title: "5+ Proyek Digital" },
          { icon: <Lightbulb size={24} />, title: "Eksperimen Produk" },
          { icon: <Sprout size={24} />, title: "Berbasis Web & AI" },
          { icon: <LinkIcon size={24} />, title: "Konsultasi Terbuka" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-muted/50 border border-border/50 text-center flex flex-col items-center gap-3 hover:bg-muted transition-colors"
          >
            <div className="text-primary">{stat.icon}</div>
            <p className="text-sm font-medium text-foreground">{stat.title}</p>
          </motion.div>
        ))}
      </section>

      {/* Philosophy Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-6 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Mengapa Digiken Dibangun?
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Setiap aplikasi lahir dari masalah nyata.</p>
          <p>
            Digiken berfokus pada pembuatan solusi digital yang sederhana,
            berguna, dan mudah digunakan. Tujuannya bukan sekadar membuat
            aplikasi, tetapi membantu orang menyelesaikan masalah mereka dengan
            cara yang lebih baik.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
