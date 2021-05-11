import React from 'react';
import './Drawer.scss';

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactChildren;
  fill?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  openMethod: 'click' | 'hover';
  show?: boolean;
};

export const Drawer = (props) => {
  const [show, setShow] = React.useState<boolean>(props.show || false);

  React.useEffect(() => {
    if (props.show) {
      setShow(props.show);
    }
  }, [props.show]);

  const openDrawer = () => setShow(true);
  const closeDrawer = () => setShow(false);
  const handleDrawerClick = () => {
    setShow((prevState) => !prevState);
  };

  const showDrawer = show ? 'open' : 'close';
  const drawerClass = ['drawer', `drawer-${props.position}`, `${showDrawer}`].join(' ');
  const drawerStyle = {
    backgroundColor: props.fill,
  };

  const onMouseEnter = props.openMethod == 'hover' ? openDrawer : null;
  const onMouseLeave = props.openMethod == 'hover' ? closeDrawer : null;
  const onClick = props.openMethod == 'click' ? handleDrawerClick : null;

  return (
    <div
      className={drawerClass}
      style={drawerStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </div>
  );
};

Drawer.defaultProps = {
  children: null,
  fill: '#333333',
  openMethod: 'click',
  position: 'left',
};
