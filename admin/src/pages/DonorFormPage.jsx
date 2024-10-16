import React from "react";
import DonorForm from "../components/DonorForm";
import Layout from "@/components/Layout/Layout";

const DonorFormPage = () => {
  return (
    <>
      <Layout>
        <div className="flex min-h-screen  items-center justify-center bg-gray-100 py- px-4">
          <DonorForm />
        </div>
      </Layout>
    </>
  );
};

export default DonorFormPage;
