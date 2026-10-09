import type { ClassifyErrorKind, PredictionResult } from '../types/Classify'
import { API_URL } from '../constants/Classify'

export class ClassifyError extends Error {
  kind: ClassifyErrorKind

  constructor(kind: ClassifyErrorKind, message: string) {
    super(message)
    this.kind = kind
  }
}

const KIND_BY_STATUS: Record<number, ClassifyErrorKind> = {
  400: 'invalid_image',
  413: 'invalid_image',
  422: 'not_leaf',
}

export async function classifyImage(file: File): Promise<PredictionResult> {
  const body = new FormData()
  body.append('file', file)

  let response: Response
  try {
    response = await fetch(`${API_URL}/predict`, { method: 'POST', body })
  } catch {
    throw new ClassifyError('server', 'Server klasifikasi tidak dapat dihubungi. Coba lagi sebentar.')
  }

  if (!response.ok) {
    const data = await response.json().catch(() => null)
    throw new ClassifyError(
      KIND_BY_STATUS[response.status] ?? 'server',
      data?.error ?? 'Gagal menghubungi server klasifikasi'
    )
  }

  return response.json()
}