import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 px-4">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg sm:w-3/4 md:w-2/3 lg:w-1/3">
     
        {children}
      </div>
    </div>
  );
};

export default Modal;
