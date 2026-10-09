export type VenationClass = 'arcuate' | 'palmate' | 'parallel' | 'pinnate'

export type PredictionResult = {
  label: VenationClass
  confidence: number
  probabilities: Record<VenationClass, number>
}

export type StoredResult = PredictionResult & {
  image: string
}

export type ClassifyErrorKind = 'validation' | 'not_leaf' | 'invalid_image' | 'server'

export type ClassifyFailure = {
  kind: ClassifyErrorKind
  message: string
}