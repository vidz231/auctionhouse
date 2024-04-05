export default function SearchBar() {
  return (
    <div className="flex">
      <form
        action="./search"
        method="GET"
        className="flex rounded-md overflow-hidden w-[400px]"
      >
        <button
          className=" text-black border border-r-0 opacity-50 px-3 text-lg font-semibold py-1 rounded-l-md"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass text-sm"></i>
        </button>
        <input
          type="text"
          placeholder="Search..."
          name="keyword"
          className="w-full rounded-md rounded-l-none border px-4 outline-none"
        />
      </form>
    </div>
  );
}
