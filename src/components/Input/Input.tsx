import React, { FormEvent, useContext } from 'react'
import { cx } from '@emotion/css'
import { ThemeContext } from '../../theme/ThemeProvider'

export interface IInput {
  value?: string
  onChange?: (event: FormEvent<HTMLInputElement>) => void
}

export function Input({ value, onChange }: IInput) {
  const { theme, css } = useContext(ThemeContext)

  const internalClassName = css`
    background: ${theme.Input?.background?.normal};
    padding: ${theme.padding?.[2]};
    border: ${theme.Input?.border};

    &:hover {
      background: ${theme.Input?.background?.hover};
    }

    &:active {
      background: ${theme.Input?.background?.active};
    }

    &:focus {
      background: ${theme.Input?.background?.focus};
    }
  `

  return (
    <input
      className={cx('ref-input', internalClassName)}
      value={value}
      onChange={onChange}
    />
  )
}
