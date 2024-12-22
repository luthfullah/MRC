import React, { useEffect, useState } from 'react';
import './pdf.css'
import axios from 'axios';
import { FaFileDownload } from "react-icons/fa";

const PdfDownloadList = (props) => {
   
    const [pdfFiles, setPdfFiles] = useState([]); // Ensure initial state is an empty array

  
    useEffect(() => {
      const fetchPDFs = async () => {
        try {
          const response = await axios.get(
            `https://marakahumanitarian.shop/v1/b2c/getBlogsPDFs/pdf`
          );
          setPdfFiles(response.data); // Set the fetched PDF files to state
        } catch (error) {
          console.error("Error fetching PDF files:", error);
        }
      };
  
      fetchPDFs();
  

    }, []);
    console.log("pdfFiles",pdfFiles)
  return (
    <div id='pdf' className="bg-primary bg_color" style={{ minHeight: "100vh" }} >
        <div className="pdf-gallery bg_color w-100" style={{ minHeight: "80vh" }} >
          <h2 className="gallery-heading">BLOGS</h2>
          
          <div className="pdf-list">
            {pdfFiles.length > 0 ? (
              pdfFiles.map((file, index) => (
                <div key={index} className="pdf-item">
                  <a
                   className="pdf-link"
                   href={process.env.REACT_APP_PUBLIC_URL + file.filePath[0]}
                   download 
                   rel="noopener noreferrer"
                  >
                    <div className="pdf-icon">
                      <FaFileDownload />
                    </div>
                    <p className="pdf-name">{file.fileName}</p>
                  </a>
                </div>
              ))
            ) : (
              <p className="text-danger">NO FILES AVAILABLE.</p> // Render a loader if no files yet
            )}
          </div>
        </div>
      </div>
  );
};

export default PdfDownloadList;
