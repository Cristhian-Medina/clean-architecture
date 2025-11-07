import { describe, it, expect } from 'vitest'
import { health } from '../../src/shared/health'

describe('health()', () => {
  it('should returns status ok and a timestamp', () => {
    const result = health()

    expect(result).toHaveProperty('status', 'ok')
    expect(result.timestamp).toBeInstanceOf(Date)
  })

  it('should return current timestamp', () => {
    const before = new Date()
    const result = health()
    const after = new Date()

    expect(result.timestamp.getTime()).toBeGreaterThanOrEqual(before.getTime())
    expect(result.timestamp.getTime()).toBeLessThanOrEqual(after.getTime())
  })
})
