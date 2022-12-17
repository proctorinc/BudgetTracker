import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { createFund } from "../api/createFund";
import { useFunds } from "../hooks/useFunds";
import { formatCurrency } from "@/utils/currency";
import { MainLayout } from "@/components/Layout";
import { Loader } from "@/components/Elements/Loader";

const CreateFund = () => {
  const fundsQuery = useFunds();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [error, setError] = useState();
  const [fundName, setFundName] = useState("");
  const [fundInitialBalance, setFundInitialBalance] = useState(0);
  const navigate = useNavigate();

  const handleCreateFund = (event) => {
    event.preventDefault();
    if (fundInitialBalance <= fundsQuery.data.unallocated_balance) {
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
    <MainLayout>
      <Button text="back" onClick={() => navigate("/funds")} />
      {error && (
        <div className="flex justify-center p-2 bg-red-300 my-2">
          Error: {error}
        </div>
      )}
      {fundsQuery.isLoading && <Loader />}
      <form className="flex flex-col items-center" onSubmit={handleCreateFund}>
        <h2 className="text-2xl">
          Unallocated: {formatCurrency(fundsQuery.data?.unallocated_balance)}
        </h2>
        <div className="flex flex-col align-center items-right justify-center w-full">
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
    </MainLayout>
  );
};

export default CreateFund;
