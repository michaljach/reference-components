import React, { MouseEvent, PropsWithChildren, ReactNode, useContext } from 'react'
import { cx } from '@emotion/css'
import { ThemeContext } from '../../theme/ThemeProvider'
import { ICommon } from '../../common/common-interface'
import { LoaderIcon } from '../Icon/Icon'

interface IButtonClassNames {
  icon?: string
  label?: string
}

interface IButtonIcon {
  loading?: boolean
  loadingIcon?: ReactNode
  icon?: ReactNode
  classNames?: IButtonClassNames
}

function ButtonIcon({ loading, loadingIcon, icon, classNames }: IButtonIcon) {
  const { theme, css } = useContext(ThemeContext)

  const internalStyles = {
    icon: css`
      display: flex;
      margin-right: ${theme.spacing[2]};

      svg {
        height: 18px;
        fill: ${theme.colors.primary.text};
      }
    `
  }

  if (loading) {
    return (
      <span className={cx('ref-button-icon', classNames?.icon, internalStyles.icon)}>
        {loadingIcon || <LoaderIcon />}
      </span>
    )
  }

  if (icon) {
    return (
      <span className={cx('ref-button-icon', classNames?.icon, internalStyles.icon)}>
        {icon}
      </span>
    )
  }

  return null
}

export interface IButton extends ICommon {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  loading?: boolean
  loadingIcon?: ReactNode
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
  loading,
  loadingIcon
}: PropsWithChildren<IButton>) {
  const { theme, css } = useContext(ThemeContext)

  const internalStyles = {
    button: css`
      align-items: center;
      background: ${disabled ? theme.colors.secondary.main : theme.colors.primary.main};
      border: 0;
      border-radius: ${theme.shape.borderRadius};
      color: ${theme.colors.primary.text};
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      display: flex;
      padding: ${theme.spacing[4]};
      position: relative;
      min-height: 45px;

      &:hover,
      &:focus {
        background: ${disabled ? theme.colors.secondary.main : theme.colors.primary.dark};
      }

      &:active {
        top: 1px;
      }
    `
  }

  return (
    <button
      disabled={disabled}
      className={cx(
        'ref-button',
        loading && 'ref-button-loading',
        internalStyles.button,
        className
      )}
      type="button"
      onClick={onClick}
    >
      <ButtonIcon
        loading={loading}
        icon={icon}
        loadingIcon={loadingIcon}
        classNames={classNames}
      />
      <span className={cx('ref-button-label', classNames?.label)}>{children}</span>
    </button>
  )
}
