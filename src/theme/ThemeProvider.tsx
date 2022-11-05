import React, { createContext, PropsWithChildren, useMemo } from 'react'
import { css as emotionCss } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import createEmotion from '@emotion/css/create-instance'
import defaultTheme from './default-theme'
import { ITheme } from '../common/common-interface'

export const ThemeContext = createContext({ theme: defaultTheme, css: emotionCss })

interface IThemeProvider {
  theme?: ITheme
}

export function ThemeProvider({ children, theme }: PropsWithChildren<IThemeProvider>) {
  const { cache, css } = createEmotion({
    key: 'ref',
    prepend: true
  })
  const value = useMemo(() => ({ theme: { ...defaultTheme, ...theme }, css }), [theme])

  return (
    <CacheProvider value={cache}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </CacheProvider>
  )
}
