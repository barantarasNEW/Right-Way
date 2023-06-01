import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

type Props = {
  title: string;
};

const Modal: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [setIsOpen]);

  const onClick = () => setIsOpen(false);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className="modal" onClick={onClick}>
          <div
            className="modal__wrapper"
            onClick={e => e.stopPropagation()}
          >
            {title}
          </div>
        </div>,
        document.getElementById('portal-root') as HTMLElement
      )}
    </>
  );
};

export default Modal;