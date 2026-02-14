import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Inspector } from './Inspector'

describe('Inspector', () => {
  it('renders expanded state with sections', () => {
    render(<Inspector collapsed={false} onToggle={() => {}} />)
    expect(screen.getByText('Inspector')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('Relationships')).toBeInTheDocument()
  })

  it('renders collapsed state without sections', () => {
    render(<Inspector collapsed={true} onToggle={() => {}} />)
    expect(screen.queryByText('Inspector')).not.toBeInTheDocument()
    expect(screen.queryByText('Properties')).not.toBeInTheDocument()
  })

  it('calls onToggle when toggle button clicked', () => {
    const onToggle = vi.fn()
    render(<Inspector collapsed={false} onToggle={onToggle} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onToggle).toHaveBeenCalledOnce()
  })
})
