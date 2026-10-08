import type { PredictionResult, VenationClass } from '../types/Classify'
import { API_URL, CLASS_NAMES, USE_MOCK } from '../constants/Classify'

async function mockPredict(): Promise<PredictionResult> {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  const weights = CLASS_NAMES.map(() => Math.random() ** 3)
  const total = weights.reduce((sum, w) => sum + w, 0)
  const probabilities = Object.fromEntries(
    CLASS_NAMES.map((name, i) => [name, weights[i] / total])
  ) as Record<VenationClass, number>
  const label = CLASS_NAMES.reduce((a, b) => (probabilities[a] >= probabilities[b] ? a : b))
  return { label, confidence: probabilities[label], probabilities }
}

export async function classifyImage(file: File): Promise<PredictionResult> {
  if (USE_MOCK) return mockPredict()

  const body = new FormData()
  body.append('file', file)

  const response = await fetch(`${API_URL}/predict`, { method: 'POST', body })
  if (!response.ok) throw new Error('Gagal menghubungi server klasifikasi')

  return response.json()
}