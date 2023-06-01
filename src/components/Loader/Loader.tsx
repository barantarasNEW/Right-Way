import { createPortal } from 'react-dom';
import './Loader.scss';

const Loader = () => {
  return (
    <>
      {createPortal(
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>,
        document.getElementById('portal-root') as HTMLElement
      )}
    </>
  );
};

export default Loader;