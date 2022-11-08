import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('should show basic Input', () => {
    const { container } = render(<Input value="" />)
    const input = container.getElementsByTagName('input')[0]
    expect(input).toBeInTheDocument()
    expect(input.value).toEqual('')
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toEqual('23')
  })

  it('should show basic controlled Input', () => {
    const { container } = render(<Input value="test" />)
    expect(container.getElementsByTagName('input')[0]).toBeInTheDocument()
    expect(container.getElementsByTagName('input')[0].value).toEqual('test')
  })

  it('should trigger onChange event', () => {
    const onChange = jest.fn()
    const { container } = render(<Input value="test" onChange={onChange} />)
    const input = container.getElementsByTagName('input')[0]
    expect(input).toBeInTheDocument()
    expect(input.value).toEqual('test')
    fireEvent.change(input, { target: { value: '23' } })
    expect(onChange).toBeCalledTimes(1)
    expect(input.value).toEqual('23')
  })

  it('should show disabled Input', () => {
    const { container } = render(<Input value="test" disabled />)
    expect(container.getElementsByTagName('input')[0]).toBeInTheDocument()
    expect(container.getElementsByTagName('input')[0].value).toEqual('test')
    expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled')
  })

  it('should show error Input', () => {
    const { container } = render(<Input value="test" error />)
    expect(container.getElementsByTagName('input')[0]).toBeInTheDocument()
    expect(container.getElementsByTagName('input')[0].value).toEqual('test')
    expect(container.getElementsByTagName('input')[0]).toHaveClass('ref-input-error')
  })
})
