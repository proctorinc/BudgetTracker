import { Menu as HeadlessMenu } from "@headlessui/react";

const MenuItem = ({ title, icon, onClick, active }) => {
  return (
    <HeadlessMenu.Item
      className={`z-50 relative cursor-default select-none py-6 sm:py-3 px-8 sm:px-10 hover:bg-gray-300 border-gray-300 ${
        active && "bg-gray-200"
      }`}
    >
      <div className="grid w-fit text-gray-600" onClick={onClick}>
        <div className="flex gap-3 align-left">
          {icon}
          {title}
        </div>
      </div>
    </HeadlessMenu.Item>
  );
};

export default MenuItem;
