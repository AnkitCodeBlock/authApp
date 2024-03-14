'use client'
import Link from "next/link";
import Image from "next/image";



const Product = ({ products }) => {
  // const {data:product,isLoading,isError}=useFetchProductsQuery();
  //   const [addToCart]=useAddToCartMutation();

  //   const handleAddtoCart=async (productId)=>{
  //       try{
  //           await addToCart(productId);
  //       }
  //       catch(error){
  //           console.log("Failed to add item to cart",error);
  //       }
  //   };
  
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {products.map((item) => (
        
          <div className="border-[1px] border-gray-500 rounded-md overflow-hidden hover:border-gray-950 duration-300">
            <Image
              src={item?.image}
              width={500}
              height={500}
              alt="product image"
              className="w-full h-80 object-cover"
            />
            <hr />
            <div className="px-4 pb-2 text-sm flex flex-col gap-1">
              <p className="text-gray-600">{item?.title}</p>
              <p className="font-semibold">$ {item?.price}</p>
              <div className="flex items-center justify-between">
                <button className="p-1 bg-blue-500 rounded-md hover:bg-blue-600" >
                  Add to Cart
                </button>
                <Link
                  href={{ pathname: "/singleproduct", query: { _id: item._id } }}
                  key={item._id}
                >
                <button className="uppercase text-xs font-semibold hover:text-blue-700 duration-200">
                  More Info
                </button>
                </Link>
              </div>
            </div>
          </div>
        
      ))}
    </div>
  );
};

export default Product;
