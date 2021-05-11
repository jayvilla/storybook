import React from 'react';
import './TabNav.scss';

export type TabNavProps = {
  activeTab?: number;
  children?: React.ReactChild | React.ReactChild[];
  handleTabNavClick?: (index) => React.MouseEventHandler<HTMLLIElement>;
  tabLabels: string[];
};

export const TabNav = (props: TabNavProps) => {
  const renderNav = (tabLabels: string[]) => {
    return tabLabels.map((tabLabel, i) => {
      const tabNavItemClass = [
        'tab-nav-item',
        `nav-index-${i}`,
        `${tabLabel}`,
        props.activeTab === i ? 'active' : '',
      ].join(' ');

      return (
        <li
          className={tabNavItemClass}
          data-cy={`navIndex-${i}`}
          key={i}
          onClick={props.handleTabNavClick(i)}
        >
          {tabLabel}
        </li>
      );
    });
  };

  return (
    <div className='tab-nav'>
      <nav>
        <ul>{props.tabLabels && renderNav(props.tabLabels)}</ul>
      </nav>
      {props.children}
    </div>
  );
};
