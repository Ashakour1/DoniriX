import React from "react";
import RecipientForm from "@/components/RecipientForm";
import Layout from "@/components/Layout/Layout";

const RecipientFormPage = () => {
  return (
    <>
      <Layout>
        <div className="flex min-h-screen  items-center justify-center bg-gray-100 py- px-4">
          <RecipientForm />
        </div>
      </Layout>
    </>
  );
};

export default RecipientFormPage;
