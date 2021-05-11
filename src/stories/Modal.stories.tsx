import React from 'react';
import { Modal } from '../components/modal';

const ModalExample = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModalClick = (
    e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>,
  ) => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={handleModalClick}>Show Modal</button>
      <Modal isVisible={showModal} onClick={handleModalClick}>
        <div style={{ height: '300px', width: '250px' }}>
          <h1>IM IN THE MODAL</h1>
          <p>i should be something</p>
          <p>cool in the modal kekeke</p>
        </div>
      </Modal>
    </div>
  );
};

export default {
  title: 'UI/Modal',
  component: ModalExample,
};

const Template = (args) => <ModalExample {...args} />;

export const Default = Template.bind({});
