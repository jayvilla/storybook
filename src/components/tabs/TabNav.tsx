import React from 'react';
import './TabNav.scss';

export type TabNavProps = {
  activeTab?: string;
  children?: React.ReactChild | React.ReactChild[];
  setActiveTab?(string): React.MouseEventHandler<HTMLLIElement>;
  tabs: string[];
};

export const TabNav = (props: TabNavProps) => {
  const renderNav = (tabs: string[]) => {
    return tabs.map((tabTitle, i) => {
      const tabNavItemClass = [
        'tab-nav-item',
        `${tabTitle}`,
        props.activeTab === tabTitle ? 'active' : '',
      ].join(' ');

      return (
        <li className={tabNavItemClass} key={i} onClick={props.setActiveTab(tabTitle)}>
          {tabTitle}
        </li>
      );
    });
  };

  const tabNavClass = ['tab-nav'].join(' ');

  return (
    <div className={tabNavClass}>
      <nav>
        <ul>{props.tabs && renderNav(props.tabs)}</ul>
      </nav>
      {props.children}
    </div>
  );
};
