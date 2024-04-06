import { Link } from "react-router-dom";

export default function ProductTable() {
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
              <td className="p-2 col-span-2">No</td>
              <td className="p-2 col-span-2">Product</td>
              <td className="p-2 col-span-2">Price</td>
              <td className="p-2 col-span-2">Amount</td>
              <td className="p-2 col-span-2">Owner</td>
              <td className="p-2 col-span-2">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-12 w-full border-b font-light hover:bg-slate-100 items-center">
              <td className="p-2 col-span-1">1</td>
              <td className="p-2 col-span-3">
                Ahihi ahihhohoasdqwe oqowieqw oiqweqe oqiwow
              </td>
              <td className="p-2 col-span-2">240</td>
              <td className="p-2 col-span-2">30</td>
              <td className="p-2 col-span-2">Owner</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
