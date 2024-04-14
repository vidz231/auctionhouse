import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET } from "../../../utils/request";
import { Pagination } from "@mui/material";

const ProductItem = ({ product }: { product: any }) => {
  const [owner, setOwner] = useState("");
  useEffect(() => {
    (async () => {
      const ownerLink = (product._links.owner.href + "").replace(
        import.meta.env.VITE_SERVER_URL,
        ""
      );
      const owner = (await GET(ownerLink)).name;
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
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page");
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    size: 10,
    totalElements: 1000,
    totalPages: 20,
    number: 1,
  });
  useEffect(() => {
    (async () => {
      let fetchUrl;
      if (!page) {
        fetchUrl = "/api/products?page=0";
      } else {
        fetchUrl = `/api/products?page=${page}`;
      }
      const data = await GET(fetchUrl);
      const products = data._embedded.products;
      const pagination = data.page;
      pagination.totalPages--;
      setProducts(products);
      setPagination(pagination);
    })();
  }, []);

  const handlePageChange = async (e: any, value: any) => {
    window.location.href =
      import.meta.env.VITE_CLIENT_URL + `/admin/product?page=${value}`;
  };

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
              <ProductItem key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        {pagination && (
          <Pagination
            page={pagination.number}
            count={pagination.totalPages}
            defaultPage={0}
            shape="rounded"
            className="my-4"
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
