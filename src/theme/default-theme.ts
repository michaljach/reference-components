export interface ITheme {
  spacing: {
    [key: number]: string
  }
  colors: {
    primary: {
      main: string
      light: string
      dark: string
    }
  }
  shape: {
    borderRadius: string
  }
}

const defaultTheme: ITheme = {
  spacing: {
    1: '2px',
    2: '4px',
    3: '8px'
  },
  colors: {
    primary: {
      main: '#0000ff',
      light: '#0000ff',
      dark: '#0000ff'
    }
  },
  shape: {
    borderRadius: '3px'
  }
}

export default defaultTheme
