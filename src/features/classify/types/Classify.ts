export type VenationClass = 'arcuate' | 'palmate' | 'parallel' | 'pinnate'

export type PredictionResult = {
  label: VenationClass
  confidence: number
  probabilities: Record<VenationClass, number>
}

export type StoredResult = PredictionResult & {
  image: string
}