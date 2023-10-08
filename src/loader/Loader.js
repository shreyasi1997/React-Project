import React, { useEffect, useState } from "react";
import "./loader.styles.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 3 seconds (adjust as needed)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout to your desired duration in milliseconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  return isLoading ? (
    <div className="text-loader font-monoton flex flex-col gap-1 items-center">
      <span>
        <img
          width={100}
          src="/assets/loading.gif"
          alt="loading..."
          className="opacity-[0.25]"
        />
      </span>
      <div className="text-container">
        <span className="letter">G</span>
        <span className="letter">L</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
        <span className="letter">S</span>
        <span className="letter">C</span>
        <span className="letter">A</span>
        <span className="letter">R</span>
        <span className="letter">T</span>
      </div>
    </div>
  ) : null;
};

export default Loader;