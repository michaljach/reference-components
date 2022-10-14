import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState
} from 'react'
import { cx } from '@emotion/css'
import { ThemeContext } from '../../theme/ThemeProvider'
import { ICommon } from '../../utils/common-interface'

interface ITabsClassNames {}

export interface ITabs extends ICommon {
  classNames?: ITabsClassNames
  children: any
  activeTab?: string
}

interface ITabPane extends ICommon {
  title: string
  id: string
}

function TabPane({ children }: PropsWithChildren<ITabPane>) {
  return <div>{children}</div>
}

function Tabs({ className, children, classNames, activeTab }: PropsWithChildren<ITabs>) {
  const { theme, css } = useContext(ThemeContext)
  const arrayChildren: ReactElement<ITabPane>[] = Children.toArray(
    children
  ) as ReactElement<ITabPane>[]

  const [active, setActive] = useState(
    arrayChildren.find((tab) => tab.props.id === activeTab) || arrayChildren[0]
  )

  const internalStyles = {
    container: css``,
    tabs: css`
      display: flex;
    `,
    tab: css`
      cursor: pointer;
      padding: ${theme.padding?.[2]};
    `,
    tabActive: css`
      cursor: pointer;
      background: ${theme.Tabs?.background?.normal};
      padding: ${theme.padding?.[2]};
    `,
    content: css`
      padding: ${theme.padding?.[0]};
    `
  }

  const onTabSelect = (id: string) => {
    const tab = arrayChildren.find((tab) => tab.props.id === id)
    if (tab) {
      setActive(tab)
    }
  }

  return (
    <div className={cx('ref-tabs', internalStyles.container, className)}>
      <div className={cx('ref-tabs-tabs', internalStyles.tabs)}>
        {Children.map(arrayChildren, (child: ReactElement<ITabPane>, index) => {
          return (
            <div
              className={cx(
                child.props.id === active.props.id
                  ? 'ref-tabs-tab ref-tabs-tab--active'
                  : 'ref-tabs-tab',
                child.props.id === active.props.id
                  ? internalStyles.tabActive
                  : internalStyles.tab
              )}
              key={child.props.id}
              onClick={() => onTabSelect(child.props.id)}
            >
              {child.props.title}
            </div>
          )
        })}
      </div>
      <div className={cx('ref-tabs-content', internalStyles.content)}>{active}</div>
    </div>
  )
}

Tabs.TabPane = TabPane

export { Tabs }
