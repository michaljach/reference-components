import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState
} from 'react'
import { cx } from '@emotion/css'
import { ThemeContext } from '../../theme/ThemeProvider'
import { ICommon } from '../../common/common-interface'

interface ITabsClassNames {
  tabs?: string
  tab?: string
  content?: string
}

export interface ITabs extends ICommon {
  classNames?: ITabsClassNames
  children: ReactElement<ITabPane>[]
  activeTab?: string
}

interface ITabPane extends ICommon {
  // eslint-disable-next-line
  title: string
  // eslint-disable-next-line
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
      border: 0;
      cursor: pointer;
      padding: ${theme.spacing?.[2]};
    `,
    tabActive: css`
      border: 0;
      cursor: pointer;
      background: ${theme.colors?.primary?.main};
      padding: ${theme.spacing?.[2]};
    `,
    content: css`
      padding: ${theme.spacing?.[2]};
    `
  }

  const onTabSelect = (id: string) => {
    const tab = arrayChildren.find((child) => child.props.id === id)
    if (tab) {
      setActive(tab)
    }
  }

  return (
    <div className={cx('ref-tabs', internalStyles.container, className)}>
      <div className={cx('ref-tabs-tabs', internalStyles.tabs, classNames?.tabs)}>
        {Children.map(arrayChildren, (child: ReactElement<ITabPane>) => {
          return (
            <button
              type="button"
              className={cx(
                child.props.id === active.props.id
                  ? 'ref-tabs-tab ref-tabs-tab--active'
                  : 'ref-tabs-tab',
                child.props.id === active.props.id
                  ? internalStyles.tabActive
                  : internalStyles.tab,
                classNames?.tab
              )}
              key={child.props.id}
              onClick={() => onTabSelect(child.props.id)}
            >
              {child.props.title}
            </button>
          )
        })}
      </div>
      <div
        className={cx('ref-tabs-content', internalStyles.content, classNames?.content)}
      >
        {active}
      </div>
    </div>
  )
}

Tabs.TabPane = TabPane

export { Tabs }
