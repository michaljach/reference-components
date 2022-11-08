import React, { useState } from 'react'
import { Input } from './Input'

export function InputSimple() {
  return <Input />
}

export function InputSimpleControlled() {
  const [value, setValue] = useState('Initial value')
  return <Input value={value} onChange={(e) => setValue(e.target.value)} />
}

export function InputDisabled() {
  return <Input disabled />
}

export function InputError() {
  return <Input error />
}
