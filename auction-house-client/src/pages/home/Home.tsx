import Banner from "../../components/Banner";
import ProductItem from "./components/ProductItem";
import SidebarItem from "./components/SidebarItem";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className="font-bold text-xl mb-4">Current live auction</div>
            <div className="grid grid-cols-2 gap-4">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
            <hr className="mt-8" />
            <div className="font-bold text-xl my-4">Upcoming auction</div>
            <div className="grid grid-cols-2 gap-4">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
          <div className="col-span-3">
            <div className="font-bold text-xl mb-2">Most selled</div>
            <div className="flex flex-col gap-4">
              <SidebarItem />
              <SidebarItem />
              <SidebarItem />
              <SidebarItem />
              <SidebarItem />
            </div>
          </div>
        </div>
        {/* <div>Upcoming live auction</div> */}
      </div>
    </div>
  );
}
