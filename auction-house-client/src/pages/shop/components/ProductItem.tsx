import { Rating } from "@mui/material";
import { GET } from "../../../utils/request";
import { useEffect, useState } from "react";

export default function ProductItem({ product }: { product: any }) {
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
  return (
    <div className="border rounded-md bg-slate-100 flex flex-col">
      {image && (
        <div
          className="bg-red-300 aspect-square h-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      {/* <div className="bg-red-300 aspect-square h-full">Image</div> */}
      <div className="m-2">
        <div className="font-semibold text-sm truncate">{product.name}</div>
        <div className="flex">
          <Rating name="read-only" value={4} readOnly size="small" />
          <div className="text-sm ml-2">Selled 192</div>
        </div>
        <div className="font-semibold text-sm">
          ${Number(product.price).toLocaleString()}
        </div>
        <div className="italic text-slate-500">Tp.HCM, Vietnam</div>
      </div>
    </div>
  );
}
