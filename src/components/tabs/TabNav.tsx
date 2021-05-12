import React from 'react';
import './TabNav.scss';

export type TabNavProps = {
  activeTab?: number;
  children?: React.ReactChild | React.ReactChild[];
  handleTabNavClick?: (index) => React.MouseEventHandler<HTMLLIElement>;
  tabs: any;
};

export const TabNav = (props: TabNavProps) => {
  return (
    <div className='tab-nav'>
      <nav>
        <ul>
          {props.tabs &&
            props.tabs.map((tab, i) => {
              const tabNavItemClass = [
                'tab-nav-item',
                `nav-index-${i + 1}`,
                `${tab.props.label}`,
                props.activeTab === i + 1 ? 'active' : '',
              ].join(' ');

              return (
                <li
                  className={tabNavItemClass}
                  data-cy={`navIndex-${i + 1}`}
                  key={i + 1}
                  onClick={props.handleTabNavClick(i + 1)}
                >
                  {tab.props.label || i + 1}
                </li>
              );
            })}
        </ul>
      </nav>
      {props.children}
    </div>
  );
};
