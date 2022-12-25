import { motion } from "framer-motion";
import { Listbox } from "@headlessui/react";
import { CaretDown, Check } from "phosphor-react";

export const ListBoxInput = ({
  selected,
  setSelected,
  choices,
  renderItem,
}) => {
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <motion.div
          className="w-fit"
          whileHover={{
            opacity: 1,
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Listbox.Button className="text-sm flex items-center py-2 px-4 text-gray-600 font-light border-2 bg-gray-200 rounded-md w-fit hover:bg-gray-300 hover:border-gray-300">
            <div className="flex gap-2 items-center justify-center">
              {renderItem ? renderItem(selected) : selected}
              <CaretDown size={15} weight="bold" />
            </div>
          </Listbox.Button>
        </motion.div>
        <Listbox.Options>
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
              },
            }}
            className="absolute max-h-64 my-1 overflow-auto rounded-md bg-gray-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 w-fit font-light text-gray-600"
          >
            {choices?.map((choice) => (
              <Listbox.Option
                key={`${choice.month} ${choice.year}`}
                value={choice}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pr-10 pl-2 border-gray-300 ${
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
          </motion.div>
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
