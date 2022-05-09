import React from "react";
import Header from "../components/main/header";
import { useHeader } from "../context/headerCtx";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { isShown },
  } = useHeader();

  return (
    <div className="layout">
      {isShown && <Header />}
      {children}
    </div>
  );
};

export default DefaultLayout;