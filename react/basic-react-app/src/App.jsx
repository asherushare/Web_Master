import "./App.css";
import Title from "./title.jsx";
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";

function Description() {
  return <p>This is description box</p>;
}

function App() {

  return (
    <>  
      <ProductTab />
      <Button />
    </>
  );
  
}

export default App;
