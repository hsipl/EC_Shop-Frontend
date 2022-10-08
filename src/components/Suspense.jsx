import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin tip="Loading..." size="large"></Spin>
    </div>
  );
};

export const Suspense = (Component) => (props) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Component {...props} />
    </React.Suspense>
  );
};
