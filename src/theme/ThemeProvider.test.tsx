import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../components/Button/Button'
import { ThemeProvider } from './ThemeProvider'

describe('ThemeProvider', () => {
  it('should provide default theme', () => {
    render(
      <ThemeProvider>
        <Button onClick={() => null}>Example</Button>
      </ThemeProvider>
    )
    expect(screen.getByText(/Example/)).toBeInTheDocument()
  })

  it('should provide applied partial theme', () => {
    const { container } = render(
      <ThemeProvider theme={{ shape: { borderRadius: '1px' } }}>
        <Button onClick={() => null}>Example</Button>
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveStyle('border-radius: 1px')
  })
})
