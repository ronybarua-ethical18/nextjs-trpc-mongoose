 import Register from "@/components/layout/auth/Register";
import React from "react";

const ProtectedPage = () => {
  return (
    <>
      <div className="flex justify-center items-center border h-[100vh]">
        <Register />
      </div>
    </>
  );
};

export default ProtectedPage;
