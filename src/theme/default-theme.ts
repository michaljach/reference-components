export interface ITheme {
  background: string
  border: string
  borderRadius: string
  padding: string[]
}

const defaultTheme: ITheme = {
  background: '#f1f1f1',
  border: '2px solid #2590EB',
  borderRadius: '8px',
  padding: ['4px', '8px', '12px', '24px']
}

export default defaultTheme
