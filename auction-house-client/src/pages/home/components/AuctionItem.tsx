import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET } from "../../../utils/request";

export default function AuctionItem({ product }: { product: any }) {
  console.log(product._links.image);
  const [image, setImage] = useState("");
  useEffect(() => {
    // (async () => {
    //   console.log(product.image.href + "").replace("http://localhost:8080", "");
    //   // console.log(product.image.href);
    //   let image = await GET(product.image.href);
    // })();
  }, []);
  // console.log(product.)
  return (
    <div className="border rounded-md bg-slate-100 flex gap-4">
      <div
        className="bg-red-300 aspect-square h-full"
        style={{ backgroundImage: `url(${product.image.href})` }}
      ></div>
      <div className="mt-2">
        <div className="font-bold truncate">{product.name}</div>
        <div className="italic text-slate-500 text-sm">by Nguyen Van Hieu</div>
        <div className="italic text-slate-500 text-sm">Tp.HCM, Vietnam</div>
        <div className="">
          Time left: <span className="font-bold">12:04:16</span>
        </div>
        <div className="font-bold">${product.price}</div>
        <Link
          to="/product"
          className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-sm"
        >
          Enter auction
        </Link>
      </div>
    </div>
  );
}
