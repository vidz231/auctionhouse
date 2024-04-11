import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET } from "../../../utils/request";
import moment from "moment";

/**
 * Renders an auction item component.
 * @param {Object} props - The component props.
 * @param {any} props.product - The product data for the auction item.
 * @returns {JSX.Element} The rendered auction item component.
 */
export default function AuctionItem({ product }: { product: any }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    (async () => {
      const imageLink = (product._links.images.href + "").replace(
        import.meta.env.VITE_SERVER_URL,
        ""
      );
      const image = (await GET(imageLink))._embedded.images[0].url;
      setImage(image);
    })();
  }, []);
  // console.log(product.)
  return (
    <div className="border rounded-md bg-slate-100 flex gap-4">
      <div
        className="bg-red-300 aspect-square h-full"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="mt-2">
        <div className="font-bold truncate w-[260px]">{product.name}</div>
        <div className="italic text-slate-500 text-sm">by Nguyen Van Hieu</div>
        <div className="italic text-slate-500 text-sm">Tp.HCM, Vietnam</div>
        <div className="">
          Start in:
          <span className="font-bold text-xs">
            <Time target="2024-04-20" />
          </span>
        </div>
        <div className="font-bold">${product.price}</div>
        <Link
          to={`/product/${product.id}`}
          className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-sm"
        >
          Enter auction
        </Link>
      </div>
    </div>
  );
}

const Time = ({ target }: { target: string }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateTimeRemaining = () => {
    const differenceInSeconds = moment(target).diff(moment(), "seconds");
    const days = Math.floor(differenceInSeconds / (60 * 60 * 24));
    const remainingHours = Math.floor(
      (differenceInSeconds % (60 * 60 * 24)) / (60 * 60)
    );
    const remainingMinutes = Math.floor((differenceInSeconds % (60 * 60)) / 60);
    const remainingSeconds = differenceInSeconds % 60;
    setTimeRemaining({
      days,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(updateTimeRemaining, 1000);
    return () => clearInterval(intervalId);
  }, [target]);

  return (
    <div>
      {timeRemaining.days} days,{timeRemaining.hours} hours,
      {timeRemaining.minutes} minutes, {timeRemaining.seconds}seconds.
    </div>
  );
};
