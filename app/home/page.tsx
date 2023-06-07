"use client";
import { Spin } from "antd";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <Suspense fallback={<Spin />}>
      <div>This is the Homepage</div>
    </Suspense>
  );
};

export default HomePage;
