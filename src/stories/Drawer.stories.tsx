import React from 'react';
import { Drawer, DrawerProps } from '../components/drawer';

export default {
  title: 'UI/Drawer',
  component: Drawer,
};

const Template = (args: DrawerProps) => <Drawer {...args} />;

const Child = (
  <div>
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        color: '#f1f1f1',
      }}
    >
      <li
        style={{
          padding: '5px',
        }}
      >
        <a href='#'>Home</a>
      </li>
      <li
        style={{
          padding: '5px',
        }}
      >
        <a href='#'>About</a>
      </li>
      <li
        style={{
          padding: '5px',
        }}
      >
        <a href='#'>Gallery</a>
      </li>
      <li
        style={{
          padding: '5px',
        }}
      >
        <a href='#'>Careers</a>
      </li>
    </ul>
  </div>
);

const Child2 = (
  <div>
    <ul
      style={{
        display: 'flex',
        flexDirection: 'row',
        listStyleType: 'none',
        color: '#f1f1f1',
      }}
    >
      <li
        style={{
          padding: '5px',
        }}
      >
        <a href='#'>Home</a>
      </li>
      <li
        style={{
          padding: '5px',
        }}
      >
        <a href='#'>About</a>
      </li>
      <li
        style={{
          padding: '5px',
        }}
      >
        <a href='#'>Gallery</a>
      </li>
      <li
        style={{
          padding: '5px',
        }}
      >
        <a href='#'>Careers</a>
      </li>
    </ul>
  </div>
);

export const Left = Template.bind({});
Left.args = {
  fill: '#00d1b2',
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  fill: '#fc5203',
  position: 'right',
};

export const LeftWithChild = Template.bind({});
LeftWithChild.args = {
  children: Child,
  fill: '#155ccf',
  position: 'left',
};

export const RightWithChild = Template.bind({});
RightWithChild.args = {
  children: Child,
  fill: '#15b6cf',
  position: 'right',
};

export const Top = Template.bind({});
Top.args = {
  position: 'top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'bottom',
};

export const TopWithChild = Template.bind({});
TopWithChild.args = {
  children: Child2,
  position: 'top',
};

export const BottomWithChild = Template.bind({});
BottomWithChild.args = {
  children: Child2,
  position: 'bottom',
};

export const Hover = Template.bind({});
Hover.args = {
  children: Child,
  fill: '#155ccf',
  openMethod: 'hover',
  position: 'left',
};

export const Click = Template.bind({});
Click.args = {
  children: Child,
  fill: '#15b6cf',
  openMethod: 'click',
  position: 'right',
};
