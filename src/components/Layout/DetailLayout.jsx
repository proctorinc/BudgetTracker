import { AnimatedDetailHeader } from "../Elements/AnimatedDetailHeader";
import { Loader } from "../Elements/Loader";

export const DetailLayout = ({
  title,
  titleIcon,
  subtitle,
  subtitleIcon,
  children,
  isLoading,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 text-gray-800 min-h-screen pb-36">
      <div className="sm:max-w-xl w-full p-4 flex-grow">
        {title && (
          <AnimatedDetailHeader
            title={title}
            titleIcon={titleIcon}
            subtitle={subtitle}
            subtitleIcon={subtitleIcon}
          />
        )}
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
