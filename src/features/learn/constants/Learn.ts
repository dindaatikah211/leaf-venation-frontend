import type { LearnVenation } from '../types/Learn'

export const LEAF_OUTLINE = 'M60 8 C90 30 98 70 60 112 C22 70 30 30 60 8 Z'

export const LEARN_VENATIONS: LearnVenation[] = [
  {
    id: 'pinnate',
    name: 'Menyirip',
    latin: 'Pinnate',
    definition:
      'Satu tulang utama membentang dari pangkal ke ujung daun, dan cabang-cabang tulang keluar ke kiri dan kanan seperti sirip ikan atau bulu burung.',
    characteristics: [
      'Ada satu tulang utama yang jelas di tengah daun',
      'Tulang cabang keluar berpasangan atau berselang-seling',
      'Cabang makin kecil ke arah tepi daun',
    ],
    examples: ['Daun mangga', 'Pakis'],
    tip: 'Cabang tulang mengarah lurus ke tepi daun, tidak melengkung mengikuti tepi. Jenis ini paling sering tertukar dengan melengkung.',
    color: '#4A7C2F',
    veins: [
      'M60 12 L60 108',
      'M60 30 L42 42',
      'M60 30 L78 42',
      'M60 48 L38 62',
      'M60 48 L82 62',
      'M60 68 L40 82',
      'M60 68 L80 82',
      'M60 86 L46 96',
      'M60 86 L74 96',
    ],
  },
  {
    id: 'palmate',
    name: 'Menjari',
    latin: 'Palmate',
    definition:
      'Beberapa tulang utama keluar dari satu titik di pangkal daun lalu menyebar ke segala arah seperti jari-jari tangan.',
    characteristics: [
      'Tiga atau lebih tulang utama berawal dari satu titik',
      'Tulang menyebar ke arah ujung dan sisi daun',
      'Daun sering bercuping atau bergerigi',
    ],
    examples: ['Daun pepaya', 'Daun singkong'],
    tip: 'Cari titik pertemuan di pangkal daun. Kalau beberapa tulang besar berawal dari sana, itu menjari.',
    color: '#C9A227',
    veins: [
      'M60 108 L60 14',
      'M60 108 L40 44',
      'M60 108 L80 44',
      'M60 108 L38 72',
      'M60 108 L82 72',
    ],
  },
  {
    id: 'arcuate',
    name: 'Melengkung',
    latin: 'Arcuate',
    definition:
      'Tulang-tulang utama melengkung mengikuti bentuk tepi daun dan bertemu kembali di dekat ujung daun.',
    characteristics: [
      'Tulang utama berbentuk busur',
      'Lengkungan searah dengan tepi daun',
      'Tulang-tulang bertemu lagi di dekat ujung',
    ],
    examples: ['Daun sirih'],
    tip: 'Ikuti satu tulang dari pangkal. Kalau ia membelok mengikuti tepi daun, bukan menuju tepi, itu melengkung.',
    color: '#2E8B8B',
    veins: [
      'M60 12 L60 108',
      'M60 108 C34 82 36 46 58 16',
      'M60 108 C86 82 84 46 62 16',
      'M60 108 C46 86 48 58 60 34',
      'M60 108 C74 86 72 58 60 34',
    ],
  },
  {
    id: 'parallel',
    name: 'Sejajar',
    latin: 'Parallel',
    definition:
      'Tulang-tulang daun memanjang lurus dan sejajar dari pangkal hingga ujung, dihubungkan oleh tulang halus yang sangat kecil.',
    characteristics: [
      'Garis tulang lurus dan rapat',
      'Hampir tidak ada percabangan besar',
      'Biasanya pada daun yang panjang dan sempit',
    ],
    examples: ['Daun padi', 'Rumput'],
    tip: 'Paling mudah dikenali. Kalau semua garis berjalan searah tanpa bercabang, itu sejajar.',
    color: '#B5651D',
    veins: [
      'M60 14 L60 108',
      'M48 24 L48 98',
      'M72 24 L72 98',
      'M40 42 L40 84',
      'M80 42 L80 84',
    ],
  },
]