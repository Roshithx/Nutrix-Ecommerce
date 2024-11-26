import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";
import { ShopContext } from "../context /ShopContext";


const Shop = () => {
  const { products , search , showSearch } = useContext(ShopContext)
  const [showfilter, setshowfilter] = useState(true);
  const [filterProducts, setfilterProducts] = useState(products);
  // const [search, setsearch] = useState;
  const [sortfProducts, setsortfProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const handlefilter = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((previous) =>
        previous.filter((item) => item !== e.target.value)
      );
    } else {
      setCategory((previous) => [...previous, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setfilterProducts(productsCopy);
  };

  const sortProduct = (sortOrder) => {
    let fpCopy = [...filterProducts];
  
    switch (sortOrder) {
      case "Low-High":
        fpCopy.sort((a, b) => a.price - b.price);
        break;
  
      case "High-Low":
        fpCopy.sort((a, b) => b.price - a.price);
        break;
  
      default:
        break;
    }
    setfilterProducts(fpCopy);
  };
  

  useEffect(() => {
    sortProduct(sortfProducts);
  }, [sortfProducts]);
  

  useEffect(() => {
    applyFilter();
  }, [category,showSearch,search]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setshowfilter(!showfilter)}
          className="my-3 text-lg flex items-center cursor-pointer gap-2 font-bold text-gray-900 transition-all duration-300 hover:text-indigo-600"
        >
          FILTER
          <img
            className={`h-3 transition-transform duration-300 ${
              showfilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt="Dropdown Icon"
          />
        </p>

        <div
          className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out ${
            showfilter ? "max-h-screen" : "max-h-0"
          } sm:block`}
        >
          <p className="mb-4 text-sm font-semibold text-gray-800 uppercase tracking-wider pl-6">
            Categories
          </p>
          <div className="flex flex-col gap-4 pl-6 pr-6 pb-6">
            {["Protein-Creatine", "Breakfast", "Lunch", "Dinner"].map(
              (category, index) => (
                <p
                  key={index}
                  className="flex items-center gap-3 text-sm font-medium text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-indigo-500 border-gray-300 rounded-md "
                    value={category}
                    onChange={handlefilter}
                  />
                  <span>
                    {category === "Protein-Creatine"
                      ? "Proteins/Creatine"
                      : `${category} Meals`}
                  </span>
                </p>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 sm:px-6">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-6">
          <Title text="ALL" subTitle="PRODUCTS" />

          <select
            className="text-sm sm:text-base border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
            onChange={(e) => setsortfProduct(e.target.value)}
          >
            <option value="Relavant">Sort by: Relevant</option>
            <option value="Low-High">Sort by: Low to High</option>
            <option value="High-Low">Sort by: High to Low</option>
          </select>
        </div>

        {filterProducts.length === 0 && (
          <p className="text-gray-600">
            No products found for selected filters.
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
