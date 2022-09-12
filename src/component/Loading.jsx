import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div>
      <PropagateLoader
        height="80"
        width="80"
        radius="9"
        color="#272836"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
        size={50}
      />
    </div>
  );
};

export default Loading;
