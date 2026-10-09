import type { ClassifyErrorKind, VenationClass } from '../types/Classify'

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000'

export const MAX_FILE_SIZE = 5 * 1024 * 1024
export const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
export const RESULT_STORAGE_KEY = 'leaf-venation:result'
export const LOW_CONFIDENCE_THRESHOLD = 0.6

export const CLASS_NAMES: VenationClass[] = ['arcuate', 'palmate', 'parallel', 'pinnate']

export const CLASS_META: Record<VenationClass, { name: string; latin: string; color: string }> = {
  arcuate: { name: 'Melengkung', latin: 'Arcuate', color: '#2E8B8B' },
  palmate: { name: 'Menjari', latin: 'Palmate', color: '#C9A227' },
  parallel: { name: 'Sejajar', latin: 'Parallel', color: '#B5651D' },
  pinnate: { name: 'Menyirip', latin: 'Pinnate', color: '#4A7C2F' },
}

export const TIPS = [
  'Foto satu daun saja dengan jelas',
  'Gunakan background polos dan terang',
  'Hindari bayangan dan warna filter',
]

export const ERROR_COPY: Record<ClassifyErrorKind, { title: string; hint?: string }> = {
  not_leaf: {
    title: 'Ini sepertinya bukan foto daun',
    hint: 'Model hanya mengenali tulang daun. Foto satu daun dengan jelas dan background polos.',
  },
  invalid_image: { title: 'Foto tidak dapat diproses' },
  validation: { title: 'Foto tidak sesuai' },
  server: { title: 'Klasifikasi gagal' },
}