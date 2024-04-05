export default function Banner() {
  return (
    <div className="w-full h-[450px] bg-slate-300">
      <div className="flex h-full">
        <div className="bg-red-100 w-[700px] flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <span className="block font-bold text-2xl">
              You are interested in orchids?
            </span>
            <span className="block text-sm">
              Want some places to share your hobby
            </span>
            <span className="block text-sm">
              Some place to sell and buy cool stuffs
            </span>
            <span className="block text-md font-bold">If so, welcome to</span>
            <span className="block text-md font-bold text-5xl lobster-regular">
              Auction House
            </span>
            <div className="flex gap-4">
              <a
                href="/register"
                className="font-bold text-white text-sm rounded-md bg-red-400 py-2 px-3 cursor-pointer"
              >
                Join with us
              </a>
              <div className="font-bold text-white text-sm rounded-md bg-black py-2 px-3 cursor-pointer">
                Explore
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="aspect-video h-5/6 flex">
            <div
              className="aspect-square w-4/6 rounded-lg bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/towering-tropical-tree-with-vibrant-orchids_1268-34978.jpg?w=826)",
              }}
            ></div>
            <div className="w-1/4 ml-4">
              <div className="font-bold text-md">Vibrant orchids</div>
              <div>Rating</div>
              <div className="font-bold">$300</div>
              <div className="inline-block font-bold text-white text-xs rounded-md bg-black py-2 px-3 cursor-pointer hover:bg-slate-800">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
