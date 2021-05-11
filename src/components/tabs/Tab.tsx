import React from 'react';
import './Tab.scss';

export type TabProps = {
  children?: React.ReactChild | React.ReactChild[];
  index?: number;
  isActiveTab?: boolean;
};

export const Tab = (props: TabProps) => {
  if (!props.isActiveTab) return null;
  return <div className='tab'>{props.children}</div>;
};
