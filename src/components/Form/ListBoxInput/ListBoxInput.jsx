import { Listbox } from "@headlessui/react";

export const ListBoxInput = ({ label, selected, setSelected, choices }) => {
  return (
    <div className="flex items-center">
      <label htmlFor={`${label}-listbox`} className="text-xs pr-2">
        {label}:
      </label>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button id={`${label}-listbox`}>{selected}</Listbox.Button>
        <Listbox.Options>
          {choices.map((choice) => (
            <Listbox.Option key={choice} value={choice}>
              {choice}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
