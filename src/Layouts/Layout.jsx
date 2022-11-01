import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-20 max-w-[1200px] mx-auto">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
