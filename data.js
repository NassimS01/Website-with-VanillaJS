const productsData = [
  {
    id: 1,
    title: "Remera Nike Paris Saint Germain",
    category: "remera",
    price: 12.199,
    imagefront: "./images/products/remera-nike-paris.jpg",
    imageback: "./images/products/remera-nike-paris-espalda.jpg",
  },
  {
    id: 2,
    title: "Buzo Nike Dri-Fit Elemento",
    category: "buzo",
    price: 13.099,
    imagefront: "./images/products/buzo-nike.jpg",
    imageback: "./images/products/buzo-nike-espalda.jpg",
  },
  {
    id: 3,
    title: "Musculosa Under Armour",
    price: 8.999,
    category: "musculosa",
    imagefront: "./images/products/muscu-frente.jpg",
    imageback: "./images/products/muscu-espalda.jpg",
  },
  {
    id: 4,
    title: "Camiseta Oficial Argentina",
    category: "camiseta",
    price: 14.999,
    imagefront: "./images/products/camiseta-arg-frente.jpg",
    imageback: "./images/products/camiseta-arg-espalda.jpg",
  },
  {
    id: 5,
    title: "Camiseta River Titular 21",
    category: "camiseta",
    price: 14.999,
    imagefront: "./images/products/camiseta-river-front.jpg",
    imageback: "./images/products/camiseta-river-back.jpg",
  },
  {
    id: 6,
    title: "Camiseta Boca Titular 21",
    category: "camiseta",
    price: 27.999,
    imagefront: "./images/products/camiseta-boca-front.jpg",
    imageback: "./images/products/camiseta-boca-back.jpg",
  },
  {
    id: 7,
    title: "Camiseta Real Madrid 22",
    category: "camiseta",
    price: 14.999,
    imagefront: "./images/products/camiseta-real-front.jpg",
    imageback: "./images/products/camiseta-real-back.jpg",
  },
  {
    id: 8,
    title: "Camiseta Oficial Uruguay 21",
    category: "camiseta",
    price: 12.199,
    imagefront: "./images/products/camiseta-uru-front.jpg",
    imageback: "./images/products/camiseta-uru-back.jpg",
  },
  {
    id: 9,
    title: "Buzo Topper Oversize Urb",
    category: "buzo",
    price: 9.449,
    imagefront: "./images/products/buzo-topper-front.jpg",
    imageback: "./images/products/buzo-topper-back.jpg",
  },
  {
    id: 10,
    title: "Buzo Puma Power Femenino",
    category: "buzo",
    price: 17.699,
    imagefront: "./images/products/buzo-puma-front.jpg",
    imageback: "./images/products/buzo-puma-back.jpg",
  },
  {
    id: 11,
    title: "Camiseta Umbro Deportiva",
    category: "camiseta",
    price: 4.399,
    imagefront: "./images/products/camiseta-umbro-front.jpg",
    imageback: "./images/products/camiseta-umbro-back.jpg",
  },
  {
    id: 12,
    title: "Camiseta AFA (Mujer)",
    category: "camiseta",
    price: 13.999,
    imagefront: "./images/products/camiseta-arg-front.jpg",
    imageback: "./images/products/camiseta-arg-back.jpg",
  },
];

const splitProducts = (size) => {
  let dividedProducts = [];
  for (i = 0; i < productsData.length; i += size) {
    dividedProducts.push(productsData.slice(i, i + size));
  }
  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(12),
  nextProductsIndex: 1,
  productsLimit: splitProducts(12).length,
};

