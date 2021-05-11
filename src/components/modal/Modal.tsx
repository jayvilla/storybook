import React from 'react';
import './Modal.scss';

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  isVisible?: boolean;
  onClick?(): void;
};

export const Modal = (props: ModalProps) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (props.isVisible) {
      setIsVisible(props.isVisible);
    }
  }, [props.isVisible]);

  const handleModalClick = (e?: React.MouseEvent<HTMLDivElement>) => {
    props.onClick();
    closeModal();
  };

  const openModal = () => setIsVisible(false);
  const closeModal = () => setIsVisible(false);

  const modalClass = ['modal'].join(' ');
  const modalContentClass = ['modal-content'].join(' ');

  if (!isVisible) return null;

  return (
    <div className={modalClass} {...props} onClick={handleModalClick}>
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );

  return null;
};

Modal.defaultProps = {
  isVisible: false,
};
