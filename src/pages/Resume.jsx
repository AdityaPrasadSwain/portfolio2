import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    const updateWidth = () => {
      const container = document.getElementById('resume-pdf-container');
      if (container) {
        // Leave a tiny bit of margin to prevent horizontal scrolling
        setWidth(container.clientWidth - 2);
      }
    };

    window.addEventListener('resize', updateWidth);
    // Give it a tiny delay on initial load to ensure container is fully rendered
    setTimeout(updateWidth, 100);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section className="resume-section" id="resume" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '24px' }}>
        <a
          href="/ATS_Aditya_Prasad_Swain_Resume.pdf"
          download="ATS_Aditya_Prasad_Swain_Resume.pdf"
          className="btn-primary"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          Download CV
        </a>
      </div>

      <div
        id="resume-pdf-container"
        className="glass resume-container"
        style={{
          width: '100%',
          maxWidth: '1000px',
          padding: '0',
          borderRadius: '24px',
          marginBottom: '24px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }}
      >
        <Document
          file="/ATS_Aditya_Prasad_Swain_Resume.pdf"
          loading={<div style={{ padding: '60px', color: '#fff' }}>Loading Resume...</div>}
        >
          <Page
            pageNumber={1}
            width={width}
            renderTextLayer={true}
            renderAnnotationLayer={false}
            className="resume-page-canvas"
          />
        </Document>
      </div>


    </section>
  );
}
