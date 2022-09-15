import React, { PropsWithChildren } from 'react'
import { css } from '@emotion/css'

export function GridItem({ children }: PropsWithChildren) {
  return <div>{children}</div>
}

export function Grid({ children }: PropsWithChildren) {
  const className = css`
    display: grid;
  `

  return <div className={className}>{children}</div>
}

Grid.Item = GridItem
