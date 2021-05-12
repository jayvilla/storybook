import React from 'react';
import './Tabs.scss';
import { TabNav, TabNavProps } from './TabNav';
import { Tab, TabProps } from './Tab';

export type TabsProps = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  defaultTabIndex?: number;
  tabDirection: 'column' | 'row';
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState<number>(1);

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
        tabs={props.children}
        handleTabNavClick={handleTabNavClick}
      />
      {props.children &&
        props.children.map((child, i) => {
          if (i + 1 === activeTab)
            return <div className={`tab tab-index-${i + 1}`}>{child}</div>;
        })}
    </div>
  );
};

Tabs.defaultProps = {
  defaultTabIndex: 1,
  tabDirection: 'column',
};
