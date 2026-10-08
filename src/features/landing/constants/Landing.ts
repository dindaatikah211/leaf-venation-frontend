import { Upload, Zap, BarChart3, BookOpen } from 'lucide-react'
import type { Feature, Stat, VenationType } from '../types/Landing'

export const VENATION_TYPES: VenationType[] = [
  {
    name: 'Menyirip',
    latin: 'Pinnate',
    desc: 'Satu tulang utama di tengah dengan cabang-cabang yang keluar ke samping seperti sirip.',
    example: 'daun mangga, pakis',
    color: '#4A7C2F',
  },
  {
    name: 'Menjari',
    latin: 'Palmate',
    desc: 'Beberapa tulang utama menyebar dari satu titik pangkal daun, seperti jari-jari tangan.',
    example: 'daun pepaya, singkong',
    color: '#C9A227',
  },
  {
    name: 'Melengkung',
    latin: 'Arcuate',
    desc: 'Tulang-tulang daun melengkung mengikuti tepi daun dan bertemu di ujung.',
    example: 'daun sirih',
    color: '#2E8B8B',
  },
  {
    name: 'Sejajar',
    latin: 'Parallel',
    desc: 'Tulang-tulang daun memanjang lurus sejajar dari pangkal hingga ujung daun.',
    example: 'daun padi, rumput',
    color: '#B5651D',
  },
]

export const STATS: Stat[] = [
  { value: '4', label: 'Kelas tulang daun' },
  { value: '747', label: 'Gambar dataset' },
  { value: '2', label: 'Model deep learning' },
  { value: '90.6%', label: 'Akurasi uji terbaik' },
]

export const FEATURES: Feature[] = [
  {
    icon: Upload,
    title: 'Cukup Unggah Foto',
    titleEn: 'Just upload a photo',
    desc: 'Pilih foto daun dari galeri atau kamera, tanpa akun dan tanpa pengaturan rumit.',
  },
  {
    icon: Zap,
    title: 'Hasil Instan',
    titleEn: 'Instant results',
    desc: 'Model langsung menebak jenis tulang daun dalam hitungan detik.',
  },
  {
    icon: BarChart3,
    title: 'Tingkat Keyakinan',
    titleEn: 'Confidence score',
    desc: 'Setiap prediksi disertai persentase confidence supaya kamu tahu seberapa yakin modelnya.',
  },
  {
    icon: BookOpen,
    title: 'Belajar Sambil Mencoba',
    titleEn: 'Learn as you go',
    desc: 'Pelajari ciri tiap jenis tulang daun lewat halaman edukasi yang terhubung langsung.',
  },
]