import { createPortal } from 'react-dom';
import './Modal.scss';
import { useAppSelector } from '../../hooks/useRedux';
import { selectModal, setModal } from '../../features/modal';
import { useDispatch } from 'react-redux';

const Modal = () => {
  const modal = useAppSelector(selectModal).modal;
  const dispatch = useDispatch();

  if (!modal.length) {
    return null;
  }

  setTimeout(() => dispatch(setModal("")), 1000);

  return (
    <>
      {createPortal(
        <div className="modal">
          <div className="modal__wrapper">
            {modal}
          </div>
        </div>,
        document.getElementById('portal-root') as HTMLElement
      )}
    </>
  );
};

export default Modal;