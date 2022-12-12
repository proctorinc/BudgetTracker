import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export const AutocompleteInput = ({ selected, setSelected, choices }) => {
  const [query, setQuery] = useState("");

  const filteredChoices =
    query === ""
      ? choices
      : choices.filter((choice) => {
          return choice.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selected} onChange={setSelected}>
      <Combobox.Input
        className="input input-ghost"
        displayValue={(choice) => choice}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Combobox.Button>
      <Combobox.Options>
        {filteredChoices.map((choice) => (
          <Combobox.Option key={choice} value={choice}>
            {choice}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};
