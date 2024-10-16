import { DonorDetail } from "@/components/DonorDetail";
import Layout from "@/components/Layout/Layout";
import React from "react";

const DonorDetailPage = () => {
  return (
    <div className="bg-white">
      <Layout>
        <DonorDetail />
      </Layout>
    </div>
  );
};

export default DonorDetailPage;
