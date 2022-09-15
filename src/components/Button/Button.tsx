import React, { MouseEvent, PropsWithChildren, ReactNode, useContext } from 'react'
import { cx } from '@emotion/css'
import { ThemeContext } from '../../theme/ThemeProvider'
import { ICommon } from '../../utils/common-interface'

interface IButtonClassNames {
  icon?: string
  text?: string
}

interface IButtonIcon {
  loading?: boolean
  icon?: ReactNode
  classNames?: IButtonClassNames
}

function ButtonIcon({ loading, icon, classNames }: IButtonIcon) {
  if (loading) {
    return <span className={cx('ref-button-icon', classNames?.icon)}>Loading...</span>
  }

  if (icon) {
    return <span className={cx('ref-button-icon', classNames?.icon)}>{icon}</span>
  }

  return null
}

export interface IButton extends ICommon {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  classNames?: IButtonClassNames
}

export function Button({
  icon,
  className,
  children,
  onClick,
  classNames,
  disabled,
  loading
}: PropsWithChildren<IButton>) {
  const { theme, css } = useContext(ThemeContext)

  const internalClassName = css`
    background: ${theme.Button?.background?.normal};
    border: ${theme.Button?.border};
    border-radius: ${theme.Button?.borderRadius};
    padding: ${theme.padding?.[2]};
    cursor: pointer;

    &:hover {
      background: ${theme.Button?.background?.hover};
    }

    &:active {
      background: ${theme.Button?.background?.active};
    }

    &:focus {
      background: ${theme.Button?.background?.focus};
    }
  `

  return (
    <button
      disabled={disabled}
      className={cx(
        'ref-button',
        loading && 'ref-button-loading',
        internalClassName,
        className
      )}
      type="button"
      onClick={onClick}
    >
      <ButtonIcon loading={loading} icon={icon} classNames={classNames} />
      <span className={cx('ref-button-text', classNames?.text)}>{children}</span>
    </button>
  )
}
