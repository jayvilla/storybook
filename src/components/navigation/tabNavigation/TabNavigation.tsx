import React from 'react';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import './TabNavigation.scss';

export type TabNavigationProps = {
  tabs: {
    component: React.ReactNode;
    name: string;
    path: string;
  };
};

export const TabNavigation = (props: TabNavigationProps) => {
  let history = useHistory();

  const [activeTab, setActiveTab] = React.useState<string>(props.tabs[0].name || '');

  React.useEffect(() => {
    if (props.tabs) {
      history.push(`${props.tabs[0].path}`);
      setActiveTab(props.tabs[0].name);
    }
  }, []);

  const handleNavigationClick = (tabName: string) => (e?: React.MouseEvent<HTMLLIElement>) => {
    setActiveTab(tabName);
  };

  const renderNavigation = (tabs) => {
    return tabs.map((tab, i) => {
      console.log(tab);
      const tabNavItemClass = [
        'tab-nav-link',
        `${tab.name}`,
        activeTab === tab.name ? 'active' : '',
      ].join(' ');

      return (
        <li className={tabNavItemClass} key={i} onClick={handleNavigationClick(tab.name)}>
          <Link to={`${tab.path}`} className='tab-nav-link'>
            {tab.name}
          </Link>
        </li>
      );
    });
  };

  const renderRoutes = (tabs) => {
    return tabs.map((tab, i) => (
      <Route key={i} path={`${tab.path}`} exact component={tab.component} />
    ));
  };

  return (
    <div className='tab-nav-main'>
      <div className='tab-nav-links'>
        <ul>{props.tabs && renderNavigation(props.tabs)}</ul>
      </div>

      <div className='tab-nav-tab'>
        <Switch>{props.tabs && renderRoutes(props.tabs)}</Switch>
      </div>
    </div>
  );
};
