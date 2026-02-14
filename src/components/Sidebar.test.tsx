import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the app title', () => {
    render(<Sidebar />)
    expect(screen.getByText('Laputa')).toBeInTheDocument()
  })

  it('renders navigation items', () => {
    render(<Sidebar />)
    expect(screen.getByText('All Notes')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Tasks')).toBeInTheDocument()
    expect(screen.getByText('People')).toBeInTheDocument()
  })
})
