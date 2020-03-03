import React, { Component } from 'react';
import Product from './../components/Product';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Recommendations from './../components/Recommendations';

const mockedData = [
  {
    id: 0,
    image: 'image/product.png',
    rate: 2,
    in_stock: true,
    title: "Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    weights: [
      {
        id: 0,
        value: 300,
        units: 'гр',
      },
      {
        id: 1,
        value: 1,
        units: 'кг',
      },
      {
        id: 2,
        value: 2,
        units: 'кг',
      },
      {
        id: 3,
        value: 5,
        units: 'кг',
      }
    ],
    price: 500,
    sale: 450,
    priceUnit: 'RUB'
  },
  {
    id: 1,
    image: 'image/product.png',
    rate: 4,
    in_stock: false,
    title: "Сухой корм ",
    price: 500,
    sale: 450,
    priceUnit: 'RUB'
  },
  {
    id: 2,
    image: 'image/product.png',
    rate: 5,
    in_stock: true,
    title: "1234",
    price: 500,
    priceUnit: 'RUB'
  }

];

class CatalogPage extends Component {
  state = {
    productList: mockedData
  };

  render = () => {
    const { productList } = this.state;

    return (
      <React.Fragment>
				
				<Header />
				<Recommendations />

				<div className="container">
						<div className="row product">
								{productList.map(product => (
									<Product
										key={`Product-${product.id}`}
										data={product}
									/>
								))}
						</div>
				</div>

				<Footer />
      
      </React.Fragment>
    );
  };
}

export default CatalogPage;
