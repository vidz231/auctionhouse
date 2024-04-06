import ChatItem from "./components/ChatItem";
import BidItem from "./components/BidItem";
import ProductItem from "./components/ProductItem";
import AuctionDescription from "./components/AuctionDescription";

export default function Auction() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-5 bg-red-300 rounded-md">
        <div className="font-bold py-2 pl-4 border-b">Description</div>
        <div className="flex flex-col gap-2 p-2">
          <ProductItem />
          <AuctionDescription />
        </div>
      </div>
      <div className="col-span-3">
        <div className="bg-red-300 rounded-md">
          <div className="font-bold py-2 pl-4 border-b">Bids</div>
          <div className="h-[460px] flex flex-col gap-4 overflow-y-scroll text-sm p-4">
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
            <BidItem />
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="bg-red-300 rounded-md relative">
          <div className="font-bold py-2 pl-4 border-b">Live chat</div>
          <div className="h-[460px] flex flex-col gap-4 overflow-y-scroll text-sm p-2">
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </div>
          <input
            className="absolute bottom-0 border without-ring w-full p-2 border-t bg-slate-300 text-black rounded-b-md"
            placeholder="Write comment"
          />
        </div>
      </div>
    </div>
  );
}
