import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { createFund } from "../api/createFund";
import { Layout } from "@/components/Layout";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { icons } from "@/utils/icons";
import { IconFromText } from "@/components/Misc/IconFromText/IconFromText";

const CreateFund = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [error, setError] = useState();
  const [icon, setIcon] = useState(icons[0]);
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
        <div className="flex justify-center p-2 bg-gray-200 rounded-md border-2 border-gray-300 my-2">
          {error}
        </div>
      )}
      <form className="flex flex-col justify-end" onSubmit={handleCreateFund}>
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
              choices={icons}
              renderItem={(item) => (
                <IconFromText text={item} className="h-6" />
              )}
            />
          </div>
        </div>
        <div className="flex justify-center p-5">
          <Button text="Create Fund" disabled={isFormLoading} />
        </div>
      </form>
    </Layout>
  );
};

export default CreateFund;
