import { products } from "../../product-list";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const selectedProductId = productId;
  const selectedProduct = products.filter((product) => product.id === selectedProductId);
  
  return (
    <div>
      <h2>Product Detail</h2>

      <div key={selectedProduct.id}>
        {selectedProduct.image}
        {selectedProduct.name}
        {selectedProduct.price}
        {selectedProduct.description}
      </div>
    </div>
  );
};

export default ProductDetail;
