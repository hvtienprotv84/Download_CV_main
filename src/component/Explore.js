import React from 'react';
import { Text } from '../Text';
import '../../src/component/Explore.css';

export default function Explore() {
  
    return (
      <div>
        <h1 className="title"><Text tid="exploreHeader" /></h1>
        <img className="img_cv" src="anh1.jpg" alt="Ảnh CV"/>
        {/* <h2 className="download"><b><Text tid="welcomeDescription" /></b></h2> */}
        {/* <a className="download" href="path-to-your-file.pdf" download="filename.pdf">
          <h2><Text tid="welcomeDescription" /></h2>
        </a> */}


<div className="download">
        <a href="cv1.pdf" download className="authorized-reseller-api-btn">
  <svg
    height="42"
    width="40"
    viewBox="0 0 24 24"
    className="document-download_svg__h-6 document-download_svg__w-6"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth="2px"
      fill="none"
      stroke="#FFFFFF"
      d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>

  <span className="texts">
    <span className="text-2"><Text tid="title_version" /></span>
    <span className="text-1"><Text tid="download_version" /></span>
  </span>
</a>
</div>


      </div>
    );
  }