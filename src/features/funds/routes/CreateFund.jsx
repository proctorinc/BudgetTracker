import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ICONS } from "@/constants";
import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { IconFromText } from "@/components/Misc/IconFromText/IconFromText";

import { createFund } from "../api/createFund";

const CreateFund = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [error, setError] = useState();
  const [icon, setIcon] = useState(ICONS.values()[0]);
  const [fundName, setFundName] = useState("");
  const navigate = useNavigate();

  const handleCreateFund = (event) => {
    event.preventDefault();
    setIsFormLoading(true);
    createFund({
      name: fundName,
      icon: icon,
    })
      .catch(setError)
      .finally(() => {
        setIsFormLoading(false);
        if (!error) {
          navigate("/funds");
        }
      });
  };

  return (
    <Layout back size="xs" title="Create Fund" returnUrl="/funds">
      {error && (
        <div className="flex justify-center p-2 bg-gray-200 rounded-md border-1 border-gray-300 my-2">
          {error}
        </div>
      )}
      <form className="flex flex-col" onSubmit={handleCreateFund}>
        <div className="flex w-full">
          <div className="flex flex-col w-3/4">
            <Input
              label="Name"
              placeholder="Name"
              value={fundName}
              onChange={setFundName}
            />
          </div>
          <div className="flex flex-col flex-grow h-fill justify-end px-1">
            <ListBoxInput
              label="Icon"
              selected={icon}
              setSelected={setIcon}
              choices={ICONS.values()}
              renderItem={(item) => (
                <IconFromText text={item} className="h-6" />
              )}
            />
          </div>
        </div>
        <div className="flex justify-center p-5">
          <Button text="Create" disabled={isFormLoading} />
        </div>
      </form>
    </Layout>
  );
};

export default CreateFund;
