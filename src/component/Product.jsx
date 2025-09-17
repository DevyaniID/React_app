import React from "react";

function Product({ title, image, price }) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <button type="button" class="btn btn-outline-primary">Explore</button>
      </div>
    </div>
  );
}

export default Product;
