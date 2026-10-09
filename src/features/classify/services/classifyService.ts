import type { PredictionResult } from '../types/Classify'
import { API_URL } from '../constants/Classify'

export async function classifyImage(file: File): Promise<PredictionResult> {
  const body = new FormData()
  body.append('file', file)

  let response: Response
  try {
    response = await fetch(`${API_URL}/predict`, { method: 'POST', body })
  } catch {
    throw new Error('Server klasifikasi tidak dapat dihubungi')
  }

  if (!response.ok) {
    const data = await response.json().catch(() => null)
    throw new Error(data?.error ?? 'Gagal menghubungi server klasifikasi')
  }

  return response.json()
}