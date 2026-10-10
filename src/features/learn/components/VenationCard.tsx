'use client'

import { useRef } from 'react'
import { useInView } from 'motion/react'
import { Stagger, StaggerItem } from '@/src/shared/components/commons/Stagger'
import { REVEAL_VIEWPORT } from '@/src/shared/constants/Motion'
import type { LearnVenation } from '../types/Learn'
import VenationIllustration from './VenationIllustration'

type VenationCardProps = LearnVenation & {
  index: number
}

export default function VenationCard({
  id,
  index,
  name,
  latin,
  definition,
  characteristics,
  examples,
  tip,
  color,
  veins,
}: VenationCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, REVEAL_VIEWPORT)
  const reverse = index % 2 === 1

  return (
    <article id={id} style={{
      scrollMarginTop: '96px',
      padding: '72px 0',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: '48px 80px',
        alignItems: 'center',
      }}>

        <div ref={ref} style={{
          order: reverse ? 2 : 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          borderRadius: '28px',
          border: '1px solid var(--color-border)',
          background: '#fff',
          backgroundImage: 'radial-gradient(rgba(45,80,22,0.14) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}>
          <span style={{
            position: 'absolute',
            top: '20px',
            left: '28px',
            fontFamily: 'var(--font-display)',
            fontSize: '64px',
            lineHeight: 1,
            letterSpacing: '-0.05em',
            color: `${color}33`,
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <VenationIllustration name={name} color={color} veins={veins} draw={inView} size={280} />
        </div>

        <Stagger style={{
          order: reverse ? 1 : 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          <StaggerItem>
            <p style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontStyle: 'italic',
              color: 'var(--color-text-light)',
              marginBottom: '8px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
              {latin}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 4.6vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: 'var(--color-text-main)',
            }}>
              {name}
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'var(--color-text-muted)',
              maxWidth: '480px',
            }}>
              {definition}
            </p>
          </StaggerItem>

          <StaggerItem>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {characteristics.map((item) => (
                <li key={item} style={{
                  display: 'flex',
                  gap: '12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  color: 'var(--color-text-main)',
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: color,
                    marginTop: '8px',
                    flexShrink: 0,
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              lineHeight: 1.65,
              color: 'var(--color-text-muted)',
              padding: '16px 20px',
              borderRadius: '16px',
              borderLeft: `3px solid ${color}`,
              background: '#fff',
              maxWidth: '480px',
            }}>
              <strong style={{ fontWeight: 500, color: 'var(--color-text-main)' }}>Cara membedakan: </strong>
              {tip}
            </p>
          </StaggerItem>

          <StaggerItem style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-light)',
              marginRight: '4px',
            }}>
              Contoh
            </span>
            {examples.map((example) => (
              <span key={example} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--color-text-muted)',
                padding: '6px 14px',
                borderRadius: '999px',
                border: '1px solid var(--color-border)',
                background: '#fff',
              }}>
                {example}
              </span>
            ))}
          </StaggerItem>
        </Stagger>

      </div>
    </article>
  )
}