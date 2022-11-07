#### Reference Components

# Tabs

### Simple usage

```
import { Tabs } from 'reference-components'

 <Tabs>
  <Tabs.TabPane title="Tab 1" id="tab-1">
    Tab 1
  </Tabs.TabPane>
  <Tabs.TabPane title="Tab 2" id="tab-2">
    Tab 2
  </Tabs.TabPane>
</Tabs>
```

## API

| Prop       | Type                             | Example                        |
| ---------- | -------------------------------- | ------------------------------ |
| classNames | [`Tabs ClassNames`](#classnames) | `{{ icon: 'icon_classname' }}` |
| activeTab  | `string`                         | `tab-1`                        |
| onChange   | `() => void`                     | `() => alert('Changed')`       |

## ClassNames

| className | Element              | DOM Element                       |
| --------- | -------------------- | --------------------------------- |
| tabs      | Tabs Buttons         | `<span class="ref-tabs-tabs">`    |
| content   | Selected Tab content | `<span class="ref-tabs-content">` |
