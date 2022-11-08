export interface ICommon {
  className?: string
}

export interface ITheme {
  spacing: {
    [key: number]: string
  }
  colors: {
    primary: {
      main: string
      light: string
      dark: string
      text: string
    }
    secondary: {
      main: string
      light: string
      dark: string
      text: string
    }
    tertiary: {
      main: string
      light: string
      dark: string
      text: string
    }
    error: {
      main: string
      light: string
      dark: string
      text: string
    }
  }
  shape: {
    borderRadius: string
  }
}
