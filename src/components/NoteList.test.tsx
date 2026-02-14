import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NoteList } from './NoteList'

describe('NoteList', () => {
  it('shows empty state when no entries', () => {
    render(<NoteList entries={[]} />)
    expect(screen.getByText('No notes loaded')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders note entries', () => {
    const entries = [
      {
        path: '/vault/note1.md',
        filename: 'note1.md',
        title: 'First Note',
        isA: 'Project',
        status: 'Active',
        modifiedAt: 1700000000,
      },
      {
        path: '/vault/note2.md',
        filename: 'note2.md',
        title: 'Second Note',
        isA: null,
        status: null,
        modifiedAt: null,
      },
    ]
    render(<NoteList entries={entries} />)
    expect(screen.getByText('First Note')).toBeInTheDocument()
    expect(screen.getByText('Second Note')).toBeInTheDocument()
    expect(screen.getByText('Project')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })
})
