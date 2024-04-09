import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET } from "../../../utils/request";

export default function AuctionItem({ product }: { product: any }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    (async () => {
      const imageLink = (product._links.image.href + "").replace(
        import.meta.env.VITE_SERVER_URL,
        ""
      );
      const image = (await GET(imageLink))._embedded.images[0].url;
      setImage(image);
    })();
  }, []);
  // console.log(product.)
  return (
    <div className="border rounded-md bg-slate-100 flex gap-4">
      <div
        className="bg-red-300 aspect-square h-full"
        style={{ backgroundImage: `url(${image})` }}
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
          to={`/product/${product.id}`}
          className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-sm"
        >
          Enter auction
        </Link>
      </div>
    </div>
  );
}
