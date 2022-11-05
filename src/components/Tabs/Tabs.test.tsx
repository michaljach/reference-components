import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs } from '../../index'

describe('Tabs', () => {
  it('should show basic tabs', () => {
    render(
      <Tabs>
        <Tabs.TabPane title="Tab 1" id="tab1">
          Test 1
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2" id="tab2">
          Test 2
        </Tabs.TabPane>
      </Tabs>
    )
    expect(screen.getByText(/Tab 1/)).toBeInTheDocument()
    expect(screen.getByText(/Tab 2/)).toBeInTheDocument()
    expect(screen.queryByText(/Test 1/)).toBeInTheDocument()
    expect(screen.queryByText(/Test 2/)).not.toBeInTheDocument()
  })

  it('should switch tab content', async () => {
    render(
      <Tabs>
        <Tabs.TabPane title="Tab 1" id="tab1">
          Test 1
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2" id="tab2">
          Test 2
        </Tabs.TabPane>
      </Tabs>
    )

    await userEvent.click(screen.getByText(/Tab 2/))
    expect(screen.queryByText(/Test 1/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Test 2/)).toBeInTheDocument()
  })

  it('should apply classnames', async () => {
    const { container } = render(
      <Tabs classNames={{ tabs: 'tabs_class' }}>
        <Tabs.TabPane title="Tab 1" id="tab1">
          Test 1
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2" id="tab2">
          Test 2
        </Tabs.TabPane>
      </Tabs>
    )

    await userEvent.click(screen.getByText(/Tab 2/))
    expect(screen.queryByText(/Test 1/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Test 2/)).toBeInTheDocument()
    expect(container.firstChild?.childNodes[0]).toHaveClass('tabs_class')
  })
})
