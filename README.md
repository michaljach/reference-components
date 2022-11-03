[![Actions Status](https://github.com/michaljach/reference-components/workflows/Build/badge.svg)](https://github.com/michaljach/reference-components/actions)

# Reference Components

Ready-to-style functional components for React applications and custom component libraries.

## Components

- [Button](src/components/Button)
- Input
- Tabs
- Grid
- Menu
- Flex

## Themes

Use `ThemeProvider` to leverage dynamic theming.

```
import { ThemeProvider, ITheme } from 'reference-components'

const theme: ITheme = {
	Button: {
		borderRadius: '3px'
	}
}

root.render(
	<ThemeProvider theme={theme}>
		<App  />
	</ThemeProvider>
)
```
