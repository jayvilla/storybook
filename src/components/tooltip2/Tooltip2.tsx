import React from 'react';
import './Tooltip2.scss';
import { useDeviceDetect } from '../../hooks';

export const TooltipContent2 = () => {};

type Tooltip2Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactChildren;
  content?: any;
  fill?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  show?: boolean;
};

export const Tooltip2 = (props: Tooltip2Props) => {
  const tooltipRef = React.useRef();
  const [show, setShow] = React.useState(props.show || false);

  React.useEffect(() => {
    const tooltipEl = tooltipRef.current || undefined;

    if (tooltipEl) {
      tooltipEl.style.setProperty('--background', props.fill);
    }
  }, [show]);

  React.useEffect(() => {
    if (props.show) {
      setShow(props.show);
    }
  }, [props.show]);

  const showTooltip = () => setShow(true);
  const hideTooltip = () => setShow(false);

  const tooltip2WrapperClass = ['tooltip2--wrapper'].join(' ');
  const tooltip2Class = ['tooltip2', `tooltip2--${props.position}`].join(' ');
  const tooltipStyle = {
    backgroundColor: props.fill,
  };

  return (
    <div
      className={tooltip2WrapperClass}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {show && (
        <div ref={tooltipRef} className={tooltip2Class} style={tooltipStyle}>
          {props.content}
        </div>
      )}
      {props.children}
    </div>
  );
};

Tooltip2.defaultProps = {
  fill: '#333333',
  position: 'top',
  show: false,
};
