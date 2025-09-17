import React from 'react'

function Slider() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleCaptions" 
                  data-bs-slide-to={0} 
                  className="active" 
                  aria-current="true" 
                  aria-label="Slide 1" 
                />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/public/imgs/slide1.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>White Rhino 🦏</h5>
                    <p>Critically endangered, mainly from poaching for their horns.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/public/imgs/slide2.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Red Panda 🐼</h5>
                    <p>Endangered from deforestation and shrinking Himalayan habitats.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/public/imgs/slide3.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Komodo Dragon 🦎</h5>
                    <p>The world’s largest lizard, endangered due to habitat loss and rising sea levels.</p>
                  </div>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
