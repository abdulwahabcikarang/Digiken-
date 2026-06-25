import { motion } from "motion/react";
import { Coffee, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function Consultation() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-12 md:py-20 text-center">
      <Helmet>
        <title>Konsultasi Solusi Digital | Digiken</title>
        <meta name="description" content="Diskusikan kebutuhan sistem dan solusi digital Anda bersama Digiken. Terbuka untuk konsultasi dan pembuatan aplikasi web." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-3xl p-8 md:p-16 shadow-sm"
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
    </div>
  );
}
