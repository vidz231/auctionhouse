import { useDispatch } from "react-redux";
import ProductItem from "./components/ProductItem";
import { chatWith } from "../../redux/chatSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET } from "../../utils/request";

const InfoItem = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="row-span-1">
      {name}:
      <span className="ml-2 text-blue-500 font-semibold">
        {Number(value) ? Number(value).toLocaleString() : value}
      </span>
    </div>
  );
};

export default function Shop() {
  const [tab, setTab] = useState();

  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [owner, setOwner] = useState();
  const dispatch = useDispatch();
  const handleChat = () => {
    dispatch(chatWith(id));
  };
  window.scrollTo(0, 0);
  useEffect(() => {
    (async () => {
      const owner = await GET(`/api/users/${id}`);
      const products = (await GET(`/api/users/${id}/products`))._embedded
        .products;
      setProducts(products);
      setOwner(owner);
    })();
  }, []);
  return (
    <div>
      <div className="bg-slate-200 grid grid-cols-3 border rounded-md px-16 gap-8">
        <div className="bg-purple-200">
          <div className="flex px-2 pt-2">
            {owner && (
              <div
                className="border rounded-md aspect-square h-[80px] bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${owner.avatarUrl})` }}
              ></div>
            )}
            <div className="ml-2">
              <div className="font-bold text-white text-xl">
                {owner && owner.name}
              </div>
              <div className="text-slate-500 text-base italic">
                {owner && owner.address}
              </div>
            </div>
          </div>
          <div className="flex gap-4 px-2 py-2">
            <div className="w-full py-0.5 px-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-semibold text-sm flex justify-center">
              Follow
            </div>
            <div
              className="w-full py-0.5 px-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-semibold text-sm flex justify-center"
              onClick={handleChat}
            >
              Chat
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between py-4">
          <InfoItem name="Products" value={products.length} />
          <InfoItem name="Feedbacks" value="45623" />
          <InfoItem name="Selled" value="45623" />
        </div>
        <div className="h-full flex flex-col justify-between py-4">
          <InfoItem name="Followers" value="45623" />
          <InfoItem name="Rating" value="45623" />
          <InfoItem name="Created at" value="45623" />
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
            {products.length > 0 &&
              products.map((product: any) => <ProductItem product={product} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
