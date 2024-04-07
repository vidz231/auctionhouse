import ProductItem from "./components/ProductItem";

export default function Shop() {
  return (
    <div>
      <div className="bg-slate-200 grid grid-cols-3 border rounded-md px-16 gap-8">
        <div className="bg-red-200">
          <div className="flex px-2 pt-2">
            <div className="bg-red-300 aspect-square h-[80px]">Image</div>
            <div className="ml-2">
              <div className="font-bold text-white text-xl">Shop name</div>
              <div className="text-slate-500 text-base italic">
                Tp.HCM, Vietnam
              </div>
            </div>
          </div>
          <div className="flex gap-4 px-2 py-2">
            <div className="w-full py-0.5 px-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-semibold text-sm flex justify-center">
              Follow
            </div>
            <div className="w-full py-0.5 px-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-semibold text-sm flex justify-center">
              Chat
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between py-4">
          <div className="row-span-1">
            Products:{" "}
            <span className="ml-1 text-blue-500 font-semibold">123</span>
          </div>
          <div className="row-span-1">
            Feedbacks: <span>123</span>
          </div>
          <div className="row-span-1">
            Selled: <span>123</span>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between py-4">
          <div className="row-span-1">
            Followers: <span>123</span>
          </div>
          <div className="row-span-1">
            Rating: <span>123</span>
          </div>
          <div className="row-span-1">
            Created at: <span>123</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex font-light border mt-4">
          <div className="py-2 px-6 text-xl border-b-red-500 border-b-2">
            Products
          </div>
          <div className="py-2 px-6 text-xl">Feedbacks</div>
        </div>
        <div className="border mt-4 grid grid-cols-12">
          <div className="col-span-2 p-2 px-4">
            <div className="py-1">Ahihi</div>
            <div className="py-1">Ahihi</div>
            <div className="py-1">Ahihi</div>
          </div>
          <div className="col-span-10 grid grid-cols-4 gap-4 p-4">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
}
