import React from 'react';
import ResumePDF from './ResumePDF';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <button onClick={onClose} className="absolute top-0 right-0 p-4">
          Close
        </button>
        <ResumePDF />
      </div>
    </div>
  );
};

export default ResumeModal;
