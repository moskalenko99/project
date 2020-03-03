import React from 'react';
import {
	Link
	} from "react-router-dom";

class Product extends React.Component {

	render(){
		const { data } = this.props;
		
		return (
			<div className="card col-xl-3 col-md-4 col-sm-6 col-xs-12 product-item">
				<img className="card-img-top" src="image/product.png" alt="product" />
				<div className="card-rating">
					<div>
						<img src={`image/rating-${data.rate}.png`} alt="rating"/>
					</div>
					{data.in_stock ? (
						<span>
							<img src="image/check-icon.png" alt="check" />
							в наличии
						</span>
					): <span>нет в наличии</span>}
				</div>
				<p className="card-text">{data.title}</p>
				<div className="row d-flex justify-content-between weight-product">
					{Array.isArray(data.weights) ? data.weights.map(weight => (
						<div>
							<input 
								type="radio"    
								id={`Product-${data.id}-${weight.id}`} 
								name="cc" 
							/>
							<label 
								htmlFor={`Product-${data.id}-${weight.id}`}
							>
							<span></span>
							{`${weight.value}${weight.units}`}
							</label>
						</div>
					)) : null}
				</div>
				<div className=" d-flex justify-content-between price">
					{data.sale ? (
						<div className="discount" >
								<img src="image/discount.png" alt="discount" />
						</div>
					): (<div class="d-flex align-items-center cost" >
								<img src="image/cost.png" alt="discount" />
							</div>)}
						<div className="btn-buy">
							<button className="btn"><Link to={`/${data.id}`}>Купить</Link></button>
						</div>
				</div>
			</div>
		);
	}
}

export default Product;
