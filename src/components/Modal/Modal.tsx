import React, { MouseEventHandler, ReactNode } from 'react';

type Props = {
  onClose: MouseEventHandler<HTMLButtonElement>;
  backgroundClass: string;
  containerClass: string;
  bodyClass: string;
  footerClass: string;
  btnClass: string;
  btnLabel: string;
  btnLabelClass: string;
  children: ReactNode;
  setModalOpen: boolean;
};

const Modal: React.FC<Props> = ({
  onClose,
  backgroundClass,
  containerClass,
  bodyClass,
  footerClass,
  btnClass,
  btnLabel,
  btnLabelClass,
  children,
  setModalOpen,
}) => {
  if (!setModalOpen) {
    return null;
  }
  return (
    <div className={`background ${backgroundClass}`}>
      <div className={`container ${containerClass}`}>
        <div className={bodyClass}>{children}</div>
        <div className={footerClass}>
          <button className={`btn ${btnClass}`} onClick={onClose}>
            <span className={`btnLabel ${btnLabelClass}`}>{btnLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
