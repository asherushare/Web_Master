import "./Product.css";

function Product({title}) {
  return (
  <div className="Product">
    <h3>{title}</h3>
    <h5>Product description</h5>
    <p>price</p>
    <h4>Features</h4>
    <h4></h4>
  </div>
  )
}

export default Product;