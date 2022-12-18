import { AnimatedCard } from "@/components/Elements/AnimatedCard";

const UpdateDetail = ({ label, icon, onClick, children }) => {
  return (
    <AnimatedCard onClick={onClick}>
      <div className="flex w-10 h-10 border border-gray-600 rounded-full p-1 justify-center items-center">
        {icon}
      </div>
      <div className="p-2">
        <label className="text-sm font-semibold">{label}</label>
        <div className="flex gap-5">{children}</div>
      </div>
    </AnimatedCard>
  );
};

export default UpdateDetail;
