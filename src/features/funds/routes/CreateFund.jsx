import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { createFund } from "../api/createFund";
import { useFunds } from "../hooks/useFunds";
import { formatCurrency } from "@/utils/currency";
import { Layout } from "@/components/Layout";
import { Loader } from "@/components/Elements/Loader";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { icons } from "@/utils/icons";
import { IconFromText } from "@/components/Misc/IconFromText/IconFromText";

const CreateFund = () => {
  const fundsQuery = useFunds();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [error, setError] = useState();
  const [icon, setIcon] = useState(icons[0]);
  const [fundName, setFundName] = useState("");
  const [fundInitialBalance, setFundInitialBalance] = useState(0);
  const navigate = useNavigate();

  const handleCreateFund = (event) => {
    event.preventDefault();
    console.log(fundsQuery.data.unallocated_balance);
    if (fundsQuery.data.unallocated_balance <= 0) {
      setError("No funds left to allocate");
    } else if (fundInitialBalance <= fundsQuery.data.unallocated_balance) {
      setIsFormLoading(true);
      createFund({
        name: fundName,
        initialBalance: fundInitialBalance,
      })
        .catch(setError)
        .finally(() => {
          setIsFormLoading(false);
          if (!error) {
            navigate("/funds");
          }
        });
    } else {
      setError("Initial Balance exceeds unallocated funds left");
    }
  };

  return (
    <Layout back size="xs" title="Create Fund" returnUrl="/funds">
      {error && (
        <div className="flex justify-center p-2 bg-gray-200 rounded-md border-2 border-gray-300 my-2">
          {error}
        </div>
      )}
      <form className="flex flex-col items-center" onSubmit={handleCreateFund}>
        <h2 className="text-2xl">
          Unallocated: {formatCurrency(fundsQuery.data?.unallocated_balance)}
        </h2>
        <div className="flex flex-col align-center items-right justify-center w-full">
          <ListBoxInput
            label="Icon"
            selected={icon}
            setSelected={setIcon}
            choices={icons}
            renderItem={(item) => <IconFromText text={item} className="h-6" />}
          />
          <Input
            label="Name"
            placeholder="Name"
            value={fundName}
            onChange={setFundName}
          />
          <Input
            label="Balance"
            type="number"
            value={fundInitialBalance}
            onChange={setFundInitialBalance}
          />
        </div>
        <div className="flex justify-center p-5">
          <Button text="Create Fund" disabled={isFormLoading} />
        </div>
      </form>
    </Layout>
  );
};

export default CreateFund;
