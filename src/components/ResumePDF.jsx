import React from 'react';
import { Document, Page } from 'react-pdf';
import resumePDF from '../assets/Resume-4.1.2.pdf'

const ResumePDF = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <div className="pdf-container">
        <Document file={resumePDF}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};

export default ResumePDF;
