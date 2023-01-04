import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ICONS } from "@/constants";
import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { IconFromText } from "@/components/Misc/IconFromText/IconFromText";

import { createBudget } from "../api/createBudget";

const CreateBudget = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [error, setError] = useState();
  const [icon, setIcon] = useState(Object.values(ICONS)[0]);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(0.0);
  const navigate = useNavigate();

  const handleCreateBudget = (event) => {
    event.preventDefault();
    setIsFormLoading(true);
    createBudget({ name, icon, goal })
      .catch(setError)
      .finally(() => {
        setIsFormLoading(false);
        if (!error) {
          navigate("/budgets");
        }
      });
  };

  return (
    <Layout back size="xs" title="Create Budget" returnUrl="/budgets">
      {error && (
        <div className="flex justify-center p-2 bg-gray-200 rounded-md border-1 border-gray-300 my-2">
          {error}
        </div>
      )}
      <form className="flex flex-col" onSubmit={handleCreateBudget}>
        <div className="flex w-full">
          <div className="flex flex-col w-3/4">
            <Input
              label="Name"
              placeholder="Name"
              value={name}
              onChange={setName}
            />
          </div>
          <div className="flex flex-col flex-grow h-fill justify-end px-1">
            <ListBoxInput
              label="Icon"
              selected={icon}
              setSelected={setIcon}
              choices={Object.values(ICONS)}
              renderItem={(item) => (
                <IconFromText text={item} className="h-6" />
              )}
            />
          </div>
        </div>
        <Input label="Goal" value={goal} onChange={setGoal} type="number" />
        <div className="flex justify-center p-5">
          <Button text="Create" disabled={isFormLoading} />
        </div>
      </form>
    </Layout>
  );
};

export default CreateBudget;
