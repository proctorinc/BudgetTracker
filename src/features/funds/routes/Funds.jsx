import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Elements/Button";
import FundsList from "../components/FundsList";
import { useFunds } from "../hooks/useFunds";
import { MainLayout } from "@/components/Layout";
import { Loader } from "@/components/Elements/Loader";

const Funds = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFunds();

  if (isLoading) {
    return (
      <div className="flex justify-center align-center items-center w-screen h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainLayout title="Funds">
      {/* <FundsChart funds={data.funds} /> */}
      <FundsList funds={data.funds} />
      <div className="flex justify-center p-5">
        <Button text="New Fund" onClick={() => navigate("/funds/create")} />
      </div>
    </MainLayout>
  );
};

export default Funds;
