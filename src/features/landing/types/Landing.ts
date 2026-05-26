import { LucideIcon } from 'lucide-react'

export interface VenationType {
  name: string
  latin: string
  desc: string
  example: string
  color: string
}

export interface FeatureItem {
  icon: LucideIcon
  title: string
  titleEn: string
  desc: string
}

export interface StatItem {
  value: string
  label: string
}