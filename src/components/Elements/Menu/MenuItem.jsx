import { Menu as HeadlessMenu } from "@headlessui/react";

const MenuItem = ({ title, onClick }) => {
  return (
    <HeadlessMenu.Item
      className={({ active }) =>
        `relative cursor-default select-none py-2 pr-10 pl-10 border-gray-300 ${
          active ? "bg-gray-300 text-gray-900" : "text-gray-900"
        }`
      }
    >
      {({ active }) => (
        <a className={`${active && "bg-blue-500"}`} onClick={onClick}>
          {title}
        </a>
      )}
    </HeadlessMenu.Item>
  );
};

export default MenuItem;
