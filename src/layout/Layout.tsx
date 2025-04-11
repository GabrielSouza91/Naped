"use client";

import { Footer } from "@/components/Footer/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
}
