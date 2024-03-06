import { useState } from "react";
import "./App.css";
import MoviList from "./cine/MoviList";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { MovieContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MoviList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
