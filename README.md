# VenaLeaf Frontend

Antarmuka web untuk mengidentifikasi jenis tulang daun dengan kecerdasan buatan: menyirip (pinnate), menjari (palmate), melengkung (arcuate), dan sejajar (parallel). Pengguna mengunggah foto daun, lalu hasilnya ditampilkan beserta tingkat keyakinan model.

Demo: [vena-leaf.vercel.app](https://vena-leaf.vercel.app)

## Teknologi

Next.js (App Router), React, TypeScript, Tailwind CSS, dan shadcn/ui.

## Halaman

| Route              | Isi                                                      |
| ------------------ | -------------------------------------------------------- |
| `/`                | Landing page                                             |
| `/classify`        | Unggah foto daun dan jalankan klasifikasi                |
| `/classify/result` | Hasil klasifikasi                                        |
| `/learn`           | Materi tentang jenis-jenis tulang daun                   |

## Struktur Proyek

```text
src/
├── app/            routing dan layout Next.js
├── features/
│   ├── landing/    Hero, VenationGrid, HowItWorks, FeaturesSection, StatsSection, CTASection
│   ├── classify/   components, constants, hooks, result, services, types
│   └── learn/
└── shared/         components (commons, ui), constants, hooks, lib, types
```

Kode dikelompokkan per fitur. Komponen, hook, dan tipe yang dipakai lintas fitur ada di `shared`.

## Menjalankan Lokal

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Di Windows (CMD), gunakan `copy .env.example .env`. Lalu isi `NEXT_PUBLIC_API_URL` di `.env` dengan alamat backend, misalnya `http://localhost:5000`. File `.env.example` berisi:

```dotenv
NEXT_PUBLIC_API_URL=
```

Aplikasi berjalan di `http://localhost:3000`. Backend harus berjalan agar klasifikasi bisa dipakai. Lihat repo `leaf-venation-backend`.

## Variabel Lingkungan

| Variabel              | Keterangan                                                        |
| --------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Alamat backend, tanpa `/` di akhir. Dibaca saat build.            |

## Deploy

Di-deploy ke Vercel. Isi `NEXT_PUBLIC_API_URL` dengan domain backend di **Settings, Environment Variables** (tipe Config), lalu **Redeploy** setiap kali nilainya berubah karena variabel ini ditanam saat build. Domain frontend juga harus terdaftar di `CORS_ORIGINS` pada backend.

```bash
pnpm build
pnpm start
```