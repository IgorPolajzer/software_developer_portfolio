import React from "react";
import CV from "../assets/Igor_Polajzer_CV.pdf";
import Courses from "../assets/Course_certificates.pdf";

function CurriculumVitae() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const renderPDFSection = (title, file) => (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md py-6 mb-8 transition-colors duration-500">
      <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h1>
      <hr className="border-gray-300 dark:border-gray-700 mb-4" />
      {isMobile ? (
        <div className="text-gray-800 dark:text-gray-200">
          <p className="mb-4">
            Viewing the PDF is not available on mobile yet. Please download the PDF instead.
          </p>
          <a
            href={file}
            download
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Download {title}
          </a>
        </div>
      ) : (
        <div className="w-full h-[635px]">
          <object data={file} type="application/pdf" className="w-full h-full">
            <p className="text-gray-800 dark:text-gray-200">
              PDF failed to load. You can download it below.
            </p>
            <a
              href={file}
              download
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Download {title}
            </a>
          </object>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {renderPDFSection("Curriculum Vitae", CV)}
      {renderPDFSection("Courses", Courses)}
    </div>
  );
}

export default CurriculumVitae;
