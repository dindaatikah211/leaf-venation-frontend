import { ScanSearch, BookOpen, Zap } from 'lucide-react'
import { VenationType, FeatureItem, StatItem } from '../types/Landing'

export const VENATION_TYPES: VenationType[] = [
  {
    name: 'Menyirip',
    latin: 'Pinnate',
    desc: 'Urat tengah satu, cabang ke samping seperti sirip ikan.',
    example: 'Mangga, Jambu, Rambutan',
    color: '#2D5016',
  },
  {
    name: 'Menjari',
    latin: 'Palmate',
    desc: 'Beberapa urat utama menyebar dari satu titik seperti jari tangan.',
    example: 'Pepaya, Singkong, Jarak',
    color: '#4A7C2F',
  },
  {
    name: 'Melengkung',
    latin: 'Curved',
    desc: 'Urat melengkung mengikuti tepi daun, bertemu di ujung.',
    example: 'Sirih, Gadung, Eceng Gondok',
    color: '#7BAF5A',
  },
  {
    name: 'Sejajar',
    latin: 'Parallel',
    desc: 'Urat sejajar dari pangkal ke ujung daun.',
    example: 'Jagung, Padi, Rumput',
    color: '#C8A96E',
  },
]

export const FEATURES: FeatureItem[] = [
  {
    icon: ScanSearch,
    title: 'Klasifikasi Otomatis',
    titleEn: 'Auto Classification',
    desc: 'Upload foto daun, AI langsung mengenali jenis tulang daunnya.',
  },
  {
    icon: BookOpen,
    title: 'Informasi Lengkap',
    titleEn: 'Rich Information',
    desc: 'Setiap hasil dilengkapi penjelasan ilmiah tentang jenis tulang daun.',
  },
  {
    icon: Zap,
    title: 'Hasil Instan',
    titleEn: 'Instant Results',
    desc: 'Prediksi dalam hitungan detik menggunakan model deep learning.',
  },
]

export const STATS: StatItem[] = [
  { value: '4',    label: 'Kelas tulang daun' },
  { value: '100+', label: 'Dataset foto daun'  },
  { value: '2',    label: 'Model dibandingkan' },
  { value: '95%+', label: 'Target akurasi'     },
]