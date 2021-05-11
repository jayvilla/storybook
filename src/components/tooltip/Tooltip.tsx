import React from 'react';
import ReactDOM from 'react-dom';
import './Tooltip.scss';

type TooltipContentProps = {
  content: any;
  duration: number;
  fill: any;
  position: { top: number; left: number };
  tooltipClass: string;
  tooltipPosition: string;
};

// Content
const TooltipContent = (props: TooltipContentProps) => {
  const tooltipEl = React.useRef();
  const targetEl = document.getElementById('root');

  React.useEffect(() => {
    const el = tooltipEl.current || undefined;

    if (el) {
      el.style.transitionDuration = props.duration + 'ms';
      el.style.backgroundColor = props.fill;
      el.style.setProperty('--background', `${props.fill}`);

      setTimeout(() => {
        if (props.tooltipPosition === 'top') {
          el.style.top = `${props.position.top - el.clientHeight}px`;
          el.style.left = `${props.position.left}px`;
          el.style.transform = `translate(-50%, -15px) scale(1)`;
        } else if (props.tooltipPosition === 'bottom') {
          el.style.top = `${props.position.top}px`;
          el.style.left = `${props.position.left}px`;
          el.style.transform = `translate(-50%, 15px) scale(1)`;
        } else if (props.tooltipPosition === 'left') {
          el.style.top = `${props.position.top}px`;
          el.style.left = `${props.position.left - el.clientWidth}px`;
          el.style.transform = `translate(-15px, -50%) scale(1)`;
        } else if (props.tooltipPosition === 'right') {
          el.style.top = `${props.position.top}px`;
          el.style.left = `${props.position.left}px`;
          el.style.transform = `translate(15px, -50%) scale(1)`;
        }
        el.style.opacity = '1';
      }, 20);
    }
  }, []);

  const output = (
    <div className={props.tooltipClass} ref={tooltipEl}>
      {props.content}
    </div>
  );

  return targetEl ? ReactDOM.createPortal(output, targetEl) : output;
};

type TooltipProps = {
  children: React.ReactElement;
  content: any;
  fill: any;
  position: 'top' | 'bottom' | 'left' | 'right';
  animationDuration: number;
};

export const Tooltip = (props: TooltipProps) => {
  const [elPosition, setElPosition] = React.useState({ top: 0, left: 0 });
  const [show, setShow] = React.useState(true);
  let tooltipClass = 'tooltip';

  const getPosition = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();

    if (props.position === 'top') {
      setElPosition({
        top: pos.top + window.pageYOffset,
        left: pos.left + pos.width / 2 + window.pageXOffset,
      });
    } else if (props.position === 'bottom') {
      setElPosition({
        top: pos.bottom + window.pageYOffset,
        left: pos.left + pos.width / 2 + window.pageXOffset,
      });
    } else if (props.position === 'left') {
      setElPosition({
        top: pos.top + pos.height / 2 + window.pageYOffset,
        left: pos.left + window.pageXOffset,
      });
    } else if (props.position === 'right') {
      setElPosition({
        top: pos.top + pos.height / 2 + window.pageYOffset,
        left: pos.left + pos.width + window.pageXOffset,
      });
    }
    setShow(true);
  };

  if (props.position === 'top') {
    tooltipClass += ' tooltip--top';
  } else if (props.position === 'bottom') {
    tooltipClass += ' tooltip--bottom';
  } else if (props.position === 'left') {
    tooltipClass += ' tooltip--left';
  } else if (props.position === 'right') {
    tooltipClass += ' tooltip--right';
  }

  return (
    <>
      {show && (
        <TooltipContent
          content={props.content}
          duration={props.animationDuration}
          fill={props.fill}
          position={elPosition}
          tooltipClass={tooltipClass}
          tooltipPosition={props.position}
        />
      )}
      {React.cloneElement(props.children, {
        ...props.children.props,
        onMouseOver: getPosition,
        onMouseLeave: () => setShow(false),
      })}
    </>
  );
};

Tooltip.defaultProps = {
  fill: '#333333',
  animationDuration: 200,
};
