import { useParams } from "react-router-dom";

const Fund = () => {
  const { fundId } = useParams();
  return (
    <div>
      <h1>Fund: {fundId}</h1>
    </div>
  );
};

export default Fund;
