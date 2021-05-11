import React from 'react';
import './Tab.scss';

export type TabProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactChild | React.ReactChild[];
  index?: number;
  isActiveTab?: boolean;
};

export const Tab = (props: TabProps) => {
  if (!props.isActiveTab) return null;
  return <div {...props}>{props.children}</div>;
};
