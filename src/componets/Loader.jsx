import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <RingLoader color="rgba(255, 231, 0, 1)" />
      </div>
    </>
  );
};

export default Loader;
