#### Reference Components

# Button

### Simple usage

```
import { Button } from 'reference-components'

<Button onClick={() => alert('Hi')}>Hello World</Button>
```

## API

| Prop        | Type                                                    | Example                        |
| ----------- | ------------------------------------------------------- | ------------------------------ |
| classNames  | [`Button ClassNames`](#classnames)                      | `{{ icon: 'icon_classname' }}` |
| icon        | `ReactNode`                                             | `<>Custom Icon</>`             |
| loading     | `boolean`                                               | `true`                         |
| disabled    | `boolean`                                               | `true`                         |
| loadingIcon | `ReactNode`                                             | `<>Custom Loading Icon</>`     |
| onClick     | `(event: MouseEventHandler<HTMLButtonElement>) => void` | `() => { alert('Hi') }`        |

## ClassNames

| className | Element      | DOM Element                       |
| --------- | ------------ | --------------------------------- |
| icon      | Button Icon  | `<span class="ref-button-icon">`  |
| label     | Button Label | `<span class="ref-button-label">` |
