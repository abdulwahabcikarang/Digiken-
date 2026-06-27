import { Book, CheckSquare, Calendar, Wrench, Wallet, Construction, Library } from "lucide-react";
import React from "react";

export interface ProjectData {
  id: string;
  title: string;
  iconName: string;
  problem: string;
  solution: string;
  tags: string[];
  mockupImage?: string;
  demoLink?: string;
  features?: { title: string; description: string }[];
  about?: string;
  screenshots?: string[];
  results?: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: "bukuku",
    title: "BukuKu - Pencatat & Manajemen Koleksi Buku Pintar",
    iconName: "Library",
    problem: "Banyak kolektor buku dan penikmat literatur sering kali kesulitan dalam melacak koleksi perpustakaan pribadi mereka secara terstruktur, termasuk dalam memantau nilai aset finansial dari buku-buku yang telah mereka miliki. Pencatatan manual menggunakan spreadsheet atau buku catatan terbukti tidak efisien, rentan hilang, dan sulit memberikan gambaran komprehensif mengenai total pengeluaran investasi koleksi tersebut. Selain itu, proses memasukkan metadata buku seperti ISBN, judul, dan penulis secara manual sangat memakan waktu dan berisiko memunculkan kesalahan pencatatan.",
    solution: "BukuKu hadir sebagai asisten digital pintar yang mentransformasi cara Anda mengelola perpustakaan pribadi melalui fitur pencatatan dan pelacakan koleksi yang canggih. Aplikasi ini memanfaatkan pemindai barcode cerdas berbasis kamera dan integrasi langsung dengan Google Books API untuk mengidentifikasi serta menambahkan detail spesifik buku secara instan hanya dalam hitungan detik. Lebih dari sekadar manajemen inventaris, BukuKu juga dilengkapi dengan fitur pelacakan nilai investasi yang secara otomatis mengalkulasi dan menyajikan total nilai aset literasi Anda dalam satu dasbor yang intuitif.",
    about: "BukuKu adalah aplikasi manajemen perpustakaan pribadi cerdas yang dirancang untuk membantu kolektor buku dan penikmat literatur dalam melacak koleksi mereka secara terstruktur dan efisien. Aplikasi ini dibangun dengan mengutamakan kemudahan pengguna melalui fitur seperti pemindai barcode dan integrasi API untuk auto-fill data buku.",
    tags: ["React", "Tailwind CSS", "Firebase", "Google Books API", "Smart Barcode Scanner", "Progressive Web App (PWA)"],
    mockupImage: "/bukuku-mockup.jpg",
    demoLink: "https://buku-kenangan-digital.vercel.app/",
    screenshots: [
      "/bukuku-mockup.jpg"
    ],
    results: [
      "Meningkatkan efisiensi pendataan buku hingga 10x lebih cepat menggunakan barcode scanner dibandingkan dengan input manual.",
      "Memberikan visibilitas langsung terhadap total nilai aset koleksi buku pengguna secara real-time.",
      "Menyediakan pengalaman pengguna yang mulus layaknya aplikasi native dengan dukungan PWA, bisa diakses offline maupun online."
    ],
    features: [
      { title: "Pencatatan Data Buku", description: "Menyimpan informasi detail buku seperti judul, penulis, penerbit, tahun terbit, jumlah halaman, dan harga." },
      { title: "Scan Barcode ISBN", description: "Fitur pemindai barcode menggunakan kamera perangkat (mendukung mode otomatis dan tangkapan manual) untuk mendeteksi ISBN buku." },
      { title: "Pencarian Cerdas (Auto-fill)", description: "Terintegrasi dengan Google Books API untuk mengisi data buku secara otomatis (termasuk gambar cover, deskripsi, dan penulis) hanya dengan memasukkan judul atau memindai ISBN." },
      { title: "Pelacakan Progres Membaca", description: "Mencatat halaman terakhir yang dibaca dan menampilkan persentase progres membaca secara visual." },
      { title: "Manajemen Status Baca", description: "Mengkategorikan koleksi buku ke dalam status \"Belum Dibaca\", \"Sedang Dibaca\", dan \"Selesai\"." },
      { title: "Sistem Rating", description: "Fitur untuk memberikan penilaian bintang 1 hingga 5 pada buku yang sudah selesai dibaca." },
      { title: "Kalkulator Nilai Koleksi (Investasi Buku)", description: "Menghitung dan menampilkan total nilai uang (harga) dari keseluruhan buku yang ada di dalam koleksi pengguna." },
      { title: "Kategori & Tag Kustom", description: "Pengguna dapat menambahkan tag kustom untuk mengelompokkan dan memfilter buku dengan mudah." },
      { title: "Penyimpanan Cloud & Login Google", description: "Sistem autentikasi menggunakan akun Google dan penyimpanan database berbasis cloud (Firebase) agar data koleksi tersimpan aman dan tidak hilang." },
      { title: "Kustomisasi Tema", description: "Pilihan berbagai tema warna tampilan (UI) aplikasi yang bisa diubah sesuai selera pengguna." },
      { title: "Dukungan PWA (Progressive Web App)", description: "Aplikasi dapat diinstal di perangkat (mobile/desktop) untuk pengalaman seperti aplikasi native dan akses yang lebih cepat." }
    ]
  },
  {
    id: "motor-care",
    title: "Motor Care - Buku Servis Digital & Mekanik AI",
    iconName: "Wrench",
    problem: "Banyak pemilik kendaraan roda dua seringkali lupa jadwal servis berkala atau tidak tahu kapan batas maksimal pemakaian sebuah sparepart (seperti oli gardan atau filter udara). Selain itu, ketika motor mengalami masalah di jalan, awam sering merasa panik atau takut \"dibohongi\" oleh bengkel nakal karena tidak memahami penyebab kerusakan dan estimasi biayanya.",
    solution: "Motor Care hadir sebagai buku riwayat servis digital sekaligus \"montir saku\". Aplikasi ini secara otomatis memberikan peringatan kritis jika ada komponen yang sudah habis masa pakainya. Jika motor dirasa bermasalah, pengguna cukup menceritakan gejalanya kepada AI, dan aplikasi akan langsung memberikan diagnosa awal serta estimasi perbaikannya sebelum pergi ke bengkel.",
    about: "Motor Care adalah aplikasi Web App (PWA) cerdas yang dirancang untuk membantu pemilik sepeda motor memantau jadwal perawatan, melacak kondisi keausan sparepart, dan mengelola pengeluaran servis. Aplikasi ini dilengkapi dengan asisten \"Mekanik AI\" yang mampu mendiagnosis kerusakan motor berdasarkan keluhan pengguna secara real-time.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js/Express", "Local Storage", "PWA", "Gemini AI API"],
    mockupImage: "/motorcare.jpg",
    demoLink: "https://motor-care.digiken.web.id/",
    screenshots: [
      "/motorcaress (1).jpg",
      "/motorcaress (2).jpg",
      "/motorcaress (3).jpg",
      "/motorcaress (4).jpg",
      "/motorcaress (5).jpg",
      "/motorcaress (6).jpg",
      "/motorcaress (7).jpg"
    ],
    results: [
      "Membantu rider menghemat pengeluaran darurat dengan mencegah kerusakan mesin parah akibat telat ganti oli atau sparepart kritis.",
      "Menghadirkan ketenangan berkendara (peace of mind) karena seluruh histori servis, pengeluaran keuangan, dan prediksi umur komponen tercatat rapi di satu tempat.",
      "Menciptakan aplikasi web yang responsif, mulus, dan fungsional setara aplikasi mobile native tanpa harus melalui proses publikasi PlayStore."
    ],
    features: [
      { title: "Diagnosis Mekanik AI (Gemini)", description: "Asisten pintar yang dapat menganalisis gejala kerusakan motor (seperti suara kasar atau tarikan berat) dan memberikan saran perbaikan layaknya montir profesional." },
      { title: "Monitoring Kesehatan Sparepart", description: "Indikator visual (progress bar) yang melacak umur setiap komponen (Oli, Busi, Kampas Rem) berdasarkan perhitungan Kilometer (KM) aktual secara presisi." },
      { title: "Kalkulasi & Estimasi Biaya (Finansial)", description: "Memprediksi komponen apa saja yang harus diganti pada bulan berikutnya beserta estimasi total biaya berdasarkan intensitas berkendara harian pengguna." },
      { title: "Offline-First & PWA (Installable)", description: "Aplikasi super ringan yang dapat diinstal langsung ke layar utama HP (layaknya aplikasi native) tanpa memakan memori penyimpanan, serta dilengkapi fitur Backup & Restore data secara lokal (Impor/Ekspor JSON)." },
      { title: "Sistem Keamanan Akses (Premium)", description: "Terproteksi dengan form verifikasi License Key premium eksklusif bagi pengguna berbayar." }
    ]
  },
  {
    id: "event-hub",
    title: "Event Hub",
    iconName: "Calendar",
    problem: "Komunitas lokal tidak memiliki wadah terpusat untuk membagikan jadwal acara.",
    solution: "Platform berbagi acara komunitas dengan fitur RSVP dan pengingat jadwal.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    mockupImage: "https://placehold.co/1200x800/e2e8f0/475569?text=Mockup+Event+Hub"
  },
  {
    id: "daily-expense",
    title: "Daily Expense Tracker",
    iconName: "Wallet",
    problem: "Pencatatan pengeluaran harian sering terlupakan karena aplikasi yang rumit.",
    solution: "Aplikasi pencatat pengeluaran minimalis dengan input sekali klik dan grafik sederhana.",
    tags: ["Vue", "Chart.js", "Firebase"],
    mockupImage: "https://placehold.co/1200x800/e2e8f0/475569?text=Mockup+Expense+Tracker"
  },
  {
    id: "service-desk",
    title: "IT Service Desk Minimalist",
    iconName: "Wrench",
    problem: "Karyawan kesulitan melacak status tiket bantuan IT mereka.",
    solution: "Sistem tiket bantuan sederhana dengan notifikasi email dan pelacakan status transparan.",
    tags: ["Express", "React", "MongoDB"],
    mockupImage: "https://placehold.co/1200x800/e2e8f0/475569?text=Mockup+Service+Desk"
  },
  {
    id: "coming-soon",
    title: "Proyek Mendatang",
    iconName: "Construction",
    problem: "Terus mengeksplorasi masalah baru untuk dipecahkan.",
    solution: "Menyiapkan berbagai solusi digital inovatif lainnya.",
    tags: ["Research", "Development", "Design"],
  }
];
