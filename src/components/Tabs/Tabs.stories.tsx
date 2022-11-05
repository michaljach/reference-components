import React from 'react'
import { Tabs } from './Tabs'

export function TabsSimple() {
  return (
    <Tabs>
      <Tabs.TabPane title="Tab 1" id="tab-1">
        Tab 1
      </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2" id="tab-2">
        Tab 2
      </Tabs.TabPane>
    </Tabs>
  )
}

export function TabsDisabled() {
  return (
    <Tabs>
      <Tabs.TabPane title="Tab 1" id="tab-1">
        Tab 1
      </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2" id="tab-2">
        Tab 2
      </Tabs.TabPane>
    </Tabs>
  )
}
