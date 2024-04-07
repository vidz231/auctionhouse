import { Rating } from "@mui/material";

export default function ProductItem() {
  return (
    <div className="border rounded-md bg-slate-100 flex flex-col">
      <div className="bg-red-300 aspect-square h-full">Image</div>
      <div className="m-2">
        <div className="font-bold text-sm">The name of a auction product</div>
        <div className="flex">
          <Rating name="read-only" value={4} readOnly size="small" />
          <div className="text-sm ml-2">Selled 192</div>
        </div>
        <div className="font-bold">$123045</div>
        <div className="italic text-slate-500">Tp.HCM, Vietnam</div>
      </div>
    </div>
  );
}
