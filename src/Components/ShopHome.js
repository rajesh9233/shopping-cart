import React, { useEffect, useState } from "react";
import Header from "./Header";
import Product from "./Product/Product";
import Footer from "./Footer";
import { Row, Col } from "react-bootstrap";
const productData = [
  {
    id: 0,
    name: "Laptop",
    price: { current: "$20", offer: "" },
    rating: 5,
    isCart: false,
    isSale: true,
    img: "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805?k=6&m=1182241805&s=612x612&w=0&h=ynwW02nSQpJvF81rDNpRm0BTfR2IRSlD0qzT2UZkFPk=",
  },
  {
    id: 9,
    name: "Special Item",
    price: { current: "$20", offer: "$18" },
    rating: 4,
    isCart: false,
    isSale: true,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 1,
    name: "Desktop",
    price: { current: "$15", offer: "" },
    rating: 1,
    isCart: false,
    isSale: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Dell_Inspiron_One_23_Touch_AIO_Desktop_PC.png/1200px-Dell_Inspiron_One_23_Touch_AIO_Desktop_PC.png",
  },

  {
    id: 10,
    name: "Sale Item",
    price: { current: "$50", offer: "$25" },
    rating: 3,
    isCart: false,
    isSale: false,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 2,
    name: "Mouse",
    price: { current: "$2", offer: "" },
    rating: 5,
    isCart: false,
    isSale: false,
    img: "https://d2xamzlzrdbdbn.cloudfront.net/products/c053c6b1-bde5-4f44-821b-6fd2a1f64159.jpg",
  },
  {
    id: 8,
    name: "Fancy Product",
    price: { current: "$7", offer: "" },
    rating: 2,
    isCart: false,
    isSale: true,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 3,
    name: "Wireless Mouse",
    price: { current: "$3", offer: "" },
    rating: 5,
    isCart: false,
    isSale: true,
    img: "https://m.timesofindia.com/img/77803535/Master.jpg",
  },
  {
    id: 11,
    name: "Popular Item",
    price: { current: "$40", offer: "" },
    rating: 3,
    isCart: false,
    isSale: true,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 4,
    name: "Keyboard",
    price: { current: "$5", offer: "" },
    rating: 0,
    isCart: false,
    isSale: false,
    img: "https://m.media-amazon.com/images/I/81PLqxtrJ3L._SL1500_.jpg",
  },
  {
    id: 12,
    name: "Sale Item",
    price: { current: "$130", offer: "$60" },
    rating: 3,
    isCart: false,
    isSale: true,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 5,
    name: "Wireless Keyboard",
    price: { current: "$6", offer: "" },
    rating: 4,
    isCart: false,
    isSale: true,
    img: "https://www.powerplanetonline.com/cdnassets/teclado_inalambrico_logitech_k380_gris_oscuro_en_layout_01_l.jpg",
  },
  {
    id: 13,
    name: "Fancy Product",
    price: { current: "$120-$250", offer: "" },
    rating: 0,
    isCart: false,
    isSale: false,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 6,
    name: "Phone",
    price: { current: "$10", offer: "" },
    rating: 1,
    isCart: false,
    isSale: true,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704",
  },
  {
    id: 14,
    name: "Special Item",
    price: { current: "$25", offer: "$18" },
    rating: 3,
    isCart: false,
    isSale: true,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
  {
    id: 7,
    name: "Headphone",
    price: { current: "$7", offer: "" },
    rating: 2,
    isCart: false,
    isSale: false,
    img: "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2018/05/31/source-img/20180531114632_97553.jpg",
  },
  {
    id: 15,
    name: "Popular Item",
    price: { current: "$15", offer: "" },
    rating: 4,
    isCart: false,
    isSale: false,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  },
];
export default function ShopHome() {
  const [productList, setProductList] = useState([]);

  /*CartCount value used in the Header Component* and CardCount values will be changing every handleCart call*/
  const [cartCount, setCartCount] = useState(0);

  /* Set the Initial products*/
  useEffect(() => {
    setProductList(productData);
  }, []);

  /* add and remove items to the cart and set the cart counts */
  const handleCart = (id) => {
    const data = productList.filter((product) => product.id === id);
    data[0].isCart = !data[0].isCart;
    const cartItems = productList.filter((product) => product.isCart === true);
    setCartCount(cartItems.length);
  };

  return (
    <div>
      <Header count={cartCount} />
      <Row className="product-row">
        {productList.length > 0
          ? productList.map((product, i) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={i} className="mt-3 mb-3">
                  <Product product={product} handleCart={handleCart} />
                </Col>
              );
            })
          : null}
      </Row>
      <Footer />
    </div>
  );
}
