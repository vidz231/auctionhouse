import ProductItem from "../shop/components/ProductItem";

export default function Search() {
  return (
    <div className="border mt-4 grid grid-cols-12">
      <div className="col-span-2 p-2 px-4">
        <div className="py-1">Ahihi</div>
        <div className="py-1">Ahihi</div>
        <div className="py-1">Ahihi</div>
      </div>
      <div className="col-span-10 px-2">
        <div className="py-4">Showing result for: "abcxyz"</div>
        <div className="grid grid-cols-4 gap-4">
          {/* <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem /> */}
        </div>
      </div>
    </div>
  );
}
