import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import Footer from "./components/Footer";
import HowItworks from "./pages/howItworks";
import { NextUIProvider } from "@nextui-org/react";
import Donars from "./pages/Donars";
import DonorFormPage from "./pages/DonorFormPage";

function App() {
  return (
    <>
      <NextUIProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <HowItworks />
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
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route
              path="/dashboard"
              element={
                <>
                  <AdminHeader />
                  <Sidebar />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/donors"
              element={
                <>
                  <AdminHeader />
                  <Sidebar />
                  <DonarList />
                </>
              }
            /> */}

            <Route
              path="/donorForm"
              element={
                <>
                  <Header />
                  <DonorFormPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/donors_home"
              element={
                <>
                  <Header />
                  <Donars />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
