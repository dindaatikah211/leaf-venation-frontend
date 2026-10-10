'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { AnimatePresence } from 'motion/react'
import SplashScreen from './SplashScreen'

const STORAGE_KEY = 'venaleaf:splash-seen'

const SplashContext = createContext({ ready: false })

const subscribe = () => () => {}
const readSeen = () => sessionStorage.getItem(STORAGE_KEY) === '1'
const readSeenOnServer = () => false

export const useSplash = () => useContext(SplashContext)

export function SplashProvider({ children }: { children: ReactNode }) {
  const seen = useSyncExternalStore(subscribe, readSeen, readSeenOnServer)
  const [finished, setFinished] = useState(false)

  const handleComplete = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setFinished(true)
  }, [])

  const ready = seen || finished
  const value = useMemo(() => ({ ready }), [ready])

  return (
    <SplashContext.Provider value={value}>
      {children}
      <AnimatePresence>{!ready && <SplashScreen onComplete={handleComplete} />}</AnimatePresence>
    </SplashContext.Provider>
  )
}