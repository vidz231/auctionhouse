import { Link } from "react-router-dom";

export default function ProductItem() {
  return (
    <div className="border rounded-md bg-slate-100 flex gap-4">
      <div className="bg-red-300 aspect-square h-full">Image</div>
      <div className="mt-2">
        <div className="font-bold">The name of a auction product</div>
        <div className="italic text-slate-500">by Nguyen Van Hieu</div>
        <div className="italic text-slate-500">Tp.HCM, Vietnam</div>
        <div className="font-bold">$123045</div>
        <Link
          to="/product"
          className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-sm"
        >
          Buy
        </Link>
      </div>
    </div>
  );
}
