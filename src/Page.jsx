import React, { useContext } from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import MoviList from "./cine/MoviList";
import Footer from "./component/Footer";
import { ThemeContext } from "./context";

function Page() {


  const { darkMode } = useContext(ThemeContext);


  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoviList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
