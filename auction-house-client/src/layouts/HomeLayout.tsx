import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}
