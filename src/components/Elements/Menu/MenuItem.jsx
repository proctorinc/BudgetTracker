import { Menu as HeadlessMenu } from "@headlessui/react";

const MenuItem = ({ title, icon, onClick, active }) => {
  return (
    <HeadlessMenu.Item
      className={`z-50 relative cursor-default select-none py-4 sm:py-2 pr-10 pl-10 hover:bg-gray-300 border-gray-300 ${
        active && "bg-gray-300"
      }`}
    >
      <div className="flex w-fit gap-1 text-gray-600" onClick={onClick}>
        {icon}
        {title}
      </div>
    </HeadlessMenu.Item>
  );
};

export default MenuItem;
