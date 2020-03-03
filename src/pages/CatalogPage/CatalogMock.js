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

export default mockedData;