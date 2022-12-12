const TransactionUpdateDetail = ({ label, icon, inputs }) => {
  return (
    <div className="flex items-center gap-1 w-full border border-black rounded-md px-2">
      <div className="flex w-10 h-10 border border-black rounded-full p-1 justify-center items-center">
        {icon}
      </div>
      <div className="p-2">
        <label className="text-sm font-semibold">{label}</label>
        <div className="flex justify-between">{inputs}</div>
      </div>
    </div>
  );
};

export default TransactionUpdateDetail;
