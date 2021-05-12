import React from 'react';
import './Tab.scss';

export type TabProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactChild | React.ReactChild[];
  label?: string;
};

export const Tab = (props: TabProps) => {
  return <div {...props}>{props.children}</div>;
};
