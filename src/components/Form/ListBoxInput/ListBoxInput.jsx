import { Listbox } from "@headlessui/react";

export const ListBoxInput = ({
  label,
  selected,
  setSelected,
  choices,
  renderItem,
}) => {
  const filteredChoices = choices.filter((choice) => choice !== selected);
  return (
    <div className="flex items-center">
      <label htmlFor={`${label}-listbox`}>{label}:</label>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button id={`${label}-listbox`}>
          {renderItem ? renderItem(selected) : selected}
        </Listbox.Button>
        <Listbox.Options>
          {filteredChoices.map((choice) => (
            <Listbox.Option key={choice} value={choice}>
              {renderItem ? renderItem(choice) : choice}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
