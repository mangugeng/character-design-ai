# Karakter Designer AI

Aplikasi web untuk mendesain karakter menggunakan AI dengan berbagai parameter kustomisasi.

## Fitur Utama

- 🎨 Kustomisasi Karakter
  - Pose dan Ekspresi
  - Pakaian dan Aksesoris
  - Gaya Rambut
  - Warna dan Material

- 📸 Parameter Kamera
  - Layout dan Komposisi
  - Sudut Kamera
  - Ukuran Lensa
  - Efek Khusus

- 🎭 Gaya Visual
  - Gaya Seni (Realistis, Kartun, Anime, dll)
  - Teknik Rendering
  - Pencahayaan
  - Mood dan Atmosfer

- 🌈 Kustomisasi Warna
  - Palet Warna
  - Kontras
  - Saturasi
  - Efek Warna

## Teknologi yang Digunakan

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel AI SDK
- OpenAI API

## Persyaratan Sistem

- Node.js 18.0.0 atau lebih baru
- npm 9.0.0 atau lebih baru
- API key OpenAI

## Instalasi

1. Clone repository:
```bash
git clone https://github.com/yourusername/karakter-designer-ai.git
cd karakter-designer-ai
```

2. Install dependencies:
```bash
npm install
```

3. Buat file `.env.local` dan tambahkan API key OpenAI:
```
OPENAI_API_KEY=your_api_key_here
```

4. Jalankan development server:
```bash
npm run dev
```

5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Deployment

Aplikasi ini di-deploy menggunakan Vercel:

1. Build aplikasi:
```bash
npm run build
```

2. Deploy ke production:
```bash
vercel --prod
```

## Struktur Proyek

```
src/
├── app/                 # Next.js app directory
├── components/         # React components
│   ├── parameters/    # Parameter components
│   └── ui/           # UI components
├── types/            # TypeScript types
├── translations/     # Translation files
└── utils/           # Utility functions
```

## Penggunaan

1. Pilih parameter karakter yang diinginkan
2. Sesuaikan gaya visual dan pencahayaan
3. Atur parameter kamera
4. Klik "Generate" untuk membuat karakter
5. Download hasil atau generate ulang dengan parameter berbeda

## Kontribusi

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Distribusikan di bawah lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

## Kontak

Sugeng Hariadi - [@mang_ugengs](https://twitter.com/mang_ugengs)

Link Proyek: [https://github.com/yourusername/karakter-designer-ai](https://github.com/yourusername/karakter-designer-ai) 