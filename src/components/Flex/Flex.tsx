import React, { PropsWithChildren } from 'react'
import { css, cx } from '@emotion/css'
import widthMap from '../../utils/width-map'

export interface IFlexItem {
  sm?: '1/4' | '1/2'
}

export function FlexItem({ children, sm }: PropsWithChildren<IFlexItem>) {
  const className = css`
    width: ${sm ? widthMap[sm] : '100%'};
  `

  return <div className={className}>{children}</div>
}

export interface IFlex {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  className?: string
}

export function Flex({ children, className, justify, align }: PropsWithChildren<IFlex>) {
  const internalClassName = css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `

  return <div className={cx(className, internalClassName)}>{children}</div>
}

Flex.Item = FlexItem
