import React from 'react';
import './Tabs.scss';
import { TabNav, TabNavProps } from './TabNav';
import { Tab, TabProps } from './Tab';

export type TabsProps = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  defaultTabIndex?: number;
  tabDirection: 'column' | 'row';
  tabLabels: string[];
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  React.useEffect(() => {
    if (props.defaultTabIndex) {
      setActiveTab(props.defaultTabIndex);
    }
  }, [props.defaultTabIndex]);

  const handleTabNavClick = (navIndex: number) => (e?: React.MouseEvent<HTMLLIElement>) => {
    setActiveTab(navIndex);
  };

  const tabsClass = ['tabs', `tabs--${props.tabDirection}`].join(' ');

  return (
    <div className={tabsClass}>
      <TabNav
        activeTab={activeTab}
        tabLabels={props.tabLabels}
        handleTabNavClick={handleTabNavClick}
      />
      {props.children &&
        props.children.map((child, i) => (
          <Tab
            className={`tab tab-index-${i}`}
            key={i}
            data-cy={`tabIndex-${i}`}
            isActiveTab={activeTab === i}
          >
            {child}
          </Tab>
        ))}
    </div>
  );
};

Tabs.defaultProps = {
  defaultTabIndex: 0,
  tabDirection: 'column',
};
