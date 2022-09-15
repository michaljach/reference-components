import React from 'react'

export interface IInput {
  value: string
}

export function Input({ value }: IInput) {
  return <input value={value} />
}
