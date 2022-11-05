import * as React from 'react'
import { render } from '@testing-library/react'
import * as Icons from './Icon'

describe('Icon', () => {
  it('should render all icons', () => {
    Object.values(Icons).forEach((Icon) => {
      const { container } = render(<Icon />)
      expect(container.firstElementChild).toBeInTheDocument()
    })
  })
})
