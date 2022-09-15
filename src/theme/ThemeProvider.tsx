import React, { createContext, PropsWithChildren, useMemo } from 'react'

const defaultTheme = {
  background: '#f1f1f1'
}

export const ThemeContext = createContext(defaultTheme)

interface IThemeProvider {
  theme: any
}

export function ThemeProvider({ children, theme }: PropsWithChildren<IThemeProvider>) {
  const value = useMemo(() => theme || defaultTheme, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
