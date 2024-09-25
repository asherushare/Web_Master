import Product from "./product.jsx";


function ProductTab() {
  let options = ["durable", "costly", "strong"];
  let options2 = {
    name: "Patra",
    age: "kirsani",
    wife: "Mettle",
    age: 23
  }
  return (
    <>
      <Product title="Mettle"/>
      <Product title="patra"/>
      <Product title="Laptop"/>
    </>
  );
}

export default ProductTab;