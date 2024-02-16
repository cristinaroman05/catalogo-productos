import { NavLink } from "react-router-dom";
import { products } from "../../product-list";
import"../Products/Products.css"
const Products = () => {
  return (
    <div >
      <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-container">
              <img className="products__image" src={product.image} alt={product.name}/>
              <p>{product.name}</p>
              <NavLink to={`/product-detail/${product.id}`}>Ver producto</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
