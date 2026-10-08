import type { LucideIcon } from 'lucide-react'

export type VenationType = {
  name: string
  latin: string
  desc: string
  example: string
  color: string
}

export type Stat = {
  value: string
  label: string
}

export type Feature = {
  icon: LucideIcon
  title: string
  titleEn: string
  desc: string
}