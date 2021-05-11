import React from 'react';
import './Tabs.scss';
import { TabNav, TabNavProps } from './TabNav';
import { Tab, TabProps } from './Tab';

export type TabsProps = {
  children:
    | React.ReactElement<TabProps>
    | React.ReactElement<TabProps>[]
    | React.ReactElement<TabNavProps>
    | React.ReactElement<TabNavProps>[];
  tabDirection: 'column' | 'row';
  tabs: string[];
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState<string>(props.tabs[0] || '');

  React.useEffect(() => {
    setActiveTab(props.tabs[0]);
  }, [props.tabs]);

  const handleTabNavClick = (navTitle: string) => (e?: React.MouseEvent<HTMLLIElement>) => {
    setActiveTab(navTitle);
  };

  const tabsClass = ['tabs', `tabs--${props.tabDirection}`].join(' ');

  return (
    <div className={tabsClass}>
      <TabNav tabs={props.tabs} activeTab={activeTab} setActiveTab={handleTabNavClick} />
      <Tab isActiveTab={activeTab === 'Warriors'}>
        <div>
          The Golden State Warriors are an American professional basketball team based in San
          Francisco. The Warriors compete in the National Basketball Association, as a member
          of the league's Western Conference Pacific Division.
        </div>
      </Tab>

      <Tab isActiveTab={activeTab === '49ers'}>
        <div>
          The San Francisco 49ers are a professional American football team based in the San
          Francisco Bay Area. They compete in the National Football League as a member of the
          league's National Football Conference West division.
        </div>
      </Tab>

      <Tab isActiveTab={activeTab === 'Giants'}>
        <div>
          The San Francisco Giants are an American professional baseball team based in San
          Francisco. The Giants compete in Major League Baseball as a member club of the
          National League West division.
        </div>
      </Tab>
      {props.children}
    </div>
  );
};

Tabs.defaultProps = {
  tabDirection: 'column',
};
