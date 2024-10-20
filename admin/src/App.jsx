import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout";
import DonarList from "./pages/DonarList";
import AdminHeader from "./components/AdminHeader";
import Sidebar from "./components/Sidebar";
import DonorForm from "./components/DonorForm";
import DonorFormPage from "./pages/DonorFormPage";
import { DonorDetail } from "./components/DonorDetail";
import DonorDetailPage from "./pages/DonorDetailPage";
import RecipientFormPage from "./pages/RecipientFormPage";
import RecipientsLists from "./pages/RecipientsLists";
import { RecipientDetail } from "./components/Recipient-detail";
import RecipientDetailPage from "./pages/Recipient-detail-page";
import BloodTypes from "./components/blood-types";
function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hello world</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RecipientFormPage />} />
          <Route path="/recipients" element={<RecipientsLists />} />
          <Route
            path="/recipients/update/:id"
            element={<RecipientFormPage />}
          />
          <Route
            path="/recipient/detail/:id"
            element={<RecipientDetailPage />}
          />
          <Route
            path="/blood-types"
            element={
              <>
                <Layout>
                  <BloodTypes />
                </Layout>
              </>
            }
          />
          <Route
            path="/donors"
            element={
              <>
                <DonarList />
              </>
            }
          />
          <Route path="/donors/:bloodType" element={<DonarList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route
            path="/donors/register"
            element={
              <>
                <DonorFormPage />
              </>
            }
          />
          <Route
            path="/donors/:id/edit"
            element={
              <>
                <DonorFormPage />
              </>
            }
          />

          <Route
            path="/donor/detail/:id"
            element={
              <>
                {/* <AdminHeader /> */}
                <DonorDetailPage />
                {/* <Sidebar/> */}
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
