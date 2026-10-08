import { RESULT_STORAGE_KEY } from '../../constants/Classify'
import type { StoredResult } from '../../types/Classify'

export function getStoredRaw(): string | null {
  return sessionStorage.getItem(RESULT_STORAGE_KEY)
}

export function parseStoredResult(raw: string | null): StoredResult | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as StoredResult
  } catch {
    return null
  }
}