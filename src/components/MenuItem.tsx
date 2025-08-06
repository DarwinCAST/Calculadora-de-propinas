import type { Menuitem } from "../types/types";

type MenuItemProps = {
  menuitem: Menuitem;
  addItem: (item: Menuitem) => void;
};

export default function MenuItem({ menuitem, addItem }: MenuItemProps) {
  return (
    <button
      onClick={() => addItem(menuitem)}
      className="rounded-b-sm border-3 border-blue-400 hover:bg-blue-200 w-full p-3 flex justify-between cursor-pointer"
    >
      <p>{menuitem.name}</p>
      <p className=" font-black">${menuitem.price}</p>
    </button>
  );
}
