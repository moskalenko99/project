import React from 'react';
import {
Link
} from "react-router-dom";

const data = {
	telephone: '+7 (4872) 71-71-71',
	country: 'г. Тула, ул. Пузакова, 44',
	email: 'shop@mykengu.ru',
}

const cat = {
	foodCat: 'Корм для кошек',
	toysCats: 'Игрушки для кошек',
	vitaminsCats: 'Витамины для кошек',
	clawsCats: 'Когтеточки для кошек',
	carryCats: 'Переноски для кошек'
}

const dog = {
	foodDog: 'Корм для собак',
	toysDog: 'Игрушки для собак',
	vitaminsDog: 'Витамины для собак',
	bonesAndGoodies: 'Кости и лакомства',
	collarsLeashesHarnesses: 'Ошейники, поводки и шлейки'
}


class Footer extends React.Component {

	state = {
		data: data,
		cat: cat,
		dog: dog
	}

	render(){
		const { data, cat, dog } = this.state;
		return (
			<footer>
				<div className="container d-flex align-items-center footer">
					<div className="footer__nav__contact">
						<div className="footer__image">
							<img src="image/logo-final-2.png" alt="logo-final" />
						</div>
						<div className="footer__link">
							<img src="image/phone-icon-footer.png" alt="phone-footer" />
							<a href="#"> {data.telephone}</a>
						</div>
						<div className="footer__link">
							<img src="image/location-icon-footer.png" alt="location-footer" />
							<a href="#"> {data.country}</a>
						</div>
						<div className="footer__link">
							<img src="image/mail-icon.png" alt="mail" />
							<a href="#"> {data.email}</a>
						</div>
					</div>
					<div className="footer__nav">
						{console.log(cat);
						}
						{/* <div className="footer__link">
							<Link to="food-cat">{cat.foodCat}</Link>
						</div>
						<div className="footer__link">
							<Link to="toys-cats">{cat.toysCats}</Link>
						</div>
						<div className="footer__link">
							<Link to="vitamins-cats">{cat.vitaminsCats}</Link>
						</div>
						<div className="footer__link">
							<Link to="claws-cats">{cat.clawsCats}</Link>
						</div>
						<div className="footer__link">
							<Link to="carry-cats">{cat.carryCats}</Link>
						</div> */}
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
						<div className="footer__link"><a href="#">Акции</a></div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;