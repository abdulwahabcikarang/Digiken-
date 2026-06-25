import { motion } from "motion/react";
import { ExternalLink, Github, Instagram, Link as LinkIcon, Mail, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Contact() {
  const CONTACT_LINKS = [
    {
      name: "Lynk.id",
      description: "Platform utama & donasi",
      icon: <LinkIcon size={24} />,
      url: "#",
      primary: true,
    },
    {
      name: "WhatsApp",
      description: "Diskusi cepat",
      icon: <MessageCircle size={24} />,
      url: "#",
    },
    {
      name: "Email",
      description: "abdulwahabcikarang@gmail.com",
      icon: <Mail size={24} />,
      url: "mailto:abdulwahabcikarang@gmail.com",
    },
    {
      name: "GitHub",
      description: "Kode & kontribusi terbuka",
      icon: <Github size={24} />,
      url: "#",
    },
    {
      name: "Instagram",
      description: "Keseharian & update ringkas",
      icon: <Instagram size={24} />,
      url: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-2xl py-12">
      <Helmet>
        <title>Kontak | Digiken</title>
        <meta name="description" content="Terhubung dengan Digiken. Hubungi via Email, WhatsApp, atau temukan kami di media sosial." />
      </Helmet>
      <div className="text-center mb-12 cursor-default">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Terhubung</h1>
        <p className="text-lg text-muted-foreground">
          Pilih jalur komunikasi yang paling nyaman bagi Anda.
        </p>
      </div>

      <div className="space-y-4">
        {CONTACT_LINKS.map((link, idx) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center p-4 sm:p-6 rounded-2xl border transition-all ${
                link.primary 
                  ? "bg-primary/5 border-primary/20 hover:border-primary/50 hover:bg-primary/10" 
                  : "bg-card border-border hover:border-primary/30 hover:bg-muted/50"
              }`}
            >
              <div className={`p-4 rounded-xl mr-4 sm:mr-6 shrink-0 transition-colors ${
                link.primary ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
              }`}>
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {link.description}
                </p>
              </div>
              <div className="text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all pr-2">
                <ExternalLink size={20} />
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
