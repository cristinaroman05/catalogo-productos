import { products } from "../../product-list";
import { useParams } from "react-router-dom";
import "../ProductDetail/ProductDetail.css"
const ProductDetail = () => {
  const { productId } = useParams();
  
  // Buscar el producto seleccionado por su id
  const selectedProduct = products.find(product => product.id === parseInt(productId));

  // Verificar si no se encontró ningún producto con el id proporcionado
  if (!selectedProduct) {
    return <div>No se encontró el producto con ID: {productId}</div>;
  }

  return (
    <div className="product-detail">
      <h2>Product Detail</h2>

      <div className="product-detail__container" key={selectedProduct.id}>
        <img className="product-detail__image" src={selectedProduct.image} alt={selectedProduct.name} />
        <h3>{selectedProduct.name}</h3>
        <p>Precio: ${selectedProduct.price}</p>
        <p>{selectedProduct.description}</p>
      </div>
    </div>
  );
};



export default ProductDetail;
