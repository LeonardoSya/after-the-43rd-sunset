import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    // 监听窗口大小变化
    const handleResize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mobile-container">
      {/* 空白框架 */}
      <div className="empty-container">
        <div className="size-display">
          {windowSize.width} x {windowSize.height}
        </div>
      </div>
    </div>
  );
}

export default App;
