import "./App.css";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout";
import DonarList from "./pages/DonarList";
import DonorFormPage from "./pages/DonorFormPage";
import DonorDetailPage from "./pages/DonorDetailPage";
import RecipientFormPage from "./pages/RecipientFormPage";
import RecipientsLists from "./pages/RecipientsLists";
import RecipientDetailPage from "./pages/Recipient-detail-page";
import BloodTypes from "./components/blood-types";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {/* Directly navigate to /login */}
          <Route path="/login" element={<Login />} />

          {/* Define other routes */}
          <Route path="/dashboard" element={<Dashboard />} />
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
              <Layout>
                <BloodTypes />
              </Layout>
            }
          />
          <Route path="/donors" element={<DonarList />} />
          <Route path="/donors/:bloodType" element={<DonarList />} />
          <Route path="/donors/register" element={<DonorFormPage />} />
          <Route path="/donors/:id/edit" element={<DonorFormPage />} />
          <Route path="/donor/detail/:id" element={<DonorDetailPage />} />

          {/* Redirect root path to /login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Catch-all for invalid routes */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
