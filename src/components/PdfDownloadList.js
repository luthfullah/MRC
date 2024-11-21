import React from 'react';
import './pdf.css'
const PdfDownloadList = (props) => {
    console.log(props?.data)
  return (
    <div className='cen' style={{minHeight:"100vh"}}>
 <div className="pdf-gallery " >
      <h2 className="gallery-heading" >PDF Download List</h2>
      <div className="pdf-list" >
        {props.data ? (
          props.data.map((file, index) => (
            <div key={index} className="pdf-item">
              <a href={file.path} download className="pdf-link">
                <div className="pdf-icon">📄</div>
                <p className="pdf-name">{file.name}</p>
              </a>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default PdfDownloadList;
