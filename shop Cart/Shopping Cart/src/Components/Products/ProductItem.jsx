import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductItem = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    console.log(productId);
    
    useEffect(() => {
        const getProductDetail = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`
            );
            const data = await response.json();
            console.log(data)
            setProduct(data);
        };
        getProductDetail();
    },[]);

    return <div className="h-fit container mx-auto">
        {product ? 
            <div className="flex flex-col md:flex-row m-10">
                <div className="md:w-1/2 p-10">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full"
                    />
                </div>
                <div className="flex flex-col gap-12 md:w-1/2 p-10">
                    <div className="mb-5">
                    <h2 className="text-5xl font-bold ">{product.title}</h2>
                        <h3 className="text-xl text-gray-600 font-semibold font-serif">{product.category}      
                        </h3>
                    </div>
                    <p className="text-gray-700 text-wrap w-3/4">{product.description}</p>
                    <p className="text-gray-700"><span className="font-bold">Price: </span>${product.price}</p>
                    <p className="text-gray-700">
                        Rating: {product.rating?.rate} ({product.rating?.count} reviews)
                    </p>
                </div>
            </div> : <div>Loading....</div>}
    </div>
};

export default ProductItem;