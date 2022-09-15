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
    return <span className={classNames?.icon}>Loading...</span>
  }

  if (icon) {
    return <span className={classNames?.icon}>{icon}</span>
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
    background: ${theme.background};
    border: ${theme.border};
    border-radius: ${theme.borderRadius};
    padding: ${theme.padding[2]};
  `

  return (
    <button
      disabled={disabled}
      className={cx(internalClassName, className)}
      type="button"
      onClick={onClick}
    >
      <ButtonIcon loading={loading} icon={icon} classNames={classNames} />
      <span className={classNames?.text}>{children}</span>
    </button>
  )
}
