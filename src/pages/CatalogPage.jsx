import React, { Component } from 'react';
import Product from './../components/Product/index.jsx';

const mockedData = [
  {
    id: 0,
    image: 'image/product.png',
    rate: 3,
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
    title: "Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    price: 500,
    sale: 450,
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
      <header>
          <div className="header">
              <div className="header__top">
                  <div className="logo">
                      <img src="image/logo-final-1.png" alt="logo" />
                  </div>
                  <div className="contacts">
                      <div className="contacts-numder">
                          <img src="image/phone-icon.png" alt="phone" />
                          <span className="number">
                              +7 (4872) 71-71-71
                          </span>
                      </div>
                      <div className="contacts-address">
                          <img src="image/location-icon.png" alt="location" />
                          <span className="address">
                              г. Тула, ул. Пузакова, 44
                          </span>
                      </div>
                  </div>
                  <div className="header__search">
                      <input type="text" placeholder="Поиск по товарам" />
                      <div className="search">
                          <img className="search-icon" src="image/search-icon.png" alt="search" />
                          <a href="#">Найти</a>
                      </div>
                  </div>
                  <div className="header__private__cabinet">
                      <div className="user">
                          <img className="user__icon" src="image/user-icon.png" alt="user" />
                      </div>
                      <div className="private">
                          <a className="private__cabinet" href="#">Личный кабинет</a>
                      </div>
                  </div>
                  <div className="header__basket">
                      <div className="cart">
                          <img className="cart__icon" src="image/cart-icon.png" alt="cart" />
                      </div>
                      <div className="basket">
                          <a className="basket__link" href="#">Корзина</a>
                      </div>
                  </div>
              </div>
              <div className="header__bottom">
                  <div className="menu-item">
                      <a href="#">
                          <img src="image/cat-icon.png" alt="cat" />
                      </a>
                  </div>
                  <div className="menu-item">
                      <a href="#">
                          <img src="image/dog-icon.png" alt="dog" />
                      </a>
                  </div>
                  <div className="menu-item">
                      <a href="#">
                          <img src="image/mouse-icon.png" alt="mouse" />
                      </a>
                  </div>
                  <div className="menu-item">
                      <a href="#">
                          <img src="image/fish-icon.png" alt="fish" />
                      </a>
                  </div>
                  <div className="menu-item">
                      <a href="#">
                          <img src="image/chicken-icon.png" alt="bird" />
                      </a>
                  </div>
                  <div className="menu-item">
                      <a href="#">
                          <img src="image/pig-icon.png" alt="farm_animal" />
                      </a>
                  </div>
              </div>
          </div>
      </header>

      <div className="menu">
          <div className="kitten">
              <img src="image/kitten.png" alt="kitten" />
          </div>
          <div className="button-buy">
              <button className="button"></button>
          </div>
          <div className="item-list">
              <div className="grandorf-image">
                  <img src="image/grandorf-pack.png" alt="grandorf" />
              </div>
              <div className="description">
                  <span className="range">
                      в ассортименте <br /> 400г, 700г, 800г
                  </span>
                  <div className="buy">
                      <button></button>
                  </div>
              </div>
          </div>
      </div>

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

      <footer>
          <div className="container d-flex align-items-center footer">
                  <div className="footer__nav__contact">
                      <div className="footer__image">
                          <img src="image/logo-final-2.png" alt="logo-final" />
                      </div>
                      <div className="footer__link">
                          <img src="image/phone-icon-footer.png" alt="phone-footer" />
                          <a href="#"> +7 (4872) 71-71-71</a>
                      </div>
                      <div className="footer__link">
                          <img src="image/location-icon-footer.png" alt="location-footer" />
                          <a href="#"> г. Тула, ул. Пузакова, 44</a>
                      </div>
                      <div className="footer__link">
                          <img src="image/mail-icon.png" alt="mail" />
                          <a href="#"> shop@mykengu.ru</a>
                      </div>
                  </div>
                  <div className="footer__nav">
                      <div className="footer__link"><a href="#">Корм для кошек</a></div>
                      <div className="footer__link"><a href="#">Игрушки для кошек</a></div>
                      <div className="footer__link"><a href="#">Витамины для кошек</a></div>
                      <div className="footer__link"><a href="#">Когтеточки и комплексы</a></div>
                      <div className="footer__link"><a href="#">Переноски для кошек</a></div>
                  </div>
                  <div className="footer__nav">
                      <div className="footer__link"><a href="#">Корм для собак</a></div>
                      <div className="footer__link"><a href="#">Игрушки для собак</a></div>
                      <div className="footer__link"><a href="#">Витамины для собак</a></div>
                      <div className="footer__link"><a href="#">Кости и лакомства</a></div>
                      <div className="footer__link"><a href="#">Ошейники, поводки и шлейки</a></div>
                  </div>
                  <div className="footer__nav">
                      <div className="footer__link"><a href="#">Грызуны</a></div>
                      <div className="footer__link"><a href="#">Рыбы</a></div>
                      <div className="footer__link"><a href="#">Птицы</a></div>
                      <div className="footer__link"><a href="#">Сельхоз животное</a></div>
                  </div>
                  <div className="footer__nav">
                      <div className="footer__link"><a href="#">О компании</a></div>
                      <div className="footer__link"><a href="#">Контакты</a></div>
                      <div className="footer__link"><a href="#">Доставка</a></div>
                  </div>
                  <div className="footer__nav">
                      <div className="footer__link"><a href="#">Оплата</a></div>
                      <div className="footer__link"><a href="#">Личный кабинет</a></div>
                      <div className="footer__link"><a href="#">Акции</a></div></div>
          </div>
      </footer>
      </React.Fragment>
    );
  };
}

export default CatalogPage;
