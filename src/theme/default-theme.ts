import { ITheme } from '../common/common-interface'

const defaultTheme: ITheme = {
  spacing: {
    1: '2px',
    2: '4px',
    3: '8px',
    4: '12px'
  },
  colors: {
    primary: {
      main: '#0000ff',
      light: '#0000ff',
      dark: '#0000cd',
      text: '#fff'
    },
    secondary: {
      main: '#ccc',
      light: '#fbfbfb',
      dark: '#888',
      text: '#fff'
    },
    tertiary: {
      main: '#ff0000',
      light: '#ff0000',
      dark: '#ff0000',
      text: '#fff'
    },
    error: {
      main: '#880808',
      light: '#880808',
      dark: '#880808',
      text: '#fff'
    }
  },
  shape: {
    borderRadius: '11px'
  }
}

export default defaultTheme
