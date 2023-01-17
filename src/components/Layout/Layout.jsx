import { AnimatedHeader } from "../Elements/AnimatedHeader";
import { Loader } from "../Elements/Loader";

export const Layout = ({ title, subtitle, children, isLoading, size }) => {
  let maxWidth = "sm:max-w-xl";

  if (size === "sm") {
    maxWidth = "sm:max-w-sm";
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 text-gray-800 min-h-screen">
      <div className={`${maxWidth} w-full p-3 flex-grow`}>
        {title && <AnimatedHeader title={title} subtitle={subtitle} />}
        {isLoading ? (
          <div className="py-40">
            <Loader />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
