import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Modal.module.css';

type Props = {
  onClose: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  setModalOpen: boolean;
  // class names
  backgroundClass?: string;
  containerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  btnClass?: string;
  btnLabel: string;
  btnLabelClass?: string;
};

const { background, container, btn, btnMsg } = styles;

const Modal: React.FC<Props> = ({
  onClose,
  children,
  setModalOpen,
  backgroundClass,
  containerClass,
  bodyClass,
  footerClass,
  btnClass,
  btnLabel,
  btnLabelClass,
}) => {
  if (!setModalOpen) {
    return null;
  }

  return (
    <div className={`${background} ${backgroundClass}`}>
      <div className={`${container} ${containerClass}`}>
        <div className={bodyClass}>{children}</div>
        <div className={footerClass}>
          <button className={`${btn} ${btnClass}`} onClick={onClose}>
            <span className={`${btnMsg} ${btnLabelClass}`}>{btnLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
