const UpdateDetail = ({ label, icon, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-1 w-full border border-black rounded-md px-2 hover:bg-gray-200"
    >
      <div className="flex w-10 h-10 border border-black rounded-full p-1 justify-center items-center">
        {icon}
      </div>
      <div className="p-2">
        <label className="text-sm font-semibold">{label}</label>
        <div className="flex gap-5">{children}</div>
      </div>
    </div>
  );
};

export default UpdateDetail;
