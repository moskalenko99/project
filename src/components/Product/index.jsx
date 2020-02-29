import React from 'react';

const Product = ({ data }) => {
  return (
    <div className="card col-xl-3 col-md-4 col-sm-6 col-xs-12 product-item">
        <img className="card-img-top" src="image/product.png" alt="product" />
        <div className="card-rating">
            <div>
                <img src="image/rating-3.png" alt="rating" />
            </div>
            {data.in_stock ? (
                <span>
                    <img src="image/check-icon.png" alt="check" />
                    в наличии
                </span>
            ): null}
        </div>
        <p className="card-text">Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак </p>
        <div className="row d-flex justify-content-between weight-product">
            {Array.isArray(data.weights) ? data.weights.map(weight => (
                <div>
                    <input 
                        type="radio"    
                        id="{`Product-${data.id}-${weight.id}`}" 
                        name="cc" 
                    />
                    <label 
                        htmlFor="{`Product-${data.id}-${weight.id}`}"
                    >
                    <span></span>
                    {`${weight.value}${weight.units}`}
                    </label>
                </div>
            )) : null}
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
