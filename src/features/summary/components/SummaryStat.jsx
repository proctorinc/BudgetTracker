import { AnimatedCard } from "@/components/Elements/AnimatedCard";

export const SummaryStat = ({
  firstStat,
  firstHeader,
  secondStat,
  secondHeader,
  thirdStat,
  thirdHeader,
}) => {
  return (
    <div className="flex gap-2">
      <div className="w-3/4">
        {/* <div className="p-3">
          <div className="flex items-center justify-center h-32 w-32 bg-gray-300 rounded-full">
            <div className="h-24 w-24 bg-gray-50 rotate-45">
            </div>
          </div>
        </div> */}
        <AnimatedCard>
          <div className="p-3">
            <div className="border-8 border-gray-800 border-l-gray-300 border-t-gray-300 border-b-gray-300 rounded-full animate-full p-2 h-24 w-24"></div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold">
              <span className="font-extralight">{firstHeader}:</span>{" "}
              {firstStat}
            </p>
            <p className="text-xl font-bold">
              <span className="font-extralight">{secondHeader}:</span> -
              {secondStat}
            </p>
          </div>
        </AnimatedCard>
      </div>
      <div className="w-1/4">
        <AnimatedCard>
          <div className="flex flex-col justify-center items-center py-6">
            <p>{thirdHeader}</p>
            <p className="text-5xl font-extralight">{thirdStat}</p>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};
