import React from 'react';
import './Center.scss';

type CenterProps = {
  children: React.ReactChildren;
}

export const Center = (props: CenterProps) => {
  return (
    <div className='center'>
      {props.children}
    </div>
  )
}