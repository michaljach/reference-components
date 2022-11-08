import React, { ChangeEvent, useContext, useState } from 'react'
import { cx } from '@emotion/css'
import { ThemeContext } from '../../theme/ThemeProvider'

export interface IInput {
  disabled?: boolean
  type?: 'text'
  placeholder?: string
  className?: string
  error?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export function Input({
  type = 'text',
  disabled,
  className,
  placeholder,
  error,
  onChange,
  value
}: IInput) {
  const { theme, css } = useContext(ThemeContext)
  const [localValue, setLocalValue] = useState(value)

  const localOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value)
    onChange?.(event)
  }

  const borderStyles = () => {
    if (disabled) {
      return theme.colors.secondary.main
    }

    if (error) {
      return theme.colors.error.main
    }

    return theme.colors.primary.main
  }

  const internalStyles = {
    input: css`
      border-radius: ${theme.shape.borderRadius};
      border: 2px solid ${borderStyles()};
      padding: ${theme.spacing[4]};
      position: relative;

      &:hover,
      &:focus,
      &:focus-visible,
      &:active {
        outline: none;
        border: 2px solid
          ${disabled ? theme.colors.secondary.main : theme.colors.primary.dark};
      }
    `
  }

  const errorStyles = {
    input: css`
      border-radius: ${theme.shape.borderRadius};
      border: 2px solid ${theme.colors.error.main};
      padding: ${theme.spacing[4]};
      position: relative;
      outline: none;
    `
  }

  return (
    <input
      value={localValue}
      onChange={localOnChange}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      className={cx(
        'ref-input',
        { 'ref-input-error': error },
        error ? errorStyles.input : internalStyles.input,
        className
      )}
    />
  )
}
