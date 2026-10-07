import { NavLink } from "react-router-dom";
import "./PortfolioSidebar.css";

function PortfolioSidebar() {
  return (
    <aside className="portfolio-sidebar">

      <div className="sidebar-brand">
        <div className="sidebar-brand-title">
          Portfolio Management
        </div>
        <div className="sidebar-brand-subtitle">
          Investment Platform
        </div>
      </div>

      <nav className="sidebar-nav">

        <NavLink
          to="/portfolios"
          className="sidebar-link"
        >
          <span className="sidebar-icon">▣</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/securities"
          className="sidebar-link"
        >
          <span className="sidebar-icon">◆</span>
          <span>Securities</span>
        </NavLink>

        <NavLink
          to="/asset-classes"
          className="sidebar-link"
        >
          <span className="sidebar-icon">◈</span>
          <span>Asset Classes</span>
        </NavLink>

        <NavLink
          to="/themes"
          className="sidebar-link"
        >
          <span className="sidebar-icon">●</span>
          <span>Investment Themes</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default PortfolioSidebar;
