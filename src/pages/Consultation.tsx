import { motion } from "motion/react";
import { Coffee, MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function Consultation() {
  const faqs = [
    {
      question: "Apa itu Digiken?",
      answer: "Digiken (Digital Kenangan) adalah penyedia layanan konsultasi teknologi, pembuatan website, dan pengembangan aplikasi web (web apps) yang didirikan oleh Abdul Wahab. Kami berfokus pada solusi digital yang efisien dan menyederhanakan operasional."
    },
    {
      question: "Layanan apa saja yang disediakan oleh Digiken?",
      answer: "Digiken melayani pembuatan landing page, website perusahaan, aplikasi produktivitas internal, integrasi database, perancangan antarmuka (UI/UX), dan konsultasi sistem IT untuk bisnis."
    },
    {
      question: "Bagaimana tahapan konsultasi dan pembuatan aplikasi di Digiken?",
      answer: "Tahapan dimulai dari diskusi kebutuhan (requirements gathering), perancangan arsitektur dan antarmuka, tahap pengembangan (development), hingga proses peluncuran (deployment) dan serah terima."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="container mx-auto px-4 max-w-3xl py-12 md:py-20">
      <Helmet>
        <title>Konsultasi Solusi Digital | Digiken</title>
        <meta name="description" content="Diskusikan kebutuhan sistem dan solusi digital Anda bersama Digiken. Terbuka untuk konsultasi dan pembuatan aplikasi web." />
        <meta property="og:title" content="Konsultasi Solusi Digital | Digiken" />
        <meta property="og:description" content="Diskusikan kebutuhan sistem dan solusi digital Anda bersama Digiken. Terbuka untuk konsultasi dan pembuatan aplikasi web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={`${window.location.origin}/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Konsultasi Solusi Digital | Digiken" />
        <meta name="twitter:description" content="Diskusikan kebutuhan sistem dan solusi digital Anda bersama Digiken. Terbuka untuk konsultasi dan pembuatan aplikasi web." />
        <meta name="twitter:image" content={`${window.location.origin}/logo.png`} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm text-center mb-16"
      >
        <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary mb-6">
          <Coffee size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Konsultasi Solusi Digital
        </h1>
        
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          <p>
            Saya senang bertukar ide dan berdiskusi tentang berbagai tantangan 
            yang dapat diselesaikan melalui teknologi.
          </p>
          <p>
            Jika Anda memiliki ide produk, kebutuhan sistem sederhana, atau ingin 
            membangun solusi digital tertentu, saya terbuka untuk berdiskusi 
            dan mengeksplorasi kemungkinan konsultasi dan kolaborasi.
          </p>
        </div>

        <Link
          to="/kontak"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle size={20} />
          Mulai Percakapan
        </Link>
      </motion.div>

      {/* FAQ Section untuk AEO/GEO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="text-primary" size={28} />
          <h2 className="text-2xl font-bold tracking-tight">Tanya Jawab (FAQ)</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
