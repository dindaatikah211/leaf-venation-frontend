import { Card, CardContent } from '@/src/shared/components/ui/card'
import { LEAF_OUTLINE } from '../constants/Learn'
import type { LearnVenation } from '../types/Learn'

export default function VenationCard({
  name,
  latin,
  definition,
  characteristics,
  examples,
  tip,
  color,
  veins,
}: LearnVenation) {
  return (
    <Card style={{
      borderRadius: '20px',
      border: '1px solid var(--color-border)',
      background: '#fff',
      boxShadow: 'none',
    }}>
      <CardContent style={{
        padding: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '32px',
        alignItems: 'center',
      }}>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          borderRadius: '16px',
          background: 'var(--color-bg)',
        }}>
          <svg viewBox="0 0 120 120" width="160" height="160" role="img" aria-label={`Ilustrasi tulang daun ${name}`}>
            <path d={LEAF_OUTLINE} fill={color} fillOpacity={0.12} stroke={color} strokeWidth={2} strokeLinejoin="round" />
            {veins.map((d) => (
              <path key={d} d={d} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />
            ))}
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px',
              letterSpacing: '-0.5px',
              color: 'var(--color-text-main)',
              marginBottom: '2px',
            }}>
              {name}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontStyle: 'italic',
              color: 'var(--color-text-light)',
            }}>
              {latin}
            </p>
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--color-text-muted)',
            lineHeight: 1.65,
          }}>
            {definition}
          </p>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {characteristics.map((item) => (
              <li key={item} style={{
                display: 'flex',
                gap: '10px',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-text-main)',
                lineHeight: 1.5,
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: color,
                  marginTop: '7px',
                  flexShrink: 0,
                }} />
                {item}
              </li>
            ))}
          </ul>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'var(--color-bg)',
          }}>
            <strong style={{ fontWeight: 500, color: 'var(--color-text-main)' }}>Cara membedakan: </strong>
            {tip}
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: 'var(--color-text-light)',
          }}>
            Contoh: {examples.join(', ')}
          </p>
        </div>

      </CardContent>
    </Card>
  )
}