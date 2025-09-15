import { useState } from "react";
import Header from "./component/Header.jsx";
import Slider from "./component/Slider.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <div className="container-fluid">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>

        {/* Slider */}
        <div className="row">
          <div className="col-12">
            <Slider />
          </div>
        </div>

        {/* Footer */}
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;