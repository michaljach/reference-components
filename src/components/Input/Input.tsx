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
    background: ${theme.colors.primary.light};
    padding: ${theme.spacing[2]};

    &:hover {
      background: ${theme.colors.primary.dark};
    }

    &:active {
      background: ${theme.colors.primary.light};
    }

    &:focus {
      background: ${theme.colors.primary.light};
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
