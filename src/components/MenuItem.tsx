import type { Menuitem } from "../types/types";

type MenuItemProps = {
  menuitem: Menuitem;
};

export default function MenuItem({ menuitem }: MenuItemProps) {
  return (
    <button className=" border-4 border-blue-400 hover:bg-blue-200 w-full p-3 flex justify-between cursor-pointer">
      <p>{menuitem.name}</p>
      <p className=" font-black">${menuitem.price}</p>
    </button>
  );
}
