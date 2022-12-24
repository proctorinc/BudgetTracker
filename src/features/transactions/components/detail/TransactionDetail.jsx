import { AnimatedCard } from "@/components/Elements/AnimatedCard";

const UpdateDetail = ({ label, icon, onClick, children, actionItem }) => {
  return (
    <AnimatedCard onClick={onClick}>
      <div className="flex w-10 h-10 border border-gray-400 bg-gray-200 rounded-full justify-center items-center">
        {icon}
      </div>
      <div className="px-3">
        <label className="text-xs font-bold">{label}</label>
        <div className="flex gap-5 font-extralight">{children}</div>
      </div>
      {actionItem && (
        <div className="relative flex float-right items-end justify-end item-end flex-grow">
          {actionItem}
        </div>
      )}
    </AnimatedCard>
  );
};

export default UpdateDetail;
