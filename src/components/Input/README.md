#### Reference Components

# Input

### Simple usage

```
import { Input } from 'reference-components'

 <Input value="Hello" />
```

## API

| Prop        | Type                                             | Example                          |
| ----------- | ------------------------------------------------ | -------------------------------- |
| classNames  | [`Input ClassNames`](#classnames)                | `{{ input: 'input_classname' }}` |
| placeholder | `string`                                         | `placeholder`                    |
| error       | `bool`                                           | `true`                           |
| disabled    | `bool`                                           | `true`                           |
| value       | `string`                                         | `Hello`                          |
| type        | `text`, `number`                                 | `text`                           |
| onChange    | `(event: ChangeEvent<HTMLInputElement>) => void` | `() => alert('Changed')`         |

## ClassNames

| className | Element       | DOM Element                 |
| --------- | ------------- | --------------------------- |
| input     | input element | `<input class="ref-input">` |
