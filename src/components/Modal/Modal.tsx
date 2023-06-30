import React, { MouseEventHandler, ReactNode } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  backgroundClass: string;
  containerClass: string;
  bodyClass: string;
  footerClass: string;
  btnClass: string;
  btnLabel: string;
  btnLabelClass: string;
  children: ReactNode;
};

const Modal: React.FC<Props> = ({
  onClick,
  backgroundClass,
  containerClass,
  bodyClass,
  footerClass,
  btnClass,
  btnLabel,
  btnLabelClass,
  children,
}) => {
  return (
    <div className={backgroundClass}>
      <div className={containerClass}>
        <div className={bodyClass}>{children}</div>
        <div className={footerClass}>
          <button className={btnClass} onClick={onClick}>
            <span className={btnLabelClass}>{btnLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
