'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { AnimatePresence } from 'motion/react'
import SplashScreen from './SplashScreen'

const SplashContext = createContext({ ready: false })

export const useSplash = () => useContext(SplashContext)

export function SplashProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const handleComplete = useCallback(() => setReady(true), [])
  const value = useMemo(() => ({ ready }), [ready])

  return (
    <SplashContext.Provider value={value}>
      {children}
      <AnimatePresence>{!ready && <SplashScreen onComplete={handleComplete} />}</AnimatePresence>
    </SplashContext.Provider>
  )
}