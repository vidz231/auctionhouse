import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import FeedbackItem from "./components/FeedbackItem";
import { useEffect, useState } from "react";
import { GET } from "../../utils/request";

export default function SellProduct() {
  const [product, setProduct] = useState();
  const [images, setImages] = useState([]);
  const [owner, setOwner] = useState();
  const { id } = useParams();
  window.scrollTo(0, 0);
  useEffect(() => {
    (async () => {
      const product = await GET(`/api/products/${id}`);
      const owner = await GET(`/api/products/${id}/owner`);
      const images = await GET(`/api/products/${id}/images`);
      setProduct(product);
      setOwner(owner);
      setImages(images._embedded.images.map((item: any) => item.url));
    })();
  }, []);
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">Sell</Link>
        <Link to="/">Other</Link>
        <Typography color="text.primary">{product && product.name}</Typography>
      </Breadcrumbs>
      <div>
        <div className="rounded-md flex gap-4 mt-4 p-2">
          <div className="flex flex-col gap-4">
            {images.length >= 2 &&
              images
                .slice(1)
                .map((item) => (
                  <div
                    className="bg-red-300 aspect-square h-[80px] bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${item})` }}
                  ></div>
                ))}
            {/* <div className="bg-red-300 aspect-square h-[80px]">Image</div> */}
            {/* <div className="bg-red-300 aspect-square h-[80px]"></div> */}
          </div>
          <div
            className="bg-red-300 aspect-square h-[480px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${images[0]})` }}
          ></div>
          <div className="mt-2 mx-4 text-xl flex flex-col gap-2">
            <div className="font-bold text-md">{product && product.name}</div>
            <div className="text-md text-slate-500 italic">
              by {owner && owner.name}
            </div>
            <div className="">Vietnam</div>
            <div className="font-semibold">
              ${Number(product && product.price).toLocaleString()}
            </div>
            <div className="flex gap-4">
              <Link
                to="/product"
                className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-base"
              >
                Add to cart
              </Link>
              <Link
                to="/product"
                className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-base"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <div className="font-bold text-xl mb-4">Description</div>
              <div>{product && product.description}</div>
              <div className="text-slate-500 cursor-pointer">Read less</div>
            </div>
            <div className="col-span-4">
              <div className="font-bold text-xl mb-4">Seller</div>
              <Link to={`/shop/${owner && owner.id}`} className="flex gap-4">
                {owner && (
                  <div
                    className="border rounded-md aspect-square h-[100px] bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${owner.avatarUrl})` }}
                  ></div>
                )}
                <div>
                  <div className="font-semibold">{owner && owner.name}</div>
                  <div className="">{owner && owner.address}</div>
                </div>
              </Link>
            </div>
            <div className="col-span-8">
              <div className="font-bold text-xl mb-4">Feedback</div>
              <div className="flex flex-col gap-8">
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
