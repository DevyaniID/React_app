


import Header from "./component/Header.jsx";
import Slider from "./component/Slider.jsx";
import Footer from "./component/Footer.jsx";
import Product from "./component/Product.jsx";

function App() {
  const products = [
    {
      id: 1,
      title: "Aquatic Animals",
       image: "/imgs/BlueWhale.jpg",
    },
    {
      id: 2,
      title: " Reptiles",
      image: "/imgs/Turtle.jpg",
     
    },
    {
      id: 3,
      title: " Mammals",
      image: "/imgs/tiger.jpg",
      
    },
    {
      id: 4,
      title: " Birds",
      image: "/imgs/GreatIndianBustard.jpg",
      
    },
  ];

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

        {/* Products */}
        <div className="container my-4">
          <div className="row g-4">
            {products.map((item) => (
              <div className="col-md-3" key={item.id}>
                <Product title={item.title} image={item.image} />
              </div>
            ))}
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
