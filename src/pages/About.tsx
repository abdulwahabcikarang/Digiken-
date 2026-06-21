import { motion } from "motion/react";

export function About() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <section className="cursor-default">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Tentang Digiken</h1>
          <div className="prose prose-neutral prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Digiken adalah rumah bagi berbagai proyek digital yang lahir dari kebutuhan dan masalah nyata. 
            </p>
            <p>
              Setiap produk dibangun dengan tujuan memberikan solusi yang sederhana, praktis, dan mudah digunakan. 
              Fokus utamanya bukan pada kecanggihan teknologi semata, melainkan pada kemudahan penggunaan dan manfaat 
              langsung yang dirasakan oleh penggunanya.
            </p>
          </div>
        </section>

        <hr className="border-border" />

        <section className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 dark:from-green-950 dark:to-zinc-900 border border-border flex items-center justify-center text-5xl shadow-sm overflow-hidden">
            <img src="/Profil.png" alt="Abdul Wahab" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <h2 className="text-2xl font-semibold">Abdul Wahab</h2>
              <p className="text-primary font-medium">Founder & Builder</p>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-justify md:text-left">
              <p>
                Halo, saya Abdul Wahab, pendiri Digiken. Lulusan Teknik Informatika tahun 2024 dengan 
                pengalaman kerja di berbagai perusahaan swasta sejak 2014. Perjalanan tersebut 
                memberikan saya sudut pandang yang unik dalam memahami proses bisnis, tantangan operasional, 
                dan kebutuhan pengguna di dunia nyata.
              </p>
              <p>
                Melalui Digiken, saya membangun aplikasi web, website, alat produktivitas, dan berbagai solusi 
                digital yang berangkat dari permasalahan sehari-hari. Saya percaya bahwa teknologi seharusnya 
                membantu menyederhanakan pekerjaan, meningkatkan efisiensi, dan memberikan manfaat yang nyata 
                bagi penggunanya.
              </p>
              <p>
                Selain pengembangan perangkat lunak, saya juga memiliki ketertarikan pada bidang data dan 
                analisis. Untuk memperdalam pemahaman tersebut, saya mengikuti program bootcamp Data Analyst 
                pada tahun 2024. Pengalaman ini membantu saya melihat bahwa di balik setiap aplikasi yang baik 
                terdapat data yang dapat diolah menjadi informasi berharga untuk mendukung pengambilan keputusan 
                yang lebih tepat.
              </p>
              <p>
                Perpaduan antara pengalaman kerja, pengembangan aplikasi, dan pemahaman terhadap data 
                membantu saya merancang solusi yang tidak hanya berfungsi dengan baik, tetapi juga relevan 
                dengan kebutuhan pengguna dan tujuan bisnis.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
