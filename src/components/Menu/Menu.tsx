import React, { PropsWithChildren } from 'react'
import { css, cx } from '@emotion/css'

export interface IMenuItem {
  selected?: boolean
}

export function MenuItem({ children, selected }: PropsWithChildren<IMenuItem>) {
  const className = css`
    padding: 12px;
    background: ${selected && '#333'};
  `

  return <div className={className}>{children}</div>
}

export interface IMenu {
  className?: string
}

export function Menu({ children, className }: PropsWithChildren<IMenu>) {
  const internalClassName = css`
    width: 100%;
    background: #f1f1f1;
  `

  return <div className={cx(className, internalClassName)}>{children}</div>
}

Menu.Item = MenuItem
