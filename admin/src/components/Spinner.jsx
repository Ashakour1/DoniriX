// components/Spinner.js
import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-left-color: #005B96;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
