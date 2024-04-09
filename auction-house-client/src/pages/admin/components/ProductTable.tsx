import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET } from "../../../utils/request";

const ProductItem = ({ product }: { product: any }) => {
  const [owner, setOwner] = useState("");
  useEffect(() => {
    (async () => {
      let ownerLink = (product._links.owner.href + "").replace(
        import.meta.env.VITE_SERVER_URL,
        ""
      );
      let owner = (await GET(ownerLink)).name;
      console.log(owner);
      setOwner(owner);
    })();
  }, []);
  return (
    <tr className="grid grid-cols-12 w-full border-b font-light hover:bg-slate-100 items-center">
      <td className="p-2 col-span-1">{product.id}</td>
      <td className="p-2 col-span-3">{product.name}</td>
      <td className="p-2 col-span-2">{product.price}</td>
      <td className="p-2 col-span-2">{product.remain}</td>
      <td className="p-2 col-span-2">{owner}</td>
      <td className="p-2 col-span-2 flex gap-4 text-white">
        <Link
          to="/admin/product/create"
          className="px-3 py-1 hover:bg-blue-400 font-semibold rounded-md bg-blue-500"
        >
          Edit
        </Link>
        <div className="px-3 py-1 hover:bg-red-400 font-semibold bg-red-500 rounded-md">
          Delete
        </div>
      </td>
    </tr>
  );
};

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      let products = (await GET("/api/products?page=1"))._embedded.products;
      setProducts(products);
    })();
  }, []);
  return (
    <div>
      <div className="flex justify-between mr-4">
        <div className="text-xl font-bold">Product</div>
        <Link
          to="/admin/product/create"
          className="px-3 py-1 hover:bg-blue-400 font-semibold text-white rounded-md bg-blue-500"
        >
          Create
        </Link>
      </div>
      <div>
        <table className="w-full">
          <thead className="">
            <tr className="border-b grid grid-cols-12 w-full justify-end">
              <td className="p-2 col-span-2">ID</td>
              <td className="p-2 col-span-2">Product</td>
              <td className="p-2 col-span-2">Price</td>
              <td className="p-2 col-span-2">Amount</td>
              <td className="p-2 col-span-2">Owner</td>
              <td className="p-2 col-span-2">Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any) => (
              <ProductItem product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
