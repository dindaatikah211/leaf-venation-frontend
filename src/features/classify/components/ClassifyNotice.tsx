import { ImageOff, ImagePlus, ServerOff } from 'lucide-react'
import { Button } from '@/src/shared/components/ui/button'
import { ERROR_COPY } from '../constants/Classify'
import type { ClassifyFailure } from '../types/Classify'

type ClassifyNoticeProps = {
  error: ClassifyFailure
  onPickAnother?: () => void
}

export default function ClassifyNotice({ error, onPickAnother }: ClassifyNoticeProps) {
  const { title, hint } = ERROR_COPY[error.kind]
  const Icon = error.kind === 'server' ? ServerOff : ImageOff

  return (
    <div role="alert" style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '18px',
      marginTop: '20px',
      padding: '24px',
      borderRadius: '20px',
      border: '1px solid rgba(179,38,30,0.2)',
      background: 'rgba(179,38,30,0.04)',
    }}>
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'rgba(179,38,30,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={18} color="#B3261E" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', minWidth: 0 }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: 1.3,
          color: 'var(--color-text-main)',
        }}>
          {title}
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          lineHeight: 1.65,
          color: 'var(--color-text-muted)',
        }}>
          {hint ?? error.message}
        </p>
        {onPickAnother && (
          <Button
            variant="outline"
            onClick={onPickAnother}
            style={{
              marginTop: '12px',
              height: 'auto',
              padding: '10px 22px',
              borderRadius: '999px',
              border: '1px solid rgba(45,80,22,0.3)',
              background: '#fff',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <ImagePlus size={14} />
            Pilih Foto Lain
          </Button>
        )}
      </div>
    </div>
  )
}