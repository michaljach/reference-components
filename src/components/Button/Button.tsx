import React, { MouseEvent, PropsWithChildren, ReactNode, useContext } from 'react'
import { cx } from '@emotion/css'
import { ThemeContext } from '../../theme/ThemeProvider'
import { ICommon } from '../../common/common-interface'
import { LoaderIcon } from '../Icon/Icon'

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
    return (
      <span className={cx('ref-button-icon', classNames?.icon)}>
        <LoaderIcon />
      </span>
    )
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
    background: ${disabled ? theme.colors.secondary.main : theme.colors.primary.main};
    border: 0;
    border-radius: ${theme.shape.borderRadius};
    color: ${theme.colors.primary.text};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    padding: ${theme.spacing[4]};
    position: relative;

    &:hover,
    &:focus {
      background: ${disabled ? theme.colors.secondary.main : theme.colors.primary.dark};
    }

    &:active {
      top: 1px;
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
