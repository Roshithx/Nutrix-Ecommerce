import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { Link, useParams } from "react-router-dom";

import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
import { ShopContext } from "../context /ShopContext";


const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const [imgCoordinate, setImgCoordinate] = useState({
    x: 0,
    y: 0,
  });

  const [zoomImage, setzoomImage] = useState(false);

  const descriptionRef = useRef(null); // Ref to the description div

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Function to scroll to the description div
  const handleViewMore = () => {
    descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleZoomImg = useCallback(
    (e) => {
      setzoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();

      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setImgCoordinate({
        x,
        y,
      });
    },
    [imgCoordinate]
  );

  const handleaveZoomImg = () => {
    setzoomImage(false);
  };

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((item) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] relative">
            <img
              className="w-full h-auto"
              src={image}
              alt=""
              onMouseMove={handleZoomImg}
              onMouseLeave={handleaveZoomImg}
            />
            {zoomImage && (
              <div className="hidden lg:block absolute w-[600px] overflow-hidden min-h-[550px]  p-1 -right-[610px] top-0">
                <div
                  className="w-full h-full min-h-[550px] min-w-[600px]  scale-110  "
                  style={{
                    backgroundImage: `url(${image}) 
`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${imgCoordinate.x * 100}% ${
                      imgCoordinate.y * 100
                    }%`,
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>

        {/* Product details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className="pl-2 text-gray-500">(3552)</p>
          </div>
          <p className="mt-5 text-2xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-500 mt-5 md:w-4/5">
            {productData.description.slice(0, 200) + "..."}{" "}
            <button onClick={handleViewMore} className="text-black underline">
              View More
            </button>
          </p>
          <button
            onClick={() => addToCart(productData._id)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-5"
          >
            ADD TO CART
          </button>
          <hr className="mt-10 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Free Shipping & Cash on Delivery Available</p>
            <p>Easy Returns & Exchange policy within 14 days</p>
          </div>
        </div>
      </div>

      <div className="mt-20" ref={descriptionRef}>
        <div id="des" className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(155)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>{productData.description}</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} />
    </div>
  ) : (
    <div className="opacity-0 "></div>
  );
};

export default Product;
