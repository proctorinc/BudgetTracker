import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { Loader } from "@/components/Elements/Loader";
import { Layout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";

import { useFund } from "../hooks/useFund";
import { AnimatedDetailHeader } from "@/components/Elements/AnimatedDetailHeader";

const Fund = () => {
  const { fundId } = useParams();
  const { data, isLoading, error } = useFund({ fundId });

  if (isLoading || !fundId) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const fund = data.fund;

  return (
    <Layout back>
      <div className="flex flex-col items-center gap-1 py-5">
        <AnimatedDetailHeader
          title={formatCurrency(fund.initial_amount)}
          subtitle={data.fund.name}
        />
      </div>
    </Layout>
  );
};

export default Fund;
