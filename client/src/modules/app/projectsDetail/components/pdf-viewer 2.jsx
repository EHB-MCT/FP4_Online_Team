import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error) {
    setError(error.message);
  }

  return (
    <div>
      <Document
        file="/pdf/test.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading="Loading PDF..."
        error="Could not load PDF file. Make sure it's a valid URL or path."
      >
        {error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))
        )}
      </Document>
    </div>
  );
};

export default PdfViewer;