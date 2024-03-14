"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getSingleProduct } from "../../helpers";


const SingleProduct = ({ searchParams }) => {
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      const _idString = searchParams?._id;
      const _id = Number(_idString);
      const productData = await getSingleProduct(_id);
      setProduct(productData); // Update product state with fetched data
    };

    fetchProduct(); 

    
  }, [searchParams]); 


  return (
    <div className="max-w-screen-xl mx-auto flex items-center gap-10 xl:gap-0">
      {product && (
        <Image
          src={product.image}
          alt="product image"
          width={500}
          height={500}
        />
      )}

      <div className="flex flex-col items-center">
        {product && (
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">{product.title}</p>
            <p>
              <b>Description: </b>
              {product.description}
            </p>
            <p>
              <b>Price:</b> ${product.price}
            </p>
            <p className="capitalize">
              <b>Category:</b> {product.category}
            </p>
            <p className="text-red-600 ">{product.isNew && "New Item"}</p>
          </div>
        )}
        <button
          className="bg-violet-500 w-1/2 p-2 rounded-md mt-2 hover:bg-violet-600"  
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
