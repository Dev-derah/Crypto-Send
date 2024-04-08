import data from "../../constants/menuItems";

function SideMenu() {
  return (
    <div className="flex flex-col gap-10 pt-5 w-full">
      {data.map((group, index) => (
        <div className="flex flex-col " key={index}>
          <h3 className="text-neutral-8 pl-2 text-xs font-medium uppercase">
            {group.category}
          </h3>
          {group?.list?.map((item, index) => (
            <div key={index} className="flex flex-col mt-4">
              <div className="hover:bg-neutral hover:px-4 transition-background duration-300 ease-in-out w-[fit-content] rounded-3xl cursor-pointer py-2  flex gap-3 ">
                <img height="1rem" src={item.icon} alt={item.title} />
                <span className=" capitalize text-black text-base font-medium">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SideMenu;
