import React from "react";
import "./App.css";

function App() {
  return (
    <div className="mobile-container">
      {/* 顶部状态栏 */}
      <div className="status-bar">
        <div className="status-left">9:41</div>
        <div className="status-center">
          <div className="notch"></div>
        </div>
        <div className="status-right">
          <span className="battery">100%</span>
          <span className="wifi">📶</span>
        </div>
      </div>

      {/* 主内容区域 */}
      <div className="app-content">
        <h1 className="app-title">我的应用</h1>
        <div className="content-section">
          <p>欢迎使用我的移动风格应用</p>
          <p>上滑查看更多内容</p>
        </div>
      </div>

      {/* 底部导航栏 */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon">🏠</div>
          <div className="nav-text">首页</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon">🔍</div>
          <div className="nav-text">搜索</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon">⚙️</div>
          <div className="nav-text">设置</div>
        </div>
      </div>
    </div>
  );
}

export default App;
