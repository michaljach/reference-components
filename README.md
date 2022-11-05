[![Actions Status](https://github.com/michaljach/reference-components/workflows/Build/badge.svg)](https://github.com/michaljach/reference-components/actions)
![Version](https://img.shields.io/npm/v/reference-components)
[![codecov](https://codecov.io/github/michaljach/reference-components/branch/main/graph/badge.svg?token=G5HJXXVD08)](https://codecov.io/github/michaljach/reference-components)
![Size](https://img.shields.io/bundlephobia/min/reference-components)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/michaljach/reference-components)
![License](https://img.shields.io/github/license/michaljach/reference-components)

# Reference Components

Ready-to-style functional components for React applications and custom component libraries.

- style however you want
- optimized for low bundle size
- solid base for creating your own component library
- React 17+
- Heavily tested

## Components

- [Button](src/components/Button)
- Input
- Tabs
- Grid
- Menu
- Flex

## Styling

- with **SCSS/LESS** or other preprocessors

```
.icon-class {
  padding: 4px;
}
```

```
<Button classNames={{
  icon: 'icon-class'
}}>
  Hello
</Button>
```

Each component has its own list of classNames.

- with **Tailwind**

```
<Button classNames={{
  icon: 'bg-blue p-4'
}}>
  Hello
</Button>
```

- with **classic CSS** classes

```
.ref-button {
  color: red;
}
```

```
<Button>Hello</Button>
```

Each component has its own classes prefixed with `ref-`.

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

## Development

Start local development server with [Ladle](https://ladle.dev/)

```
npm start
```

Project under active development, new components and features are being added.
Contributions are always welcome.

## License

MIT License. See [LICENSE](LICENSE) file for more details.
