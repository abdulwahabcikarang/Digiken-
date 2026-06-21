import { Link } from "react-router-dom";
import { Command } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-20">
      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
              <img src="/logo.png" alt="DIGIKEN Logo" className="size-8 object-contain rounded-full shadow-sm" />
              <span>DIGIKEN</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Solusi digital yang lahir dari masalah nyata.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/proyek" className="hover:text-primary transition-colors">Proyek</Link></li>
              <li><Link to="/catatan" className="hover:text-primary transition-colors">Catatan</Link></li>
              <li><Link to="/tentang" className="hover:text-primary transition-colors">Tentang</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Terhubung</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/konsultasi" className="hover:text-primary transition-colors">Konsultasi Solusi Digital</Link></li>
              <li><Link to="/kontak" className="hover:text-primary transition-colors">Kontak</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Digiken. All rights reserved.</p>
          <p className="text-center md:text-right max-w-sm">
            Dibangun dengan semangat belajar, bereksperimen, dan menciptakan solusi yang bermanfaat.
          </p>
        </div>
      </div>
    </footer>
  );
}
