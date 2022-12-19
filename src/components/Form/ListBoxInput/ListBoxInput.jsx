import { Listbox } from "@headlessui/react";
import { CaretDown, Check } from "phosphor-react";

export const ListBoxInput = ({
  selected,
  setSelected,
  choices,
  renderItem,
}) => {
  // const filteredChoices = choices.filter((choice) => choice !== selected);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="flex items-center py-2 px-4 text-gray-600 font-light bg-gray-200 border-gray-300 rounded-md w-fit">
          <div className="flex gap-2 items-center justify-center">
            {renderItem ? renderItem(selected) : selected}
            <CaretDown size={15} weight="bold" />
          </div>
        </Listbox.Button>
        <Listbox.Options className="absolute my-1 overflow-auto rounded-md bg-gray-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 w-fit font-light text-gray-600">
          {choices?.map((choice) => (
            <Listbox.Option
              key={choice}
              value={choice}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pr-20 pl-2 border-gray-300 ${
                  active ? "bg-gray-300 text-gray-900" : "text-gray-900"
                }`
              }
            >
              {({ selected }) => (
                <>
                  {selected ? (
                    <div className="flex gap-4 items-center text-right">
                      <Check size={15} weight="bold" />
                      {renderItem ? renderItem(choice) : choice}
                    </div>
                  ) : (
                    <div className="pl-8">
                      {renderItem ? renderItem(choice) : choice}
                    </div>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
