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
  }
  shape: {
    borderRadius: string
  }
}

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
    }
  },
  shape: {
    borderRadius: '6px'
  }
}

export default defaultTheme
