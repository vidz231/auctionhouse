export default function ProductItem() {
  return (
    <div className="bg-slate-200 rounded-md p-3">
      <div>
        <div>
          <div className="flex">
            <div className="bg-red-300 aspect-square h-[200px]">Image</div>
            <div className="px-4">
              <div className="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="italic text-slate-500">Vietnam</div>
              <div className="italic font-bold mt-4">$206</div>

              <input
                placeholder="Money"
                className="border without-ring px-2 py-1 w-[160px] mr-4"
              />
              <div className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-sm">
                Bid
              </div>
            </div>
          </div>
          <div className="mt-4 flex">
            <div className="bg-red-300 aspect-square h-[100px]">Image</div>
            <div className="ml-2">
              <div className="font-bold">Victoria Secret</div>
              <div className="italic">Tp.HCM, Vietnam</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
