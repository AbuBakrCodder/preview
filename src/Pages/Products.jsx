import { useState } from "react"
import fetchData from "../hooks/useFetch";

function Products() {
    let { data: products, loading, error } = fetchData("https://dummyjson.com/products")
    console.log(products && products);

    return (
        <div>
            {error && <h1>Error: {error}</h1>}
            {loading && <div className="flex items-center justify-center w-full h-full absolute top-0 bottom-0 z-15 bg-[#00000094] ">
                <h1 className="text-4xl text-center font-bold my-5">Loading <span className="loading loading-dots loading-xl"></span></h1>
            </div>}
            <h1 className="text-center text-4xl font-black my-5">Products</h1>
            <div className="flex items-center justify-around gap-3 flex-wrap my-5">
                {products && products.products.map((p) => {
                    return (
                        <div key={p.id} className="bg-gray-400 p-4 rounded-2xl text-white h-[500px]">
                            <img src={p.thumbnail} alt="" />
                            <div className="flex flex-col w-[80%] gap-2">
                                <h1 className="text-md font-bold w-[80%]">{p.title}</h1>
                                <p className="w-[50%]">{p.rating}</p>
                                <p className="w-[50%]">{p.price}$</p>
                                <p className="">Discount Percentage: {p.discountPercentage}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products
