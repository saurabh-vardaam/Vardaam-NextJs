import React, { ReactNode } from "react";
import HeaderBar from "./HeaderBar";

interface GlobalWrapperProps {
  children: ReactNode;
}

export default function Layout({ children }: GlobalWrapperProps) {
  return (
    <>
    <div className="global-wrapper">
      <HeaderBar />
      <main className="lg:pt-28">
        {children}
      </main>
    </div>
    </>
  );
}