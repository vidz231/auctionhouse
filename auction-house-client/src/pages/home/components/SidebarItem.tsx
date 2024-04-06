export default function SidebarItem() {
  return (
    <div className="border rounded-md bg-slate-100 flex text-sm items-center p-2">
      <div className="bg-red-300 aspect-square h-[100px] rounded-md">Image</div>
      <div className="mx-2 my-1">
        <div className="font-bold">The name of a auction product</div>
        <div className="">by Nguyen Van Hieu</div>
        <div className="">Vietnam</div>
        <div className="">$123045</div>
      </div>
    </div>
  );
}
