import React from 'react'
import { Button } from './Button'
import { ActivityIcon } from '../Icon/Icon'

export function ButtonSimple() {
  return <Button onClick={() => null}>Hello Button</Button>
}

export function ButtonLoading() {
  return (
    <Button loading onClick={() => null}>
      Hello Button
    </Button>
  )
}

export function ButtonDisabled() {
  return (
    <Button disabled onClick={() => null}>
      Hello Button
    </Button>
  )
}

export function ButtonDisabledLoading() {
  return (
    <Button disabled loading onClick={() => null}>
      Hello Button
    </Button>
  )
}

export function ButtonIcon() {
  return (
    <Button icon={<ActivityIcon />} onClick={() => null}>
      Hello Button
    </Button>
  )
}
