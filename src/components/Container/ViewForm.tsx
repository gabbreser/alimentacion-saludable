import React from "react";

type Props = {
  children: React.ReactNode;
  header?: React.ReactNode;
  style?: React.CSSProperties;
  width?: string;
};

const ViewForm = ({ header, children, style, width }: Props) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}>
      {header}
      <div
        style={{
          //margin: "50px auto",
          //background: "var(--color-white)",
          maxWidth: width ?? "600px",
          padding: "30px 16px",
          width: "100%",
          //border: "1px solid #e1e2f0",
          //boxShadow:
          //  "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
          transition: "all 0.3s ease",
        }}>
        {children}
      </div>
    </div>
  );
};
export default ViewForm;
