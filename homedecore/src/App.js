import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
const products = [
  {
    id: 1,
    name: "Elegant Sofa",
    description: "Luxurious sofa for your living room.",
    image: "/images/Sofa.jpg",
    alt:
      "Photo by Martin  Péchy: https://www.pexels.com/photo/2-seat-orange-leather-sofa-beside-wall-1866149/",
    price: 799.99,
    rating: 4.5
  },
  {
    id: 2,
    name: "Modern Coffee Table",
    description: "Sleek and contemporary coffee table for your lounge area.",
    image: "/images/coffeetable.jpg",
    price: 149.99,
    rating: 4.2,
    alt:
      "Photo by Vicky Tran: https://www.pexels.com/photo/round-brown-dining-table-near-brown-couch-3104527/"
  },
  {
    id: 3,
    name: "Chic Wall Clock",
    description:
      "A decorative wall clock to add a touch of elegance to any room.",
    image: "/images/wall-clock.jpg",
    price: 39.99,
    rating: 4.0,
    alt:
      "Photo by Anthony DeRosa: https://www.pexels.com/photo/brown-wooden-framed-clock-showing-2-19-191703/"
  },
  {
    id: 4,
    name: "Cozy Throw Blanket",
    description: "Soft and cozy throw blanket, perfect for chilly evenings.",
    image: "/images/throw-blanket.jpg",
    price: 29.99,
    rating: 4.7,
    alt:
      "Photo by Isabelle Taylor: https://www.pexels.com/photo/black-fujifilm-dslr-camera-90946//"
  }
];

const App = () => {
  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
};

export default App;