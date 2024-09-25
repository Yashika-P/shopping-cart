import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="h-f container mx-auto overflow-auto">
      <div className=" flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl font-bold">Welcome to the Product Page</h1>
        <div className="flex gap-8 flex-wrap">
          {
            products.map((product) => (
              <div key={product.id} className="card w-40 bg-base-100 shadow-xl">
                <figure>
                  <img src={product.image} alt="Shoes" className="w-40 h-24" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-wrap">{product.title}</h2>
                  <div className="card-actions justify-end">
                    <button className="border-2 cursor-pointer p-2 rounded">
                      Buy Now
                    </button>
                    <button
                      className="border-2 cursor-pointer p-2 rounded"
                      onClick={() => {
                        navigate(`/products/${product.id}`);
                    }}>
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
      </div>
    </div>
  );
};

export default Products;