'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toResizedDataUrl } from '@/src/shared/lib/image'
import { ClassifyError, classifyImage } from '../services/classifyService'
import { ACCEPTED_TYPES, MAX_FILE_SIZE, RESULT_STORAGE_KEY } from '../constants/Classify'
import type { ClassifyFailure, StoredResult } from '../types/Classify'

export function useClassify() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ClassifyFailure | null>(null)

  const preview = useMemo(() => (file ? URL.createObjectURL(file) : null), [file])
  const rejected = error?.kind === 'not_leaf' || error?.kind === 'invalid_image'

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  const selectFile = useCallback((next: File | null) => {
    setError(null)
    if (!next) return
    if (!ACCEPTED_TYPES.includes(next.type)) {
      setError({ kind: 'validation', message: 'Format foto harus JPG, PNG, atau WebP' })
      return
    }
    if (next.size > MAX_FILE_SIZE) {
      setError({ kind: 'validation', message: `Ukuran foto maksimal ${MAX_FILE_SIZE / 1024 / 1024} MB` })
      return
    }
    setFile(next)
  }, [])

  const reset = useCallback(() => {
    setFile(null)
    setError(null)
  }, [])

  const submit = useCallback(async () => {
    if (!file) return
    setLoading(true)
    setError(null)
    try {
      const [result, image] = await Promise.all([classifyImage(file), toResizedDataUrl(file)])
      const stored: StoredResult = { ...result, image }
      sessionStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(stored))
      router.push('/classify/result')
    } catch (e) {
      setError(
        e instanceof ClassifyError
          ? { kind: e.kind, message: e.message }
          : { kind: 'server', message: e instanceof Error ? e.message : 'Terjadi kesalahan, coba lagi' }
      )
      setLoading(false)
    }
  }, [file, router])

  return { file, preview, loading, error, rejected, selectFile, reset, submit }
}