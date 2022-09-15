interface IThemeBackground {
  normal: string
  hover: string
  active: string
  focus: string
  visited: string
}

export interface ITheme {
  padding?: string[]
  Button?: {
    background?: IThemeBackground
    border?: string
    borderRadius?: string
  }
  Input?: {
    background?: IThemeBackground
    border?: string
    borderRadius?: string
  }
}

const defaultTheme: ITheme = {
  padding: ['4px', '8px', '12px', '24px'],
  Button: {
    background: {
      normal: '#f1f1f1',
      hover: '#ccc',
      active: '#333',
      focus: '#f1f1f1',
      visited: '#fff'
    },
    border: '0',
    borderRadius: '0'
  },
  Input: {
    background: {
      normal: '#fff',
      hover: '#ccc',
      active: '#333',
      focus: '#f1f1f1',
      visited: '#fff'
    },
    border: '2px solid #f1f1f1'
  }
}

export default defaultTheme
