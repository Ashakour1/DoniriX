import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import { Toaster, toast } from "sonner";
import About from "./pages/About";
import Footer from "./components/Footer";
import AdminHeader from "./components/AdminHeader";

import { NextUIProvider } from "@nextui-org/react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import DonarList from "./pages/DonarList";

function App() {
  return (
    <>
      <NextUIProvider>
        <Toaster richColors position="top-center" />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <NotFound />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <>
                  <AdminHeader />
                  <Sidebar />
                  <Dashboard />
                </>
              }
            />
            <Route path="/donars" element={
              <>
              <AdminHeader/>
              <Sidebar/>
              <DonarList/>
              </>
            }/>
          </Routes>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
