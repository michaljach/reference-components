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
        classNames={{ icon: 'icon_class', label: 'label_class' }}
        onClick={() => null}
        icon={<>Icon</>}
      >
        Example
      </Button>
    )
    expect(container.firstChild?.childNodes[0]).toHaveClass('icon_class')
    expect(container.firstChild?.childNodes[1]).toHaveClass('label_class')
  })

  it('should respond to onClick action', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Example</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toBeCalled()
  })

  it('should show loading state', async () => {
    const container = render(
      <Button onClick={() => null} loading>
        Example
      </Button>
    )
    expect(container.container.getElementsByTagName('svg').length).toBe(1)
  })

  it('should show loading state with icon', async () => {
    const { rerender, container } = render(
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
    expect(container.getElementsByTagName('svg').length).toBe(1)

    rerender(
      <Button onClick={() => null} icon={<>Icon</>} loading={false}>
        Example
      </Button>
    )
    expect(screen.queryByText(/Icon/)).toBeInTheDocument()
    expect(screen.queryByText(/Loading.../)).not.toBeInTheDocument()
  })

  it('should show loading state with custom icon', async () => {
    render(
      <Button onClick={() => null} loadingIcon={<>Loading Icon</>} loading>
        Example
      </Button>
    )
    expect(screen.queryByText(/Loading Icon/)).toBeInTheDocument()
  })
})
