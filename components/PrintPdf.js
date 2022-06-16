import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Classic from './Classic';
import TwoCircles from './TwoCircles';

const pageStyle = `
 @media print {
  html, body {
    height: initial !important;
    overflow: initial !important;
    -webkit-print-color-adjust: exact;
  }
}

@media print {
  .page-break {
    margin-top: 20rem;
    display: block;
    page-break-before: auto;
  }
}

@page {
  size: auto;
  margin: 20mm;
}

`;

const documentTitle = 'export';

const getPageMargins = () => {
  return `@page { margin: -10 0 0 -10 !important; }`;
};

const PrintPdf = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle,
    documentTitle,
  });

  return (
    <div>
      <div ref={componentRef}>
        <style>{getPageMargins()}</style>
        <Classic />
        {/*<TwoCircles />*/}
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default PrintPdf;
