export default function AuctionDescription() {
  return (
    <div className="bg-slate-200 rounded-md p-3">
      <div className="flex gap-8">
        <div>
          <span className="font-bold">Start price:</span> $200
        </div>
        <div>
          <span className="font-bold">Step price:</span> $200
        </div>
      </div>
      <div>
        <span className="font-bold">Current:</span> $2000000000
      </div>
      <div>
        <span className="font-bold">Bids:</span> 20
      </div>
      <div>
        <span className="font-bold">Participants:</span> 5
      </div>
      <div>
        <span className="font-bold">Your bids:</span> N/A
      </div>
    </div>
  );
}
