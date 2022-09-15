import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('should show basic button with text', () => {
    render(<Button onClick={() => null}>Example</Button>)
    expect(screen.getByText(/Example/)).toBeInTheDocument()
  })

  it('should show basic button with text and icon', () => {
    render(
      <Button icon={<>Icon</>} onClick={() => null}>
        Example
      </Button>
    )
    expect(screen.getByText(/Icon/)).toBeInTheDocument()
  })

  it('should add css classes', () => {
    const { container } = render(
      <Button
        classNames={{ icon: 'iconclass', text: 'textclass' }}
        onClick={() => null}
        icon={<>Icon</>}
      >
        Example
      </Button>
    )
    expect(container.firstChild?.childNodes[0]).toHaveClass('iconclass')
    expect(container.firstChild?.childNodes[1]).toHaveClass('textclass')
  })

  it('should respond to onClick action', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Example</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toBeCalled()
  })

  it('should show loading state', async () => {
    render(
      <Button onClick={() => null} loading>
        Example
      </Button>
    )
    expect(screen.getByText(/Loading.../)).toBeInTheDocument()
  })

  it('should show loading state with icon', async () => {
    const { rerender } = render(
      <Button
        onClick={() => null}
        icon={<>Icon</>}
        loading
        classNames={{ icon: 'iconclass' }}
      >
        Example
      </Button>
    )
    expect(screen.queryByText(/Icon/)).not.toBeInTheDocument()
    expect(screen.getByText(/Loading.../)).toBeInTheDocument()

    rerender(
      <Button onClick={() => null} icon={<>Icon</>} loading={false}>
        Example
      </Button>
    )
    expect(screen.queryByText(/Icon/)).toBeInTheDocument()
    expect(screen.queryByText(/Loading.../)).not.toBeInTheDocument()
  })
})
