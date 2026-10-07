import {
  Box,
  Typography,
} from "@mui/material";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import PortfolioHome from "./pages/PortfolioHome";
import PortfolioView from "./pages/PortfolioView";
import AlertsPage from "./pages/AlertsPage";

import SecurityMaster from "./pages/SecurityMaster";
import AssetClasses from "./pages/AssetClasses";
import InvestmentThemes from "./pages/InvestmentThemes";

import PortfolioSidebar from "./components/PortfolioSidebar";


function ComingSoon({
  title
}) {

  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Typography
        variant="h4"
      >
        {title}
      </Typography>
    </Box>
  );
}


/* =========================================
   PORTFOLIO APPLICATION LAYOUT
========================================= */

function PortfolioLayout() {

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--page-background)",
      }}
    >

      <PortfolioSidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >

        <Outlet />

      </Box>

    </Box>
  );
}


/* =========================================
   APP
========================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* =================================
            ROOT
        ================================= */}

        <Route
          path="/"
          element={
            <Navigate
              to="/portfolios"
              replace
            />
          }
        />


        {/* =================================
            APPLICATION LAYOUT
        ================================= */}

        <Route
          element={
            <PortfolioLayout />
          }
        >

          {/* Dashboard */}

          <Route
            path="/portfolios"
            element={
              <PortfolioHome />
            }
          />


          {/* Create Portfolio */}

          <Route
            path="/portfolios/create"
            element={
              <ComingSoon
                title="Create Portfolio"
              />
            }
          />


          {/* Portfolio Details */}

          <Route
            path="/portfolios/:portfolioId"
            element={
              <PortfolioView />
            }
          />


          {/* Alerts */}

          <Route
            path="/alerts"
            element={
              <AlertsPage />
            }
          />


          {/* =================================
              USM PAGES
          ================================= */}

          <Route
            path="/securities"
            element={
              <SecurityMaster />
            }
          />


          <Route
            path="/asset-classes"
            element={
              <AssetClasses />
            }
          />


          <Route
            path="/themes"
            element={
              <InvestmentThemes />
            }
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}


export default App;
