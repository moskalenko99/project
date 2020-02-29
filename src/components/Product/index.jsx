import React from 'react';

const Product = (props) => {
  console.log(props);
  return (
    <div className="card col-xl col-md-5 product-item">
        <img className="card-img-top" src="image/product.png" alt="product" />
        <div className="card-rating">
            <div>
                <img src="image/rating-3.png" alt="rating" />
            </div>
            <span>
                <img src="image/check-icon.png" alt="check" />
                в наличии
            </span>
        </div>
        <p className="card-text">Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак </p>
        <div className="row d-flex justify-content-between weight-product">
            <div>
                <input type="radio" id="c1" name="cc" />
                <label htmlFor="c1"><span></span>300гр</label>
            </div>
            <div>
                <input type="radio" id="c2" name="cc" />
                <label htmlFor="c2"><span></span>1кг</label>
            </div>
            <div>
                <input type="radio" id="c3" name="cc" />
                <label htmlFor="c3"><span></span>2кг</label>
            </div>
            <div>
                <input type="radio" id="c4" name="cc" />
                <label htmlFor="c4"><span></span>5кг</label>
            </div>
        </div>
        <div className=" d-flex justify-content-between price">
            <div className="discount" >
                <img src="image/discount.png" alt="discount" />
            </div>
            <div className="btn-buy">
                <button className="btn"></button>
            </div>
        </div>
    </div>
  );
};

export default Product;
