import { Button } from "@/components/Elements/Button";

const UpdateDetail = ({ label, icon, children, onSubmit }) => {
  return (
    <div className="flex items-center gap-1 w-full border border-black rounded-md px-2">
      <div className="flex w-10 h-10 border border-black rounded-full p-1 justify-center items-center">
        {icon}
      </div>
      <div className="p-2">
        <label className="text-sm font-semibold">{label}</label>
        <form onSubmit={onSubmit} className="flex justify-between">
          {children}
          <Button text="submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateDetail;
